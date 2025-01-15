import React, { useEffect, useState } from 'react';
import { getAlerts } from '../services/api';

// Define the Alert interface
interface Alert {
  _id: string;
  crypto: string;
  threshold: number;
  email: string;
}

const AlertsList: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Define the async function
    const fetchAlerts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAlerts();
        setAlerts(data);
      } catch (error) {
        setError('Failed to fetch alerts');
        console.error('Error fetching alerts:', error);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchAlerts();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="text-center text-gray-600">Loading alerts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Active Alerts</h2>
      {alerts.length === 0 ? (
        <p className="text-center text-gray-600">No alerts found</p>
      ) : (
        <ul className="space-y-2">
          {alerts.map((alert) => (
            <li key={alert._id} className="flex justify-between items-center p-2 border-b border-gray-200">
              <span className="text-lg font-semibold">{alert.crypto}</span>
              <span className="text-lg">${alert.threshold}</span>
              <span className="text-sm text-gray-600">{alert.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertsList;
