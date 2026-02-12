const Enterprise = require("../models/Enterprise.model");

/* CREATE */
exports.createEnterprise = async (req, res) => {
  try {
    const newPlan = await Enterprise.create(req.body);
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET ALL */
exports.getEnterprise = async (req, res) => {
  try {
    const plans = await Enterprise.find().sort({ createdAt: -1 });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* UPDATE */
exports.updateEnterprise = async (req, res) => {
  try {
    const updated = await Enterprise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE */
exports.deleteEnterprise = async (req, res) => {
  try {
    await Enterprise.findByIdAndDelete(req.params.id);
    res.json({ message: "Enterprise Plan Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};