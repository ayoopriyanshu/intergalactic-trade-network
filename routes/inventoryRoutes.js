import express from 'express';
import { getInventory } from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/api/inventory/:id', getInventory);

export default router;