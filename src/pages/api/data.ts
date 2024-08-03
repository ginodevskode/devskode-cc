import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler =  async (req: NextApiRequest, res: NextApiResponse) => {
  const jsonDirectory = path.join(process.cwd(), 'src');
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  const data = JSON.parse(fileContents);
  res.status(200).json(data);
};

export default handler