import express from 'express';
import { createCargo, getCargo } from '../controllers/cragoController.js';

const router = express.Router();

router.post('/api/cargo', createCargo);
router.get('/api/cargo/:shipmentId', getCargo);

export default router;