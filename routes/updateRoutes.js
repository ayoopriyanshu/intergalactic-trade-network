import express from 'express';
import { getRealTimeUpdatesController } from '../controllers/updateController.js';

const router = express.Router();

router.get('/api/updates/real-time', getRealTimeUpdatesController);

export default router;