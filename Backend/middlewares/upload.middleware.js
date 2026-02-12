const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

/* ================= HELPERS ================= */
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

/* ================= MULTER ================= */
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);

  if (ext && mime) cb(null, true);
  else cb(new Error("Only image files are allowed"));
};

const upload = multer({ storage, fileFilter });

/* ================= SHARP ================= */
const convertToWebp = async (req, res, next) => {
  try {
    /* ================= SINGLE FILE ================= */
    if (req.file) {
      let uploadPath = "uploads/common";

      // Route-based folder selection
      if (req.originalUrl.includes("/blogs")) {
        uploadPath = "uploads/blogs";
      } else if (req.originalUrl.includes("/team")) {
        uploadPath = "uploads/team";
      } else if (req.originalUrl.includes("/client-logos")) {
        uploadPath = "uploads/client-logos";
      }

      ensureDir(uploadPath);

      const filename = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}.webp`;

      const outputPath = path.join(uploadPath, filename);

      await sharp(req.file.buffer)
        .resize(800, 800, { fit: "inside" })
        .webp({ quality: 80 })
        .toFile(outputPath);

      // ✅ Normalize path for browser
      req.file.path = outputPath.replace(/\\/g, "/");
      return next();
    }

    /* ================= MULTIPLE FILES ================= */
    if (!req.files) return next();

    for (const field in req.files) {
      for (const file of req.files[field]) {
        let uploadPath = "";

        if (field === "image") uploadPath = "uploads/blogs";
        else if (field === "testimonialImg") uploadPath = "uploads/testimonials";
        else if (field === "projectImg") uploadPath = "uploads/projects";
        else if (field === "galleryImg") uploadPath = "uploads/gallery";

        if (!uploadPath) continue;

        ensureDir(uploadPath);

        const filename = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}.webp`;

        const outputPath = path.join(uploadPath, filename);

        await sharp(file.buffer)
          .resize(800, 800, { fit: "inside" })
          .webp({ quality: 80 })
          .toFile(outputPath);

        file.path = outputPath.replace(/\\/g, "/");
      }
    }

    next();
  } catch (err) {
    console.error("SHARP ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { upload, convertToWebp };