const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.route('/').get(questionController.getAllQuestions);
router.route('/').post(questionController.createQuestion);
router.route('/many').post(questionController.createManyQuestions);
router.route('/:id').delete(questionController.deleteQuestion);
router.route('/').delete(questionController.deleteAllQuestions);
router.route('/random').post(questionController.getRandomQuestion);
router.route('/normal').get(questionController.getQuestions);

module.exports = router;
