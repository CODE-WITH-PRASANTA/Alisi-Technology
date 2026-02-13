const NetworkPrice = require("../models/Network.model");

// CREATE
exports.createNetwork = async (req, res) => {
  try {
    const data = await NetworkPrice.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getNetwork = async (req, res) => {
  try {
    const data = await NetworkPrice.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateNetwork = async (req, res) => {
  try {
    const data = await NetworkPrice.findByIdAndUpdate(
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
exports.deleteNetwork = async (req, res) => {
  try {
    await NetworkPrice.findByIdAndDelete(req.params.id);
    res.json({ message: "Network plan deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};