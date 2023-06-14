const express = require('express'),
  router = express.Router(),
  { User } = require('../controllers'),
  { userAuth } = require('../controllers'),
  { authBook } = require('../controllers'),
  { verifyTokenAdmin } = require('../middleware/authmiddleware');

router.get('/health', (_, res) => {
  res.send('check');
});

router.get('/', verifyTokenAdmin, User.getAllUsers);
router.post('/', verifyTokenAdmin, User.createUser);
router.route('/login/admin').post(User.loginAdmin);

router.route('/register').post(userAuth.registerUser);
router.route('/login').post(userAuth.loginUser);

module.exports = router;
