import mongoose from "mongoose";

const cargoSchema = new mongoose.Schema({
    shipmentStatus: {
        type: String,
        default: "IN_TRANSIT",
    },
    destinationStation: String,
    originStatus: String,
    cargoItems: [
        {
            itemName: String,
            quantity: Number,
        },
    ],
    estimatedDelivery: Date,
})

const Cargo = mongoose.model("Cargo", cargoSchema);

export default Cargo;