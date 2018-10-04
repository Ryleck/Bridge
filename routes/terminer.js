/**
 * Created by Phil on 2016-06-05.
 */
var express = require('express');
var router = express.Router();
var tableau = require('../node_modules/tableau/tableau');
var varPl = require('../node_modules/planchette/planchette');

router.post('/', function(req, res) {
    ecrireScore(req);
    res.render('terminer', { title: 'Terminer'});
});

function ecrireScore(req) {
    var nbR = tableau.retourneNombreRondes();
    var nbP = tableau.retourneNombrePlanchette();
    var nbPpR = nbP / nbR;

    var j = 0;

    if(nbPpR > 1) {
        for(i = parseInt(1+nbPpR*(parseInt(nbR)-1)); i <= parseInt(nbPpR*(parseInt(nbR))); i++) {

// A changer
            varPl.setScore(parseInt(req.body.table), i, (parseInt(req.body.pNS[j])-parseInt(req.body.pEO[j])));
            j++;
        }
    } else {
        //console.log(req.body);

// A changer
        varPl.setScore(parseInt(req.body.table), nbR, (parseInt(req.body.pNS)-parseInt(req.body.pEO)));
    }
    console.log(varPl.getPartie());
}

module.exports = router;
