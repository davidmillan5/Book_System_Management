const express = require('express'),
  router = express.Router(),
  { Returned } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/:id').post(Returned.createReturnedRecord);

module.exports = router;
