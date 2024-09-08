import express from 'express';
import { initiateTrade, getTrade } from '../controllers/tradeController.js';

const router = express.Router();

router.post('/api/trades', initiateTrade);
router.get('/api/trades/:transactionId', getTrade);

export default router;