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
    /* ===== upload.single("photo") ===== */
    if (req.file) {
      const uploadPath = "uploads/team";
      ensureDir(uploadPath);

      const filename = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}.webp`;

      const outputPath = path.join(uploadPath, filename);

      await sharp(req.file.buffer)
        .resize(500, 500, { fit: "inside" })
        .webp({ quality: 80 })
        .toFile(outputPath);

      req.file.path = outputPath;
      return next();
    }

    /* ===== upload.fields(...) ===== */
    if (!req.files) return next();

    for (const field in req.files) {
      for (const file of req.files[field]) {
        let uploadPath = "";

        if (field === "image") uploadPath = "uploads/testimonials";
        if (field === "projectImg") uploadPath = "uploads/projects";
        if (field === "galleryImg") uploadPath = "uploads/gallery";

        if (!uploadPath) continue;

        ensureDir(uploadPath);

        const filename = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}.webp`;

        const outputPath = path.join(uploadPath, filename);

        await sharp(file.buffer)
          .resize(500, 500, { fit: "inside" })
          .webp({ quality: 80 })
          .toFile(outputPath);

        file.path = outputPath;
      }
    }

    next();
  } catch (err) {
    console.error("SHARP ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { upload, convertToWebp };