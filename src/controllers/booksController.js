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
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    console.log(error);
  }
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

// const borrowBook = async (req, res) => {
//   const { id } = req.params;
//   const { quantity } = req.body;
//   const object = await Book.findById(id);
//   const borrowUnits =
//     object.total_units >= object.available_units &&
//     object.available_units > quantity
//       ? req.body.quantity
//       : 'enter a valid value';
//   try {
//     const books = await Book.findByIdAndUpdate(id, {
//       available_units: object.total_units - borrowUnits,
//       borrow_units: borrowUnits,

//       // object.available_units + req.body.quantity,
//     }).exec();

//     res.json(books);
//   } catch (error) {
//     res.json(error);
//   }
// };

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOneAndRemove(id, { new: true });
    res.json({ message: `Book ${book.title} has been deleted` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  getBookByCategory,
  getBookByIsbn,
  getBookByAuthor,
  updateBook,
  deleteBook,
};
