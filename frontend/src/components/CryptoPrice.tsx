import React, { useState } from 'react';
import { getCryptoPrice } from '../services/api';

const CryptoPrice: React.FC = () => {
  // State variables to store cryptocurrency input, price, error, and loading state
  const [crypto, setCrypto] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Async function to fetch the price of the entered cryptocurrency
  const fetchPrice = async () => {
    // Check if the input is empty
    if (!crypto.trim()) {
      setError('Please enter a cryptocurrency name');
      return;
    }

    setLoading(true); // Set loading to true while fetching the price
    setError(null); // Clear any previous error

    try {
      const data = await getCryptoPrice(crypto.toLowerCase()); // Fetch the price of the crypto
      if (data.price) {
        setPrice(data.price); // Update state with the price if found
      } else {
        setError('Cryptocurrency not found'); // Set error if no price is found
      }
    } catch (error) {
      setError('Failed to fetch price. Please try again.'); // Handle fetch errors
      console.error('Error fetching crypto price:', error); // Log error to the console
    } finally {
      setLoading(false); // Set loading to false once the request completes
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Get Crypto Price</h2>
      <div className="space-y-4">
        {/* Input field for entering the cryptocurrency name */}
        <input
          type="text"
          placeholder="Enter cryptocurrency (e.g., bitcoin)"
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)} // Update state on input change
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {/* Button to fetch price, disabled when loading */}
        <button 
          onClick={fetchPrice} 
          disabled={loading}
          className={`w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Loading...' : 'Get Price'} {/* Display loading text when in progress */}
        </button>
        
        {/* Display error message if there's an error */}
        {error && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
        
        {/* Display price if fetched successfully and no error */}
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
