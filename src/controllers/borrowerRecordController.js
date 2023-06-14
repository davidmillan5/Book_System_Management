const { Book } = require('../models');
const { BorrowerRecord } = require('../models');
const { User } = require('../models');
const { borrowerRecordSchema } = require('../schema');

const createBorrowedRecord = async (req, res) => {
  const { isbn } = req.params;
  const user = await User.findOne({ email: req.body.email });
  const book = await Book.findOne({ isbn });

  const borrowedRecord = new BorrowerRecord({
    user_name: user.name,
    user_lastname: user.lastname,
    user_email: user.email,
    bookIsbn: book.isbn,
    bookTitle: book.title,
    borrow_units: req.body.borrow_units,
  });
  const validate =
    borrowerRecordSchema.borrowerRecordSchema.validate(borrowedRecord);
  if (validate.error) {
    return res.status(400).send(validate.error);
  }

  //
  const borrowUnits =
    book.total_units >= book.available_units &&
    book.available_units >= req.body.borrow_units
      ? req.body.borrow_units
      : 'enter a valid value';

  //

  try {
    const books = await Book.findByIdAndUpdate(book.id, {
      available_units: book.available_units - borrowUnits,
      borrow_units: book.borrow_units + borrowUnits,
    }).exec();

    console.log('enter a valid value');

    borrowedRecord.save();
    console.log(borrowedRecord);
    res.json(borrowedRecord);
  } catch (error) {
    console.log(error);
  }
};

const getAllBorrowedBooksByUser = async (req, res) => {
  const { email } = req.params;
  try {
    const books = await BorrowerRecord.find({ user_email: email }).exec();
    console.log(books);
    res.json(books);
  } catch (error) {
    res.json(error);
  }
};

const getAllBorrowedBooks = async (_, res) => {
  const borrowedBooks = await BorrowerRecord.find();
  res.json(borrowedBooks);
};

module.exports = {
  createBorrowedRecord,
  getAllBorrowedBooks,
  getAllBorrowedBooksByUser,
};
