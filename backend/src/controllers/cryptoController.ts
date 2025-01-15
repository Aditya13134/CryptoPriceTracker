import { Request, Response } from 'express';
import { getCryptoPrice } from '../services/cryptoServices';

export const getCryptoPriceHandler = async (req: Request, res: Response) => {
  try {
    const { crypto } = req.params;
    const price = await getCryptoPrice(crypto); // Removed extra parameters
    res.status(200).json({ crypto, price });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};