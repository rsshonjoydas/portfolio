import { NextApiRequest, NextApiResponse } from 'next';
import servicesData from '../../adapters/servicesData';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('API', servicesData);

  res.status(200).json({ servicesData });
};
