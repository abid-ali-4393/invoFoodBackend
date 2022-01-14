const express = require("express");
const auth = require("../middlewares/auth");

const UserController = require("../controllers/UserController");
const {
  uploadInvoiceValidation,
} = require("../validations/admin/invoiceClientsValidations");
const {
  registerValidation,
  loginValidation,
} = require("../validations/admin/registerLoginValidations");

const router = express.Router();

router.post(
  "/upload-invoice",
  auth,
  uploadInvoiceValidation,
  UserController.uploadInvoice
);
router.post("/register", auth, registerValidation, UserController.registerUser);
router.post("/login", auth, loginValidation, UserController.loginUser);
router.get("/user-invoices", auth, UserController.userInvoicesList);

module.exports = router;
