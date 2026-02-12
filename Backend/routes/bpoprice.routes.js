const express = require("express");
const router = express.Router();

const {
  createBpoPrice,
  getBpoPrices,
  updateBpoPrice,
  deleteBpoPrice,
} = require("../controllers/BpoPrice.controller");

router.post("/", createBpoPrice);
router.get("/", getBpoPrices);
router.put("/:id", updateBpoPrice);
router.delete("/:id", deleteBpoPrice);

module.exports = router;