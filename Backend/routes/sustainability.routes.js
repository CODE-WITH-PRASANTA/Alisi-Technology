const express = require("express");
const router = express.Router();

const {
  createSustainability,
  getSustainability,
  updateSustainability,
  deleteSustainability,
} = require("../controllers/Sustainability.controller");

router.post("/", createSustainability);
router.get("/", getSustainability);
router.put("/:id", updateSustainability);
router.delete("/:id", deleteSustainability);

module.exports = router;