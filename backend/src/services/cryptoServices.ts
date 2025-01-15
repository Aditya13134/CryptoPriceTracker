import axios from 'axios';

// Define the types if necessary
type Type1 = string; // Replace with the actual type if different
type Type2 = number; // Replace with the actual type if different

export const getCryptoPrice = async (crypto: string) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
  return response.data[crypto]?.usd;
};
