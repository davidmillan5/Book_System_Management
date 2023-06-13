const { Router } = require('express');
const router = Router();

const { healthCheck, welcomePage } = require('../controllers/appController');

router.get('/', welcomePage);
router.get('/health', healthCheck);
router.use('/api/v1/users', require('./userRoute'));
router.use('/api/v1/books', require('./bookRoute'));
router.use('/api/v1/borrow', require('./borrowRoute'));
router.use('/api/v1/return', require('./returnedRouted'));

module.exports = router;
