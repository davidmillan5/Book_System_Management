const { Router } = require('express');
const router = Router();

const { healthCheck, welcomePage } = require('../controllers/appController');

router.get('/', welcomePage).get('/health', healthCheck);
router.use('/api/v1/books', require('./bookRoute'));
router.use('/api/v1/users', require('./userRoute'));
router.use('/api/v1/borrow', require('./borrowRoute'));

module.exports = router;
