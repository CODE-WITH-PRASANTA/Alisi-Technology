const express = require("express");
const {
  createMember,
  getMembers,
  updateMember,
  deleteMember,
} = require("../controllers/teamController");

const { upload, convertToWebp } = require("../middlewares/upload.middleware");

const router = express.Router();

router.get("/", getMembers);

router.post(
  "/",
  upload.single("photo"),
  convertToWebp,
  createMember
);

router.put(
  "/:id",
  upload.single("photo"),
  convertToWebp,
  updateMember
);

router.delete("/:id", deleteMember);

module.exports = router;