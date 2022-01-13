const express = require("express");
const AdminController = require("../controllers/AdminController");

const router = express.Router();

router.post("/upload-menu", AdminController.uploadMenu);
router.get("/subsucribed-users", AdminController.retrieveAllSubscribedUsers);

module.exports = router;
