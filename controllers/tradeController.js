import Trade from '../models/tradeModel.js'

export const initiateTrade = async (req, res) => {
    try {
        const trade = new Trade(req.body);
        await trade.save();
        res.status(201).json(trade);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getTrade = async (req, res) => {
    try {
        const trade = await Trade.findById(req.params.transactionId);
        if (!trade) {
            return res.status(404).json({ message: "Trade not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};