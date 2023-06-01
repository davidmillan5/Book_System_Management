const express = require('express'),
  router = express.Router(),
  { Book } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/').get(Book.getAllBooks).post(Book.createBook);

router
  .route(`/:id`)
  .get(Book.getBookById)
  .put(Book.updateBook)
  .delete(Book.deleteBook);

module.exports = router;
