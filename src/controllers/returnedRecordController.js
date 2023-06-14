const { Book } = require('../models');
const { User } = require('../models');
const { BorrowerRecord } = require('../models');
const { ReturnedRecord } = require('../models');
const { returnedRecordSchema } = require('../schema');

const createReturnedRecord = async (req, res) => {
  const { id } = req.params;
  const borrowRecord = await BorrowerRecord.findById(id);

  const user = await User.findOne({
    email: borrowRecord.user_email,
  });
  const book = await Book.findOne({ isbn: borrowRecord.bookIsbn });

  console.log('user ---> ', user);
  console.log('book ----> ', book);
  const returnedBook = new ReturnedRecord({
    user_name: user.name,
    user_lastname: user.lastname,
    user_email: user.email,
    bookIsbn: book.isbn,
    bookTitle: book.title,
    returned_units: req.body.returned_units,
  });

  const validate =
    returnedRecordSchema.returnedRecordSchema.validate(returnedBook);
  if (validate.error) {
    return res.status(400).send(validate.error);
  }

  const returnedUnits =
    book.total_units >= book.available_units &&
    borrowRecord.borrow_units >= req.body.returned_units
      ? req.body.returned_units
      : 'enter a valid value';

  try {
    const books = await Book.findByIdAndUpdate(book.id, {
      available_units: book.available_units + returnedUnits,
      borrow_units: book.borrow_units - returnedUnits,
    }).exec();

    console.log('enter a valid value');

    const borrowed = await BorrowerRecord.findOneAndDelete({ _id: id });

    returnedBook.save();
    console.log(returnedBook);
    res.json(returnedBook);
  } catch (error) {
    console.log(error);
  }
};

const getAllReturnedBooksRecords = async (_, res) => {
  const returnedBooks = await ReturnedRecord.find();
  res.json(returnedBooks);
};

const getAllReturnedBooksByUser = async (req, res) => {
  const { email } = req.params;
  try {
    const books = await BorrowerRecord.find({ user_email: email }).exec();
    console.log(books);
    res.json(books);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createReturnedRecord,
  getAllReturnedBooksRecords,
  getAllReturnedBooksByUser,
};
