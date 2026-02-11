const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
} = require("../controllers/contact.controller");

router.post("/", createContact);      // Submit form
router.get("/", getContacts);          // Admin panel

module.exports = router;