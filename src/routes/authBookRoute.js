const express = require('express'),
  router = express.Router(),
  { authBook } = require('../controllers'),
  { verifyToken } = require('../middleware/authmiddleware');

router.get('/health', (_, res) => {
  res.send('check');
});

router.get('/', verifyToken, authBook.getAllBooks);

router.get(`/category/:category`, verifyToken, authBook.getBookByCategory);
router.get(`/author/:author`, verifyToken, authBook.getBookByAuthor);
router.get(`/isbn/:isbn`, verifyToken, authBook.getBookByIsbn);
router.get(`/:id`, verifyToken, authBook.getBookById);

module.exports = router;
