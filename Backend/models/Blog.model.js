const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    author: {
      type: String,
      trim: true,
    },

    designation: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    /* ✅ NEW FIELD */
    service: {
      type: String,
      trim: true,
    },

    /* ✅ NEW FIELD */
    tags: {
      type: [String],
      default: [],
    },

    content: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Published", "Draft"],
      default: "Draft",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);