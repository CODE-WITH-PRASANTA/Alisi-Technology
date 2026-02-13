const BpoPrice = require("../models/BpoPrice.model");

/* CREATE */
exports.createBpoPrice = async (req, res) => {
  try {
    const price = await BpoPrice.create(req.body);
    res.status(201).json(price);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET ALL */
exports.getBpoPrices = async (req, res) => {
  try {
    const prices = await BpoPrice.find().sort({ createdAt: -1 });
    res.json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
exports.updateBpoPrice = async (req, res) => {
  try {
    const updated = await BpoPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "BPO Price not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE */
exports.deleteBpoPrice = async (req, res) => {
  try {
    await BpoPrice.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};