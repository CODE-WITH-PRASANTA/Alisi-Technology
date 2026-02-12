const express = require("express");
const router = express.Router();

const {
  createCloudPrice,
  getCloudPrices,
  updateCloudPrice,
  deleteCloudPrice,
} = require("../controllers/cloudPrice.controller");

router.post("/", createCloudPrice);
router.get("/", getCloudPrices);
router.put("/:id", updateCloudPrice);
router.delete("/:id", deleteCloudPrice);

module.exports = router;