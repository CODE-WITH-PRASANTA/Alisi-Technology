const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    instagram: String,
    linkedin: String,
    facebook: String,
    photo: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("TeamMember", teamMemberSchema);