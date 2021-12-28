import type { NextApiRequest, NextApiResponse } from 'next';

import { skillItems } from '@/data/data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(skillItems);
}
