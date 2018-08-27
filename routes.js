const express = require('express');
const api = require('./helpers/api.js');

const router = express.Router();

const testData = [
    { id: 1, name: 'option 1'},
    { id: 2, name: 'option 2'},
    { id: 3, name: 'option 3'},
]

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/customer-information', (req, res) => {
    res.render('customer-information', {
        depInfoList: testData,
    });
});

router.get('/proposals', (req, res) => {
    res.render('proposals');
})

router.get('/processes', (req, res) => {
    res.render('processes');
})

router.get('/monthly-update', (req, res) => {
    res.render('monthly-update');
})

router.get('/actuals', (req, res) => {
    res.render('actuals');
})

module.exports = router;