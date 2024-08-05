import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import handleUser from '@/server/crud';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  if (req.method === 'POST') {
    const { email, password } = req.body;

   
    const user = await handleUser.searchByEmail(email);
   
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch) {
      return res.status(401).json({ message: 'Invalid Password' });
    }
  
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    setCookie({ res }, 'token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60, 
      path: '/',
    });

    res.status(200).json({ message: 'Login successful', token });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
