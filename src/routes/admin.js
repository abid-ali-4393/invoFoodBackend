const express = require("express");
const auth = require("../middlewares/auth");
const AdminController = require("../controllers/AdminController");
const {
  uploadMenuValidation,
} = require("../validations/admin/menuInvoiceValidations");

const router = express.Router();

router.post(
  "/upload-menu",
  auth,
  uploadMenuValidation,
  AdminController.uploadMenu
);
router.get(
  "/subsucribed-users",
  auth,
  AdminController.retrieveAllSubscribedUsers
);

module.exports = router;
