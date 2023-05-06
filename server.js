const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// initialize server
const app = require('./app');
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

console.log(`Current environment: ${process.env.NODE_ENV}`);

// initialize database
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB Connection Successful');
  });

// handle SIGTERM and unhandled exceptions
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down...🥽');
  server.close(() => {
    console.log('🎨 Process terminated');
  });
});
