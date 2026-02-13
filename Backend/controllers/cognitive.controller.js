const CognitivePrice = require("../models/cognitive.model");

/* ================= CREATE ================= */
exports.createCognitive = async (req, res) => {
  try {
    const data = await CognitivePrice.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: "Create failed", error: err.message });
  }
};

/* ================= GET ALL ================= */
exports.getCognitive = async (req, res) => {
  try {
    const data = await CognitivePrice.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

/* ================= UPDATE ================= */
exports.updateCognitive = async (req, res) => {
  try {
    const updated = await CognitivePrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

/* ================= DELETE ================= */
exports.deleteCognitive = async (req, res) => {
  try {
    await CognitivePrice.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};