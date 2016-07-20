/**
 * Created by Phil on 2016-06-05.
 */
var express = require('express');
var router = express.Router();
var tableau = require('../node_modules/tableau/tableau');
var varPl = require('../node_modules/planchette/planchette');

/* GET home page. */
router.get('/', function(req, res, next) {
    ecrireScore(req);
    res.render('terminer', { title: 'Terminer'});
});

function ecrireScore(req) {
    var nbR = tableau.retourneNombreRondes();
    var nbP = tableau.retourneNombrePlanchette();
    var nbPpR = nbP / nbR;
    console.log('*****************');
    console.log(nbR);
    console.log(req.query.table);

    var j = 0;
    for(i = parseInt(1+nbPpR*(parseInt(nbR)-1)); i <= parseInt(nbPpR*(parseInt(nbR))); i++) {
        //console.log(i);
        varPl.setScore(parseInt(req.query.table), i, (parseInt(req.query.pNS[j])-parseInt(req.query.pEO[j])));
        j++;
    }
    console.log(varPl.getPartie());
}

module.exports = router;
