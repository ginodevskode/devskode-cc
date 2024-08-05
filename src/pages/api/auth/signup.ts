import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';


import { User } from '@/utils/interfaces';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { first_name, last_name, username, email, password } = req.body;
    
    const filePath = path.join(process.cwd(), 'src', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    const userExists = data.users.find((user: any) => user.email === email || user.username === username);
    
    if (userExists) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser: User = {
      id: uuidv4(), 
      first_name,
      last_name,
      username,
      email,
      password,
    };

    
    data.users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    

    res.status(201).json({ message: 'User created successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
