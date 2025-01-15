import { Request, Response } from 'express';
import { getCryptoPrice } from '../services/cryptoServices';

// Function to handle fetching the price of a cryptocurrency
export const getCryptoPriceHandler = async (req: Request, res: Response) => {
  try {
    // Extract the cryptocurrency name from the request parameters
    const { crypto } = req.params;

    // Call the service function to fetch the cryptocurrency price
    const price = await getCryptoPrice(crypto); // Removed extra parameters

    // Respond with a 200 status and the crypto name and its price
    res.status(200).json({ crypto, price });
  } catch (error: unknown) {
    // Handle any errors that occur during the process
    if (error instanceof Error) {
      // If the error is an instance of the Error class, send a 500 status with the error message
      res.status(500).json({ error: error.message });
    } else {
      // If the error is of an unknown type, send a generic error response
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
