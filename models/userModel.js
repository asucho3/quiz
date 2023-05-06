const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please provide a username'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  score: {
    type: Number,
    default: 0,
  },
});

//add document middleware to encrypt the password
userSchema.pre('save', async function (next) {
  //hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

//check if given password is the same as the stored in the database
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
