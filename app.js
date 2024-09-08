import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import tradeRoutes from './routes/tradeRoutes.js'
import cargoRoutes from './routes/cargoRoutes.js'
import inventoryRoutes from './routes/inventoryRoutes.js'

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(tradeRoutes);
app.use(cargoRoutes);
app.use(inventoryRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal server error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));