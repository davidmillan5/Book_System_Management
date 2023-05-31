const Joi = require('joi');

exports.userSchema = Joi.object({
  name: Joi.string().min(4).max(100).required(),
  lastname: Joi.string().min(4).max(100).required(),
  email: Joi.string().min(10).max(100).required(),
  password: Joi.string().min(1).max(12).required(),
  role: Joi.string().min(2).max(20).required(),
});
