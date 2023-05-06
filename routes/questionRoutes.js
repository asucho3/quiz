const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authController = require('../controllers/authController');

router.route('/').get(questionController.getAllQuestions);
router.route('/random').post(questionController.getRandomQuestion);
router.route('/normal').get(questionController.getQuestions);

// protected routes
router.use(authController.protect);
router.route('/').post(questionController.createQuestion);
router.route('/many').post(questionController.createManyQuestions);
router.route('/:id').delete(questionController.deleteQuestion);
router.route('/').delete(questionController.deleteAllQuestions);

module.exports = router;
