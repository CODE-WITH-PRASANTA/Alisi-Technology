const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "NETWORK" },
    price: { type: String, required: true },
    duration: String,
    description: String,
    features: [String],
    status: { type: String, default: "Active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NetworkPrice", networkSchema);