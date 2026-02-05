const express = require("express");
const {
  addTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonial.controller");

const { upload, convertToWebp } = require("../middlewares/upload.middleware");

const router = express.Router();

/* CREATE */
router.post(
  "/",
  upload.fields([{ name: "image", maxCount: 1 }]),
  convertToWebp,
  addTestimonial
);

/* READ */
router.get("/", getTestimonials);

/* UPDATE */
router.put(
  "/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  convertToWebp,
  updateTestimonial
);

/* DELETE */
router.delete("/:id", deleteTestimonial);

module.exports = router;