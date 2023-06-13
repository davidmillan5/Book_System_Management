const express = require('express'),
  router = express.Router(),
  { User } = require('../controllers'),
  { userAuth } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/').get(User.getAllUsers).post(User.createUser);

router.route('/register').post(userAuth.registerUser);
router.route('/login').post(userAuth.loginUser);

module.exports = router;
