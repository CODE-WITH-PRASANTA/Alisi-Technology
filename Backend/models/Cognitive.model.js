const mongoose = require("mongoose");

const cognitiveSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "COGNITIVE",
    },
    price: {
      type: String,
      required: true,
    },
    duration: String,
    description: String,
    features: [String],
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CognitivePrice", cognitiveSchema);