const Project = require("../models/Project.model");

exports.createProject = async (req, res) => {
  try {
    const galleryImages = req.files?.galleryImg
      ? req.files.galleryImg.map((file) => file.path)
      : [];

    const project = await Project.create({
      ...req.body,
      projectImg: req.files?.projectImg?.[0]?.path || null,
      galleryImg: galleryImages,
    });

    res.status(201).json({
      success: true,
      project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
