const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('monthly-update', {
        foo: ''
    });
});

router.get('/view', (req, res) => {
    res.render('monthly-update', {
        foo: ''
    });
});

module.exports = router