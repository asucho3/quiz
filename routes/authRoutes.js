const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.route('/login').post(authController.login);
router.route('/signup').post(authController.signup);
router.route('/deleteAllUsers').delete(authController.deleteAllUsers);
router
  .route('/saveScore')
  .post(authController.isLoggedIn, authController.saveScore);

module.exports = router;
