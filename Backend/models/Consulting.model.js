const mongoose = require("mongoose");

const consultingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "CONSULTING" },
    price: { type: String, required: true },
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

module.exports = mongoose.model("ConsultingPrice", consultingSchema);