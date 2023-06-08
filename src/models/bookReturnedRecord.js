const mongoose = require('mongoose');

const bookReturnedSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    bookId: { type: String, required: true },
    bookTitle: { type: String, required: true },
    returned_units: { type: Number, required: true },
    returned_date: { type: Date, default: Date.now() },
  },
  { timestamps: true, versionKey: false }
);

const ReturnedRecord = mongoose.model('ReturnedRecord', bookReturnedSchema);
module.exports = ReturnedRecord;
