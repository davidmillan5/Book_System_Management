const express = require('express'),
  router = express.Router(),
  { Returned } = require('../controllers'),
  { verifyToken } = require('../middleware/authmiddleware');

router.get('/health', (_, res) => {
  res.send('check');
});

// router.route('/:id').post(Returned.createReturnedRecord);
router.post('/:id', verifyToken, Returned.createReturnedRecord);

module.exports = router;
