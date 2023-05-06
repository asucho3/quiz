const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync.js');

exports.getMain = (req, res, next) => {
  res.status(200).render('title', {
    title: 'Home',
  });
};

exports.getGame = (req, res, next) => {
  res.status(200).render('game', {
    title: 'Game',
  });
};
