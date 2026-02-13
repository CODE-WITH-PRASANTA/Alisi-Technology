const express = require("express");
const router = express.Router();

const {
  createKpoPrice,
  getKpoPrices,
  updateKpoPrice,
  deleteKpoPrice,
} = require("../controllers/KpoPrice.controller");

router.post("/", createKpoPrice);
router.get("/", getKpoPrices);
router.put("/:id", updateKpoPrice);
router.delete("/:id", deleteKpoPrice);

module.exports = router;