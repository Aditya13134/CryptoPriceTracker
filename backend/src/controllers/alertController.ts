import { Request, Response } from 'express';
import { createAlert, getAlerts } from '../services/alertService';

// Function to handle creating a new alert
export const createAlertHandler = async (req: Request, res: Response) => {
  try {
    const alert = await createAlert(req.body);
    res.status(201).json(alert);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

// Function to handle retrieving all alerts
export const getAlertsHandler = async (req: Request, res: Response) => {
  try {
    const alerts = await getAlerts();
    res.status(200).json(alerts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
