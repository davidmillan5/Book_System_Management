const { Book } = require('../models');

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const bookById = await Book.findById(id);
    res.json(bookById);
  } catch (error) {
    console.log(error);
  }
};

const getAllBooks = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  const book = await Book.find()
    .sort({ title: 0 })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  res.json(book);
};

const getBookByCategory = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  const { category } = req.params;
  console.log(category);
  try {
    const books = await Book.find({ category: category })
      .sort({ title: 0 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.json(books);
  } catch (error) {
    res.json(error);
  }
};

const getBookByAuthor = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  const { author } = req.params;
  console.log(author);
  try {
    const books = await Book.find({ author: author })
      .sort({ title: 0 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.json(books);
  } catch (error) {
    res.json(error);
  }
};

const getBookByIsbn = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  const { isbn } = req.params;
  console.log(isbn);
  try {
    const book = await Book.find({ isbn: isbn })
      .sort({ title: 0 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.json(book);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  getBookByCategory,
  getBookByIsbn,
  getBookByAuthor,
};
