var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('nouvellePartie', { title: 'Nouvelle Partie'});
});

module.exports = router;
