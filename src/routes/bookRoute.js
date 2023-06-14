const express = require('express'),
  router = express.Router(),
  { Book } = require('../controllers'),
  { verifyTokenAdmin } = require('../middleware/authmiddleware');

router.get('/health', (_, res) => {
  res.send('check');
});

router.get('/', verifyTokenAdmin, Book.getAllBooks);
router.post('/', verifyTokenAdmin, Book.createBook);

router.get(`/category/:category`, verifyTokenAdmin, Book.getBookByCategory);
router.get(`/author/:author`, verifyTokenAdmin, Book.getBookByAuthor);
router.get(`/isbn/:isbn`, verifyTokenAdmin, Book.getBookByIsbn);
router.get(`/:id`, verifyTokenAdmin, Book.getBookById);
router.put(`/:id`, verifyTokenAdmin, Book.updateBook);
router.delete(`/:id`, verifyTokenAdmin, Book.updateBook);

module.exports = router;
