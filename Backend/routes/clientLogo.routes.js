const express = require("express");
const router = express.Router();

const {
  uploadLogo,
  getLogos,
  deleteLogo,
} = require("../controllers/clientLogo.controller");

const { upload, convertToWebp } = require("../middlewares/upload.middleware");

/* ================= ROUTES ================= */

// Upload logo
router.post(
  "/",
  upload.single("logo"),
  convertToWebp,
  uploadLogo
);

// Get all logos
router.get("/", getLogos);

// Delete logo
router.delete("/:id", deleteLogo);

module.exports = router;
