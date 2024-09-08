import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
    buyerPlanet: String,
    sellerPlnet: String,
    cargoId: String,
    status: {
        type: String,
        default: "PENDING",
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
})

const Trade = mongoose.model("Trade", tradeSchema);

export default Trade;