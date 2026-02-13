const express = require("express");
const router = express.Router();

const {
  createIoT,
  getIoT,
  updateIoT,
  deleteIoT,
} = require("../controllers/Iot.controller");

router.post("/", createIoT);
router.get("/", getIoT);
router.put("/:id", updateIoT);
router.delete("/:id", deleteIoT);

module.exports = router;