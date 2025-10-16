const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// GET /contact 
router.get('/', contactController.showForm);

// POST /contact  
router.post('/', contactController.saveMessage);

// GET /contact/messages 
router.get('/messages', contactController.getMessages);

module.exports = router;


