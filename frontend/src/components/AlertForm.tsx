import React, { useState } from 'react';
import { createAlert } from '../services/api';

const AlertForm: React.FC = () => {
  const [form, setForm] = useState({ crypto: '', threshold: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createAlert({
        crypto: form.crypto,
        threshold: parseFloat(form.threshold),
        email: form.email,
      });
      alert('Alert created successfully!');
    } catch (error) {
      console.error('Error creating alert:', error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Alert</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="crypto" 
          placeholder="Crypto" 
          onChange={handleChange} 
          required 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <input 
          type="number" 
          name="threshold" 
          placeholder="Threshold" 
          onChange={handleChange} 
          required 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
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
