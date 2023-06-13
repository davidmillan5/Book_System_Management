const { Book } = require('../models');

const getBookById = async (req, res) => {
  const { id } = req.params;
  const bookById = await Book.findById(id);
  res.json(bookById);
};

const getAllBooks = async (_, res) => {
  const book = await Book.find();
  res.json(book);
};

const getBookByCategory = async (req, res) => {
  const { category } = req.params;
  console.log(category);
  try {
    const books = await Book.find({ category: category }).exec();
    res.json(books);
  } catch (error) {
    res.json(error);
  }
};

const getBookByAuthor = async (req, res) => {
  const { author } = req.params;
  console.log(author);
  try {
    const books = await Book.find({ author: author }).exec();
    res.json(books);
  } catch (error) {
    res.json(error);
  }
};

const getBookByIsbn = async (req, res) => {
  const { isbn } = req.params;
  console.log(isbn);
  try {
    const book = await Book.find({ isbn: isbn }).exec();
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
