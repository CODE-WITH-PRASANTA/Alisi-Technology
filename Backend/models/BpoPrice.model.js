const mongoose = require("mongoose");

const bpoPriceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
    },
    description: {
      type: String,
    },
    features: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BpoPrice", bpoPriceSchema);