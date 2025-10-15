const express = require("express");
const router = express.Router();

const utilities = require("../utilities/index");
const accountController = require("../controllers/accountController");
const validator = require("../validation/account-validation"); 

/* ========================
 * the Routes
 ======================== */

// GET views
router.get("/login", utilities.handleErrors(accountController.buildLogin));
router.get("/register", utilities.handleErrors(accountController.buildRegister));
router.get("/logout", accountController.logoutAccount);

// Dashboard to manage account 
router.get("/", utilities.handleErrors(accountController.buildAccountManagement));

// POST actions
router.post("/register", validator.emailValidation, utilities.handleErrors(accountController.registerAccount));
router.post("/login", utilities.handleErrors(accountController.loginAccount));
router.post("/update-info", validator.updateAccountValidation, utilities.handleErrors(accountController.updateAccountInfo));
router.post("/update-password", validator.passwordValidation, utilities.handleErrors(accountController.updatePassword));

module.exports = router;



