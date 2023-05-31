const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { String, require: true },
  author: { String, require: true },
  edition: { String, require: true },
  isbn: { String, require: true },
  publisher: { String, require: true },
  pages: { Number, require: true },
  published: { Date, require: true },
  category: { String, require: true },
  available_units: { Number, require: true },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
