const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contact.controller");

const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests. Try again later.",
});


router.post("/", contactLimiter, createContact);
router.get("/", getContacts);
router.delete("/:id", deleteContact);

module.exports = router;