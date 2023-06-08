const Joi = require('joi');

exports.borrowerRecordSchema = Joi.object({
  id: Joi.number().min(1).max(1000).required(),
  bookIsbn: Joi.string().min(10).max(100).required(),
  bookTitle: Joi.string().min(10).max(100).required(),
  borrow_units: Joi.number().min(1).max(1000).required(),
  borrow_date: Joi.date().required(),
  borrow_due_date: Joi.date().required(),
});
