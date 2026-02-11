const express = require("express");
const router = express.Router();

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

const {
  upload,
  convertToWebp,
} = require("../middlewares/upload.middleware");

/* CREATE */
router.post("/", upload.single("image"), convertToWebp, createBlog);

/* READ */
router.get("/", getBlogs);
router.get("/:id", getBlogById);

/* UPDATE */
router.put("/:id", upload.single("image"), convertToWebp, updateBlog);

/* DELETE */
router.delete("/:id", deleteBlog);

module.exports = router;