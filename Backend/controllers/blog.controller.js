const fs = require("fs");
const path = require("path");
const Blog = require("../models/Blog.model");

/* ================= HELPER ================= */
const deleteFileIfExists = (filePath) => {
  if (!filePath) return;

  const fullPath = path.join(__dirname, "..", filePath);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }
};

/* ================= CREATE BLOG ================= */
exports.createBlog = async (req, res) => {
  try {
    const tagsArray = req.body.tags
      ? req.body.tags.split(",").map(tag => tag.trim())
      : [];

    const blog = await Blog.create({
      image: req.file?.path || "",
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      designation: req.body.designation,
      category: req.body.category,
      service: req.body.service, // ✅ Added
      tags: tagsArray,           // ✅ Added
      content: req.body.content,
      status: req.body.status || "Draft",
    });

    res.status(201).json(blog);
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

/* ================= GET ALL BLOGS ================= */
exports.getBlogs = async (req, res) => {
  try {
    const filter = {};

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const blogs = await Blog.find(filter).sort({ createdAt: -1 });

    res.json(blogs);
  } catch (error) {
    console.error("GET BLOGS ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

/* ================= GET SINGLE BLOG ================= */
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error("GET BLOG ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

/* ================= UPDATE BLOG (🔥 FIXED) ================= */
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (req.file && blog.image) {
      deleteFileIfExists(blog.image);
    }

    if (req.body.title !== undefined) blog.title = req.body.title;
    if (req.body.description !== undefined)
      blog.description = req.body.description;
    if (req.body.author !== undefined)
      blog.author = req.body.author;
    if (req.body.designation !== undefined)
      blog.designation = req.body.designation;
    if (req.body.category !== undefined)
      blog.category = req.body.category;
    if (req.body.service !== undefined)
      blog.service = req.body.service; // ✅ Added

    if (req.body.tags !== undefined) {
      blog.tags = req.body.tags
        .split(",")
        .map(tag => tag.trim());
    }

    if (req.body.content !== undefined)
      blog.content = req.body.content;

    if (req.body.status) {
      blog.status = req.body.status;
    }

    if (req.file) {
      blog.image = req.file.path;
    }

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

/* ================= DELETE BLOG ================= */
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.image) {
      deleteFileIfExists(blog.image);
    }

    await Blog.findByIdAndDelete(req.params.id);

    res.json({ message: "Blog and image deleted successfully" });
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};