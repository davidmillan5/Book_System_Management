const { Book } = require('../models');
const { BorrowerRecord } = require('../models');
const { User } = require('../models');
const { borrowerRecordSchema } = require('../schema');

const createBorrowedRecord = async (req, res) => {
  const { isbn, id } = req.params;
  const user = await User.findById(id);
  const book = await Book.findOne(isbn);

  const borrowedRecord = await new BorrowerRecord({
    userId: user.userId,
    bookIsbn: book.isbn,
    bookTitle: book.title,
    borrow_units: req.body.borrow_units,
  });
  const validate =
    borrowerRecordSchema.borrowerRecordSchema.validate(borrowedRecord);
  if (validate.error) {
    return res.status(400).send(validate.error);
  }

  borrowedRecord.save();

  res.json(borrowedRecord);
};

module.exports = {
  createBorrowedRecord,
};
