import React, { useState } from 'react';
import { getCryptoPrice } from '../services/api';

const CryptoPrice: React.FC = () => {
  const [crypto, setCrypto] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPrice = async () => {
    if (!crypto.trim()) {
      setError('Please enter a cryptocurrency name');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const data = await getCryptoPrice(crypto.toLowerCase());
      if (data.price) {
        setPrice(data.price);
      } else {
        setError('Cryptocurrency not found');
      }
    } catch (error) {
      setError('Failed to fetch price. Please try again.');
      console.error('Error fetching crypto price:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Get Crypto Price</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter cryptocurrency (e.g., bitcoin)"
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <button 
          onClick={fetchPrice} 
          disabled={loading}
          className={`w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Loading...' : 'Get Price'}
        </button>
        
        {error && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
        
        {price !== null && !error && (
          <div className="mt-4 p-4 bg-green-50 rounded-md">
            <p className="text-lg">
              Current Price of <span className="font-semibold">{crypto}</span>:
              <span className="font-bold text-green-600 ml-2">${price.toLocaleString()}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoPrice;
