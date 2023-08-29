const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');


router.get('/', isLoggedIn, async (req, res) => {
    res.render('Pages/restaurante/list-restaurantes');
});



module.exports = router;