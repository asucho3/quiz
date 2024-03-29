const express = require('express');
const path = require('path');
const morgan = require('morgan');
const authRouter = require('./routes/authRoutes');
const questionRouter = require('./routes/questionRoutes');
const viewRouter = require('./routes/viewRoutes');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const rateLimit = require('express-rate-limit');

const app = express();
// set pug as template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// serve public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

// development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

//body-parser
app.use(express.json());

app.use('/', viewRouter);
app.use('/api/v1/question', questionRouter);
app.use('/api/v1/auth', authRouter);

// generic error for file not found
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
