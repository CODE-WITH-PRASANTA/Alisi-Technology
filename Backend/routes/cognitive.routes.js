const express = require("express");
const router = express.Router();

const {
  createCognitive,
  getCognitive,
  updateCognitive,
  deleteCognitive,
} = require("../controllers/cognitive.controller");

router.post("/", createCognitive);
router.get("/", getCognitive);
router.put("/:id", updateCognitive);
router.delete("/:id", deleteCognitive);

module.exports = router;