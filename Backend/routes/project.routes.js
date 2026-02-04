const express = require("express");
const { upload, convertToWebp } = require("../middlewares/upload.middleware");
const { createProject } = require("../controllers/project.controller");
const Project = require("../models/Project.model");

const router = express.Router();

/* CREATE PROJECT */
router.post(
  "/",
  upload.fields([
    { name: "projectImg", maxCount: 1 },
    { name: "galleryImg", maxCount: 6 },
  ]),
  convertToWebp, // 🔥 THIS IS REQUIRED
  createProject
);

/* GET ALL PROJECTS */
router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json({ success: true, projects });
});

/* GET SINGLE PROJECT */
router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json({ success: true, project });
});

module.exports = router;
