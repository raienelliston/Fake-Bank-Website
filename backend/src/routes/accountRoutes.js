const express = require('express');
const router = express.Router();
const accountData = require('../controllers/accountData');

// Routes to controller functions
router.get('/status', accountData.status);

module.exports = router;