const CloudPrice = require("../models/CloudPrice.model");

/* CREATE */
exports.createCloudPrice = async (req, res) => {
  try {
    const cloud = await CloudPrice.create(req.body);
    res.status(201).json(cloud);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET ALL */
exports.getCloudPrices = async (req, res) => {
  try {
    const clouds = await CloudPrice.find().sort({ createdAt: -1 });
    res.json(clouds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
exports.updateCloudPrice = async (req, res) => {
  try {
    const updated = await CloudPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Cloud plan not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE */
exports.deleteCloudPrice = async (req, res) => {
  try {
    await CloudPrice.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};