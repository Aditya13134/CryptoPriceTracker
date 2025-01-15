import express from 'express';
import { createAlertHandler, getAlertsHandler } from '../controllers/alertController';

const router = express.Router();

router.post('/', createAlertHandler);
router.get('/', getAlertsHandler);

export default router;