const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { String, require: true },
  lastname: { String, require: true },
  email: { String, require: true },
  password: { String, require: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
