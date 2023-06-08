const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    edition: { type: String, required: true },
    isbn: { type: String, required: true },
    publisher: { type: String, required: true },
    pages: { type: Number, required: true },
    published: { type: Date, required: true },
    category: { type: String, required: true },
    total_units: { type: Number, required: true },
    available_units: { type: Number, default: 0 },
    borrow_units: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
