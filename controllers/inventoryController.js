import Inventory from '../models/inventoryModel.js';

export const getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findOne({ stationId: req.params.id });
        if (!inventory) {
            return res.status(404).json({ message: 'Inventory not found' });
        }
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}