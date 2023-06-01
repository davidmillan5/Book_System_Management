const { Router } = require('express');
const router = Router();

router.use('/api/v1/books', require('./bookRoute'));

module.exports = router;
