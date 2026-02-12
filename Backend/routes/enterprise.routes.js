const express = require("express");
const router = express.Router();

const {
  createEnterprise,
  getEnterprise,
  updateEnterprise,
  deleteEnterprise,
} = require("../controllers/Enterprise.controller");

router.post("/", createEnterprise);
router.get("/", getEnterprise);
router.put("/:id", updateEnterprise);
router.delete("/:id", deleteEnterprise);

module.exports = router;