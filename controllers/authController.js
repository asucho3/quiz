const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync.js');

// Return a signed JWT
const signToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

// Create a JWT and send it as a cookie to the client
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return next(new AppError('Wrong user or password', 400));

  const ok = await user.correctPassword(password, user.password);

  if (!ok) return next(new AppError('Wrong user or password', 400));

  // if this part has been reached, a user has been successfully logged in
  createSendToken(user, 201, req, res);
});

exports.signup = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.create({
    username,
    password,
  });

  // if this part has been reached, a user has been successfully logged in
  createSendToken(user, 201, req, res);
});

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  // 1) get the token
  let token;
  if (
    //from headers
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    //from cookies
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) return next(new AppError('You are not logged in', 401));

  // decode the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // use the decoded ID to get the user
  const currentUser = await User.findById(decoded.id);

  if (!currentUser)
    return next(new AppError('This user no longer exists', 401));

  //set a locals for the render views
  //create a 'user' property on the request for the next middlewares
  res.locals.user = currentUser.username;
  res.locals.score = currentUser.score;
  req.user = currentUser;
  next();
});

exports.deleteAllUsers = catchAsync(async (req, res, next) => {
  await User.deleteMany();

  res.status(204).json({
    status: 'success',
  });
});

exports.saveScore = catchAsync(async (req, res, next) => {
  const user = await User.findOne(req.user);
  if (user.score < req.body.score) {
    user.score = req.body.score;
    await user.save();
  }
  const newScore = user.score;
  res.status(200).json({
    status: 'success',
    data: {
      newScore,
    },
  });
});

exports.protect = (req, res, next) => {
  if (Array.isArray(req.body)) {
    if (req.body[0].password !== process.env.ADMIN_PASSWORD) {
      return next(new AppError('Wrong password for this action', 403));
    }
  }
  if (!Array.isArray(req.body)) {
    if (req.body.password !== process.env.ADMIN_PASSWORD) {
      return next(new AppError('Wrong password for this action', 403));
    }
  }
  next();
};
