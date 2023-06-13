const express = require('express'),
  router = express.Router(),
  { authBook } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/').get(authBook.getAllBooks);

router.route(`/category/:category`).get(authBook.getBookByCategory);
router.route(`/author/:author`).get(authBook.getBookByAuthor);
router.route(`/isbn/:isbn`).get(authBook.getBookByIsbn);
router.route(`/:id`).get(authBook.getBookById);

module.exports = router;
