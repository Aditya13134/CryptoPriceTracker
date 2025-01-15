import Alert from '../models/alertModel';
import { sendEmail } from '../config/email';
import { getCryptoPrice } from './cryptoServices';

export const createAlert = async (data: any) => {
  const alert = new Alert(data);
  await alert.save();
  return alert;
};

export const getAlerts = async () => {
  return Alert.find();
};

export const processAlerts = async () => {
  const alerts = await Alert.find();

  for (const alert of alerts) {
    const currentPrice = await getCryptoPrice(alert.crypto); // Corrected: Removed extra parameters
    if (currentPrice >= alert.threshold) {
      await sendEmail(
        alert.email,
        `Alert: ${alert.crypto} has reached the threshold of ${alert.threshold}. Current price: ${currentPrice}`,
        `The cryptocurrency ${alert.crypto} you are monitoring has reached a price of $${currentPrice}.`
      );
    }
  }
};
