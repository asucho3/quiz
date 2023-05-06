const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

router.route('/').get(viewController.getMain);

router.route('/game').get(authController.isLoggedIn, viewController.getGame);

module.exports = router;
