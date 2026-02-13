const mongoose = require("mongoose");

const kpoPriceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      default: "KPO",
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

module.exports = mongoose.model("KpoPrice", kpoPriceSchema);