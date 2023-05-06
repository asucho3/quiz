const Question = require('../models/questionModel');
const random = require('lodash.random');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync.js');

const stats = {};

exports.getAllQuestions = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).json({
    status: 'success',
    data: {
      questions,
    },
  });
});

exports.createQuestion = catchAsync(async (req, res, next) => {
  const question = await Question.create({
    question: req.body.question,
    answers: req.body.answers,
    author: req.body.author,
    correctAnswer: req.body.correctAnswer,
  });

  res.status(200).json({
    status: 'success',
    data: {
      question,
    },
  });
});

exports.createManyQuestions = catchAsync(async (req, res, next) => {
  const questionArr = [...req.body];
  req.body.forEach(async (el) => {
    const { question, answers, author, correctAnswer } = el;
    await Question.create({
      question,
      answers,
      author,
      correctAnswer,
    });
  });

  res.status(200).json({
    status: 'success',
    data: {
      questionArr,
    },
  });
});

exports.deleteQuestion = catchAsync(async (req, res, next) => {
  await Question.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
  });
});

exports.getRandomQuestion = catchAsync(async (req, res, next) => {
  //initialize variables
  let done = false;
  let randomQuestion;
  let lastQuestion = { ...req.body };
  let allQuestions = await Question.find();

  //repeat this loop until the new question is different from the last question
  while (!done) {
    randomQuestion = allQuestions[random(allQuestions.length - 1)];
    // Compare the user's last question to the newly fetched question
    if (String(lastQuestion._id) !== String(randomQuestion._id)) {
      done = true;
    }
  }

  if (!stats[`${randomQuestion.question}`]) {
    stats[`${randomQuestion.question}`] = 1;
  } else {
    stats[`${randomQuestion.question}`] += 1;
  }

  res.status(200).json({
    status: 'success',
    data: {
      randomQuestion,
    },
  });
});

exports.deleteAllQuestions = catchAsync(async (req, res, next) => {
  await Question.deleteMany();

  res.status(204).json({
    status: 'success',
  });
});

exports.getQuestions = catchAsync(async (req, res, next) => {
  //initialize variables
  let allQuestions = await Question.find();
  let questionArr = [];
  const questionNum = 10;

  //repeat this loop until we have all the questions
  for (let i = 0; i < questionNum; i++) {
    const randomIndex = random(allQuestions.length - 1);
    const randomQuestion = allQuestions[randomIndex];
    questionArr.push(randomQuestion);
    allQuestions.splice(randomIndex, 1);
  }

  res.status(200).json({
    status: 'success',
    data: {
      questionArr,
    },
  });
});
