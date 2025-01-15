import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const getCryptoPrice = async (crypto: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/crypto/${crypto}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('Cryptocurrency not found');
    }
    throw new Error('Failed to fetch cryptocurrency price');
  }
};

export const createAlert = async (data: { crypto: string; threshold: number; email: string }) => {
  const response = await axios.post(`${BASE_URL}/alerts`, data);
  return response.data;
};

export const getAlerts = async () => {
  const response = await axios.get(`${BASE_URL}/alerts`);
  return response.data;
};
