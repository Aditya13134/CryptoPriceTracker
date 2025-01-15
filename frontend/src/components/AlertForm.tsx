import React, { useState } from 'react';
import { createAlert } from '../services/api';

// Component for creating a new alert
const AlertForm: React.FC = () => {
  // State to manage form inputs
  const [form, setForm] = useState({ crypto: '', threshold: '', email: '' });

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Extract name and value from the input
    setForm({ ...form, [name]: value }); // Update the form state
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Call the API to create a new alert with the form data
      await createAlert({
        crypto: form.crypto,
        threshold: parseFloat(form.threshold), // Convert threshold to a number
        email: form.email,
      });
      alert('Alert created successfully!'); // Notify the user of success
    } catch (error) {
      console.error('Error creating alert:', error); // Log any errors
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Form title */}
      <h2 className="text-2xl font-bold mb-4">Create Alert</h2>

      {/* Form for creating alerts */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input for cryptocurrency name */}
        <input 
          type="text" 
          name="crypto" 
          placeholder="Crypto" 
          onChange={handleChange} 
          required 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {/* Input for threshold value */}
        <input 
          type="number" 
          name="threshold" 
          placeholder="Threshold" 
          onChange={handleChange} 
          required 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {/* Input for email address */}
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {/* Submit button */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition"
        >
          Create Alert
        </button>
      </form>
    </div>
  );
};

export default AlertForm;
