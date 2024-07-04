import type { NextApiRequest, NextApiResponse } from 'next';

import { portfolios } from '@/data/data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(portfolios);
}
