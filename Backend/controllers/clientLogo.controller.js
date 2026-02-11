const ClientLogo = require("../models/ClientLogo.model");
const fs = require("fs");
const path = require("path");

/* ================= CREATE ================= */
exports.uploadLogo = async (req, res) => {
  try {
    if (!req.file?.path) {
      return res.status(400).json({ message: "Logo image is required" });
    }

    const logo = await ClientLogo.create({
      logo: req.file.path,
    });

    res.status(201).json(logo);
  } catch (err) {
    console.error("UPLOAD LOGO ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

/* ================= GET ================= */
exports.getLogos = async (req, res) => {
  try {
    const logos = await ClientLogo.find().sort({ createdAt: -1 });
    res.json(logos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= DELETE ================= */
exports.deleteLogo = async (req, res) => {
  try {
    const logo = await ClientLogo.findById(req.params.id);
    if (!logo) {
      return res.status(404).json({ message: "Logo not found" });
    }

    /* Delete file from uploads */
    if (logo.logo && fs.existsSync(logo.logo)) {
      fs.unlinkSync(logo.logo);
    }

    await logo.deleteOne();
    res.json({ message: "Client logo deleted successfully" });
  } catch (err) {
    console.error("DELETE LOGO ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
