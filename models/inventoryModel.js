import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    stationId: String,
    planet: String,
    inventoryItems: [
        {
            itemName: String,
            quantity: Number,
        },
    ],
});

const Inventory = mongoose.model("Inventory", inventorySchema);

export default Inventory;