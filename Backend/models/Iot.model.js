const mongoose = require("mongoose");

const iotSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "IOT" },
    price: { type: String, required: true },
    duration: String,
    description: String,
    features: [String],
    status: { type: String, default: "Active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IoTPrice", iotSchema);