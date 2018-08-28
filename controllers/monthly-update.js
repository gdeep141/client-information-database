const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('monthly-update')
})

module.exports = router