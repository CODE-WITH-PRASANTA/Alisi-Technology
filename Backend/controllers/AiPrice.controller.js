const AiPrice = require("../models/AiPrice.model");

/* CREATE */
exports.createAiPrice = async (req, res) => {
  try {
    const price = await AiPrice.create(req.body);
    res.status(201).json(price);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET ALL */
exports.getAiPrices = async (req, res) => {
  try {
    const prices = await AiPrice.find().sort({ createdAt: -1 });
    res.json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




/* UPDATE */
exports.updateAiPrice = async (req, res) => {
  try {
    const updated = await AiPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Price not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE */
exports.deleteAiPrice = async (req, res) => {
  try {
    await AiPrice.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};