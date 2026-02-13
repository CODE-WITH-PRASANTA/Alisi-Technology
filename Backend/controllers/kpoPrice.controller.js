const KpoPrice = require("../models/KpoPrice.model");

/* ---------------- CREATE ---------------- */

exports.createKpoPrice = async (req, res) => {
  try {
    const price = await KpoPrice.create(req.body);
    res.status(201).json(price);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ---------------- GET ALL ---------------- */

exports.getKpoPrices = async (req, res) => {
  try {
    const prices = await KpoPrice.find().sort({ createdAt: -1 });
    res.json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ---------------- UPDATE ---------------- */

exports.updateKpoPrice = async (req, res) => {
  try {
    const updated = await KpoPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "KPO Price not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ---------------- DELETE ---------------- */

exports.deleteKpoPrice = async (req, res) => {
  try {
    await KpoPrice.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};