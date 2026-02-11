const TeamMember = require("../models/TeamMember");
const fs = require("fs");
const path = require("path");

/* ================= CREATE ================= */
exports.createMember = async (req, res) => {
  try {
    const { name, designation, instagram, linkedin, facebook } = req.body;

    if (!name || !designation) {
      return res
        .status(400)
        .json({ message: "Name & designation are required" });
    }

    const member = await TeamMember.create({
      name,
      designation,
      instagram,
      linkedin,
      facebook,
      photo: req.file ? req.file.path : null,
    });

    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ================= */
exports.getMembers = async (req, res) => {
  try {
    const members = await TeamMember.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= UPDATE ================= */
exports.updateMember = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member)
      return res.status(404).json({ message: "Member not found" });

    /* Delete old photo if new uploaded */
    if (req.file && member.photo) {
      const oldPath = path.join(process.cwd(), member.photo);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    Object.assign(member, req.body);
    if (req.file) member.photo = req.file.path;

    await member.save();
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE ================= */
exports.deleteMember = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member)
      return res.status(404).json({ message: "Member not found" });

    /* Delete photo from uploads folder */
    if (member.photo) {
      const photoPath = path.join(process.cwd(), member.photo);
      if (fs.existsSync(photoPath)) {
        fs.unlinkSync(photoPath);
      }
    }

    /* Delete from database */
    await member.deleteOne();

    res.json({
      message: "Member deleted successfully (DB + photo removed)",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
