const express = require("express");
const router = express.Router();

const {
  createAiPrice,
  getAiPrices,
  updateAiPrice,
  deleteAiPrice,
} = require("../controllers/AiPrice.controller");

router.post("/", createAiPrice);
router.get("/", getAiPrices);
router.put("/:id", updateAiPrice);   // ✅ FIXED
router.delete("/:id", deleteAiPrice);

module.exports = router;