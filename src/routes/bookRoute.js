const express = require('express'),
  router = express.Router(),
  { Book } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/').get(Book.getAllBooks).post(Book.createBook);

router.route(`/category/:category`).get(Book.getBookByCategory);
router.route(`/author/:author`).get(Book.getBookByAuthor);
router.route(`/isbn/:isbn`).get(Book.getBookByIsbn);
router.route(`/borrow/:id&:quantity`).get(Book.borrowBook);

router
  .route(`/:id`)
  .get(Book.getBookById)
  .put(Book.updateBook)
  .delete(Book.deleteBook);

module.exports = router;
