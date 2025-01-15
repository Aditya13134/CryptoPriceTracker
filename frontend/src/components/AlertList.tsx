import React, { useEffect, useState } from 'react';
import { getAlerts } from '../services/api';

// Define the Alert interface for type checking
interface Alert {
  _id: string; // Unique identifier for the alert
  crypto: string; // The cryptocurrency being monitored
  threshold: number; // Price threshold for the alert
  email: string; // Email to notify when the alert triggers
}

const AlertsList: React.FC = () => {
  // State variables for alerts, loading status, and error message
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch alerts when the component mounts
  useEffect(() => {
    // Define the async function to fetch alerts
    const fetchAlerts = async () => {
      setLoading(true); // Set loading to true while fetching data
      setError(null); // Reset any previous error message
      try {
        const data = await getAlerts(); // Fetch the alerts from API
        setAlerts(data); // Store fetched alerts in state
      } catch (error) {
        setError('Failed to fetch alerts'); // Set error if fetch fails
        console.error('Error fetching alerts:', error); // Log the error
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    // Call the async fetchAlerts function
    fetchAlerts();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Show loading state while the data is being fetched
  if (loading) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="text-center text-gray-600">Loading alerts...</p>
      </div>
    );
  }

  // Show error message if there was an issue fetching the alerts
  if (error) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  // Display the list of alerts if they are fetched successfully
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Active Alerts</h2>
      {/* Check if there are no alerts and display a message */}
      {alerts.length === 0 ? (
        <p className="text-center text-gray-600">No alerts found</p>
      ) : (
        <ul className="space-y-2">
          {/* Render each alert as a list item */}
          {alerts.map((alert) => (
            <li key={alert._id} className="flex justify-between items-center p-2 border-b border-gray-200">
              <span className="text-lg font-semibold">{alert.crypto}</span> {/* Display cryptocurrency */}
              <span className="text-lg">${alert.threshold}</span> {/* Display price threshold */}
              <span className="text-sm text-gray-600">{alert.email}</span> {/* Display associated email */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlertsList;
