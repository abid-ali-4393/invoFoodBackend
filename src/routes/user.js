const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/upload-invoice", UserController.uploadInvoice);
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/user-invoices", UserController.userInvoicesList);

module.exports = router;
