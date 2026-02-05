const Testimonial = require("../models/Testimonial.model");

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
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Testimonial deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
};