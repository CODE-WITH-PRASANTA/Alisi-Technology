const mongoose = require("mongoose");

const enterpriseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "ENTERPRISE" },
    price: { type: String, required: true },
    duration: { type: String },
    description: { type: String },
    features: [{ type: String }],
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EnterprisePrice", enterpriseSchema);