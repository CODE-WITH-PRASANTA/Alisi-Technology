const Consulting = require("../models/Consulting.model");

// CREATE
exports.createConsulting = async (req, res) => {
  try {
    const data = await Consulting.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getConsulting = async (req, res) => {
  try {
    const data = await Consulting.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateConsulting = async (req, res) => {
  try {
    const data = await Consulting.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteConsulting = async (req, res) => {
  try {
    await Consulting.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};