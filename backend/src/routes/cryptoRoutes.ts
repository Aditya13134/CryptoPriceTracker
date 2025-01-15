import express from 'express';
import { getCryptoPriceHandler } from '../controllers/cryptoController';

const router = express.Router();

router.get('/:crypto', getCryptoPriceHandler);

export default router;