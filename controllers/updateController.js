import { getRealTimeUpdates } from "../events/eventProcessor.js";

export const getRealTimeUpdatesController = async (req, res) => {
    try {
        const updates = getRealTimeUpdates();
        res.status(200).json(updates)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};