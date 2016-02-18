/**
 * Created by Phil on 2016-02-16.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('mouvement', { title: 'Mouvement des planchettes'});
});

module.exports = router;
