const express = require('express'),
  router = express.Router(),
  { Returned } = require('../controllers'),
  { verifyToken, verifyTokenAdmin } = require('../middleware/authmiddleware');

router.get('/health', (_, res) => {
  res.send('check');
});

// router.route('/:id').post(Returned.createReturnedRecord);
router.post('/:id', verifyToken, Returned.createReturnedRecord);
router.get('/', verifyTokenAdmin, Returned.getAllReturnedBooksRecords);
router.get('/:email', verifyToken, Returned.getAllReturnedBooksByUser);

module.exports = router;
