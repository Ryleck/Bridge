var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soir&eacute;e de bridge' , name:'soir&eacute;e de bridge'});
});

module.exports = router;
