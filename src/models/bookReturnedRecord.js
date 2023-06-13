const mongoose = require('mongoose');

const bookReturnedSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    user_lastname: { type: String, required: true },
    user_email: { type: String, required: true },
    bookIsbn: { type: String, required: true },
    bookTitle: { type: String, required: true },
    returned_units: { type: Number, required: true },
    returned_date: { type: Date, default: Date.now() },
  },
  { timestamps: true, versionKey: false }
);

const ReturnedRecord = mongoose.model('ReturnedRecord', bookReturnedSchema);
module.exports = ReturnedRecord;
