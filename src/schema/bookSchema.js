const Joi = require('joi');

exports.bookSchema = Joi.object({
  title: Joi.string().min(10).max(100).required(),
  author: Joi.string().min(5).max(50).required(),
  edition: Joi.string().min(5).max(50).required(),
  isbn: Joi.string().min(8).max(30).required(),
  publisher: Joi.string().min(10).max(50).required(),
  pages: Joi.number().min(10).max(5000).required(),
  published: Joi.date().required(),
  category: Joi.string().min(10).max(100).required(),
  available_units: Joi.number().min(1).max(1000).required(),
});
