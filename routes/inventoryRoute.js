const express = require('express');
const router = express.Router();
const invController = require("../controllers/invController");
const utilities = require('../utilities');
const invValidation = require('../validation/inventory-validation');

// Inventory Management View
router.get('/', utilities.handleErrors(invController.buildManagementView));

// Add Classification (GET)
router.get('/add-classification', utilities.handleErrors(invController.buildAddClassification));

// Add Classification (POST)
router.post(
  '/add-classification',
  invValidation.classificationNameRules,
  utilities.handleErrors(invController.addClassification)
);

// Add Inventory (GET)
router.get('/add-inventory', utilities.handleErrors(invController.buildAddInventory));

// Add Inventory (POST)
router.post(
  '/add-inventory',
  invValidation.addInventoryRules,
  utilities.handleErrors(invController.addInventory)
);

// Inventory by classification (GET)
router.get('/type/:classificationId', utilities.handleErrors(invController.buildByClassificationId));

// Vehicle detail (GET)
router.get('/detail/:invId', utilities.handleErrors(invController.buildByInvId));

// Optional fallback route fortype
router.get('/type', utilities.handleErrors(invController.buildByClassificationId));

// Error handler for this router
router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('errors/500', {
    title: 'Server Error',
    message: err.message
  });
});

module.exports = router;




