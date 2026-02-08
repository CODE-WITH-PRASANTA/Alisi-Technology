const mongoose = require("mongoose");

const clientLogoSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClientLogo", clientLogoSchema);
