import Cargo from '../models/cargoModel.js'

export const createCargo = async (req, res) => {
    try {
        const cargo = new Cargo(req.body);
        await cargo.save();
        res.status(201).json(cargo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCargo = async (req, res) => {
    try {
        const cargo = await Cargo.findById(req.params.shipmentId);
        if (!cargo) {
            return res.status(404).json({ message: "Cargo not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
