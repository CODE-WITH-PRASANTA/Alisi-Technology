const mongoose = require("mongoose");

const cloudPriceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      default: "CLOUD",
    },

    price: {
      type: String,
      required: true,
    },

    duration: String,

    description: String,

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

module.exports = mongoose.model("CloudPrice", cloudPriceSchema);