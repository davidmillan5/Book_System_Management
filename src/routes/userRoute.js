const express = require('express'),
  router = express.Router(),
  { userAuth } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/register').post(userAuth.registerUser);
router.route('/login').post(userAuth.loginUser);

module.exports = router;
