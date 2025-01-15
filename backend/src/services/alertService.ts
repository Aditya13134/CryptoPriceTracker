import Alert from '../models/alertModel';
import { sendEmail } from '../config/email';
import { getCryptoPrice } from './cryptoServices';

// Function to create a new alert in the database
export const createAlert = async (data: any) => {
  const alert = new Alert(data); // Create a new Alert instance with the provided data
  await alert.save(); // Save the alert to the database
  return alert; // Return the created alert
};

// Function to fetch all alerts from the database
export const getAlerts = async () => {
  return Alert.find(); // Find and return all alerts
};

// Function to process alerts and send notifications
export const processAlerts = async () => {
  const alerts = await Alert.find(); // Fetch all alerts from the database

  for (const alert of alerts) {
    // Fetch the current price of the cryptocurrency specified in the alert
    const currentPrice = await getCryptoPrice(alert.crypto); // Corrected: Removed extra parameters

    // Check if the current price meets or exceeds the alert threshold
    if (currentPrice >= alert.threshold) {
      // Send an email notification to the user
      await sendEmail(
        alert.email,
        `Alert: ${alert.crypto} has reached the threshold of ${alert.threshold}. Current price: ${currentPrice}`,
        `The cryptocurrency ${alert.crypto} you are monitoring has reached a price of $${currentPrice}.`
      );
    }
  }
};
