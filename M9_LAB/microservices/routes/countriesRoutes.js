const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countriesController');

// PUT /api/countries/:id
router.put('/:id', countriesController.updateCountry);

module.exports = router;
