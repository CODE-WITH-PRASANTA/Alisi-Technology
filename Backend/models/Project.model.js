const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    quotes: String,
    clientName: String,
    companyName: String,
    budget: String,
    location: String,
    sector: String,
    category: String,
    completeDate: String,

    projectImg: String,
    galleryImg: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
