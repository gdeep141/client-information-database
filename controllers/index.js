const express = require('express');
const router = express.Router();

router.use('/customer-information', require('./customer-information'));
router.use('/proposals', require('./proposals'));
router.use('/processes', require('./processes'));
router.use('/monthly-update', require('./monthly-update'));
router.use('/actuals', require('./actuals'));


router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router