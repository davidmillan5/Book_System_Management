const Joi = require('joi');

exports.returnedRecordSchema = Joi.object({
  user_name: Joi.string().min(5).max(100).required(),
  user_lastname: Joi.string().min(5).max(100).required(),
  user_email: Joi.string().min(5).max(100).required(),
  bookIsbn: Joi.string().min(10).max(100).required(),
  bookTitle: Joi.string().min(10).max(100).required(),
  returned_units: Joi.number().min(1).max(1000).required(),
  returned_date: Joi.date().required(),
}).unknown();
