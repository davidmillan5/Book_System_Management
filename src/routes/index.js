const { Router } = require('express');
const router = Router();

router.use('/api/v1/books', require('./bookRoute'));
router.use('/api/v1/users', require('./userRoute'));

module.exports = router;
