const express = require('express'),
  router = express.Router(),
  { User } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/').get(User.getAllUsers).post(User.createUser);

module.exports = router;
