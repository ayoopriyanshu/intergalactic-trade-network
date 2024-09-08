import Trade from '../models/tradeModel.js'
import eventEmitter from '../events/eventProcessor.js';

export const initiateTrade = async (req, res) => {
    try {
        const trade = new Trade(req.body);
        await trade.save();

        eventEmitter.emit('tradeInitiated', trade);
        eventEmitter.emit('realTimeUpdate', {
            type: 'TRADE',
            data: trade
        });

        res.status(201).json(trade);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getTrade = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const trade = await Trade.findById(transactionId);
        if (!trade) {
            return res.status(404).json({ message: "Trade not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};