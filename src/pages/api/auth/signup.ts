import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import handleUser from '@/server/crud';

import { User } from '@/utils/interfaces';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { first_name, last_name, username, email, password } = req.body;

    // const filePath = path.join(process.cwd(), 'src', 'data.json');
    // const fileContents = fs.readFileSync(filePath, 'utf8');
    // const data = JSON.parse(fileContents);

    // const userExists = data.users.find((user: any) => user.email === email || user.username === username);

    const user = await handleUser.searchByEmail(email);
   
    if (user) {
      return res.status(401).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser: User = {
      id: uuidv4(),
      first_name,
      last_name,
      username,
      email,
      password: hashedPassword,
    };

    handleUser.addUser(newUser);
    // data.users.push(newUser);

    // fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');    
    res.status(201).json({ message: 'User created successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
