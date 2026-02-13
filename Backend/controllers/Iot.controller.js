const IoTPrice = require("../models/Iot.model");

exports.createIoT = async (req, res) => {
  try {
    const data = await IoTPrice.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIoT = async (req, res) => {
  try {
    const data = await IoTPrice.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateIoT = async (req, res) => {
  try {
    const data = await IoTPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteIoT = async (req, res) => {
  try {
    await IoTPrice.findByIdAndDelete(req.params.id);
    res.json({ message: "IoT plan deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};