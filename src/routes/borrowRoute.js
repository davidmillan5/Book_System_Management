const express = require('express'),
  router = express.Router(),
  { Borrow } = require('../controllers'),
  { verifyToken, verifyTokenAdmin } = require('../middleware/authmiddleware');

router.get('/health', (_, res) => {
  res.send('check');
});

// router.route('/:isbn').post(Borrow.createBorrowedRecord);
router.post('/:isbn', verifyToken, Borrow.createBorrowedRecord);
router.get('/', verifyTokenAdmin, Borrow.getAllBorrowedBooks);

module.exports = router;
