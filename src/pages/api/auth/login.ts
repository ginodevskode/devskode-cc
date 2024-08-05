import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import { User } from '@/utils/interfaces';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const filePath = path.join(process.cwd(), 'src', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    const user = data.users.find((user: User) => user.email === email && user.password === password);
    

    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
