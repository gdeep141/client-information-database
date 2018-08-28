const express = require('express');
const router = express.Router();

const testData = [
    { id: 1, name: 'option 1'},
    { id: 2, name: 'option 2'},
    { id: 3, name: 'option 3'},
]

router.get('/', (req, res) => {
    res.render('customer-information', {
        depInfoList: testData,
    })
})

module.exports = router