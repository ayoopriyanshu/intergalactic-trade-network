import Cargo from '../models/cargoModel.js'
import eventEmitter from '../events/eventProcessor.js';

export const createCargo = async (req, res) => {
    try {
        const cargo = new Cargo(req.body);
        await cargo.save();

        eventEmitter.emit('cargoCreated', cargo);
        eventEmitter.emit('realTimeUpdate', {
            type: 'CARGO',
            data: cargo
        })

        res.status(201).json(cargo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCargo = async (req, res) => {
    try {
        const shipmentId = req.params.id;
        const cargo = await Cargo.findById(shipmentId);
        if (!cargo) {
            return res.status(404).json({ message: "Cargo not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
