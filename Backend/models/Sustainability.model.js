const mongoose = require("mongoose");

const sustainabilitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "SUSTAINABILITY" },
    price: { type: String, required: true },
    duration: String,
    description: String,
    features: [String],
    status: { type: String, default: "Active" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("SustainabilityPrice", sustainabilitySchema);
