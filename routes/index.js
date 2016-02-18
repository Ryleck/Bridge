var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bridge du vendredi soir' , name:'bridge du vendredi soir'});
});

module.exports = router;
