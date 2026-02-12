const SustainabilityPrice = require("../models/Sustainability.model");

exports.createSustainability = async (req, res) => {
  try {
    const data = await SustainabilityPrice.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSustainability = async (req, res) => {
  try {
    const data = await SustainabilityPrice.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSustainability = async (req, res) => {
  try {
    const data = await SustainabilityPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSustainability = async (req, res) => {
  try {
    await SustainabilityPrice.findByIdAndDelete(req.params.id);
    res.json({ message: "Sustainability plan deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};