import express from 'express';
import { initiateTrade, getTrade } from '../controllers/tradeController.js';

const router = express.Router();

router.post('/api/trades', initiateTrade);
router.get('/api/trades/:id', getTrade);

export default router;