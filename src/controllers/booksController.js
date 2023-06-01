const { Book } = require('../models');
const { bookSchema } = require('../schema');

const createBook = async (req, res) => {
  const validate = bookSchema.bookSchema.validate(req.body);
  if (validate.error) {
    return res.status(400).send(validate.error);
  }
  const book = await new Book(req.body).save();

  res.json(book);
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const bookById = await Book.findById(id);
  res.json(bookById);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const validate = bookSchema.bookSchema.validate(req.body);
  if (validate.error) {
    return res.status(400).send(validate.error);
  }
  const book = await Book.findByIdAndUpdate(id, req.body);
  res.json(book);
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

const getBookByAuthor = async (req, res) => {};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findOneAndRemove(id, { new: true });
  res.json({ message: `Book ${book.title} has been deleted` });
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  getBookByCategory,
  getBookByAuthor,
  updateBook,
  deleteBook,
};
