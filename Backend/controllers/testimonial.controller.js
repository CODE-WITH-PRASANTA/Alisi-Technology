const Testimonial = require("../models/Testimonial.model");
const fs = require("fs");
const path = require("path");

/* ADD */
const addTestimonial = async (req, res) => {
  try {
    const data = req.body;

    if (!data.name || !data.message) {
      return res.status(400).json({
        error: "Name and message are required",
      });
    }

    if (req.files?.image?.[0]?.path) {
      data.image = req.files.image[0].path;
    }

    const testimonial = await Testimonial.create(data);
    res.status(201).json(testimonial);
  } catch (err) {
    console.error("ADD ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

/* GET */
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
const updateTestimonial = async (req, res) => {
  try {
    const data = req.body;

    if (req.files?.image?.[0]?.path) {
      data.image = req.files.image[0].path;
    }

    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE */
const deleteTestimonial = async (req, res) => {
  try {
    // 1. Find testimonial by ID
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    // 2. Delete image from upload folder if exists
    if (testimonial.image) {
      const imagePath = path.join(__dirname, "..", testimonial.image);

      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Image delete error:", err.message);
        }
      });
    }

    // 3. Delete testimonial from database
    await Testimonial.findByIdAndDelete(req.params.id);

    res.json({ message: "Testimonial and image deleted successfully" });

  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
};

