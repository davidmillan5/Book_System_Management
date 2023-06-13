const mongoose = require('mongoose');

const borrowerRecordSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    user_lastname: { type: String, required: true },
    user_email: { type: String, required: true },
    bookIsbn: { type: String, required: true },
    bookTitle: { type: String, required: true },
    borrow_units: { type: Number, required: true },
    borrow_date: { type: Date, default: Date.now() },
    borrow_due_date: {
      type: Date,
      default: Date.now() + 10 * 24 * 60 * 60 * 1000,
    },
  },
  { timestamps: true, versionKey: false }
);

const BorrowerRecord = mongoose.model('BorrowerRecord', borrowerRecordSchema);
module.exports = BorrowerRecord;
