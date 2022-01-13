import { NextApiRequest, NextApiResponse } from 'next';
import servicesData from '../../adapters/servicesData';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ servicesData });
};
