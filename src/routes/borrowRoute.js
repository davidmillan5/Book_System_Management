const express = require('express'),
  router = express.Router(),
  { Borrow } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/:isbn').post(Borrow.createBorrowedRecord);

module.exports = router;
