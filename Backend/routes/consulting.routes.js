const express = require("express");
const router = express.Router();

const {
  createConsulting,
  getConsulting,
  updateConsulting,
  deleteConsulting,
} = require("../controllers/Consulting.controller");

router.post("/", createConsulting);
router.get("/", getConsulting);
router.put("/:id", updateConsulting);
router.delete("/:id", deleteConsulting);

module.exports = router;