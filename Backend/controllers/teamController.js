const TeamMember = require("../models/TeamMember");
const fs = require("fs");

/* ================= CREATE ================= */
exports.createMember = async (req, res) => {
  const { name, designation, instagram, linkedin, facebook } = req.body;

  if (!name || !designation) {
    return res.status(400).json({ message: "Name & designation are required" });
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
};

/* ================= GET ================= */
exports.getMembers = async (req, res) => {
  const members = await TeamMember.find().sort({ createdAt: -1 });
  res.json(members);
};

/* ================= UPDATE ================= */
exports.updateMember = async (req, res) => {
  const member = await TeamMember.findById(req.params.id);
  if (!member) return res.status(404).json({ message: "Member not found" });

  if (req.file && member.photo) fs.unlink(member.photo, () => {});

  Object.assign(member, req.body);
  if (req.file) member.photo = req.file.path;

  await member.save();
  res.json(member);
};

/* ================= DELETE ================= */
exports.deleteMember = async (req, res) => {
  const member = await TeamMember.findById(req.params.id);
  if (!member) return res.status(404).json({ message: "Member not found" });

  if (member.photo) fs.unlink(member.photo, () => {});
  await member.deleteOne();

  res.json({ message: "Member deleted successfully" });
};