const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

/* Ensure directory exists */
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

/* Multer memory storage */
const storage = multer.memoryStorage();

/* File filter */
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);

  if (ext && mime) cb(null, true);
  else cb(new Error("Only image files are allowed"));
};

const upload = multer({ storage, fileFilter });

/* Convert images to WEBP */
const convertToWebp = async (req, res, next) => {
  if (!req.files) return next();

  try {
    for (const field in req.files) {
      for (const file of req.files[field]) {
        let uploadPath = "";

        if (field === "projectImg") uploadPath = "uploads/projects";
        if (field === "galleryImg") uploadPath = "uploads/gallery";

        ensureDir(uploadPath);

        const filename = `${Date.now()}-${Math.round(
          Math.random() * 1e9
        )}.webp`;

        const outputPath = path.join(uploadPath, filename);

        await sharp(file.buffer)
          .webp({ quality: 80 })
          .toFile(outputPath);

        // important: replace path for controller
        file.path = outputPath;
      }
    }

    next();
  } catch (err) {
    console.error("WEBP error:", err);
    res.status(500).json({ success: false, error: "Image processing failed" });
  }
};

module.exports = { upload, convertToWebp };
