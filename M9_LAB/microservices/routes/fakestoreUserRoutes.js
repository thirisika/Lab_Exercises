const express = require('express');
const router = express.Router();
const fakestoreUserController = require('../controllers/fakestoreUserController');

// GET /api/fakestore-users?page=1
router.get('/', fakestoreUserController.getFakestoreUsers);

module.exports = router;
