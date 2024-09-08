import express from 'express';
import { createCargo, getCargo } from '../controllers/cragoController.js';

const router = express.Router();

router.post('/api/cargo', createCargo);
router.get('/api/cargo/:id', getCargo);

export default router;