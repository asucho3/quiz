const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Question is a required field'],
  },
  answers: {
    type: [String],
    required: [true, 'Answers is a required field'],
    validate: {
      validator() {
        return this.answers.length > 1;
      },
      message: 'at least two answers must be provided',
    },
  },
  correctAnswer: {
    type: Number,
    required: [true, 'Correct answer is a required field'],
  },
  author: {
    type: String,
    // type: mongoose.Schema.ObjectId,
    // ref: 'User',
    // required: [true, 'Author is a required field'],
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
