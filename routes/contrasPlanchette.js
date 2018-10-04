/**
 * Created by Phil on 2018-02-19.
 */

var express = require('express');
var router = express.Router();
//var tablePlanchettesJouees = require('../node_modules/tablePlanchettesJouees/tablePlanchettesJouees');
var gestion = require('../node_modules/gestionPartie/gestionPartie');

router.post('/',function(req, res){
    //console.log(req.body);
    var tablePlanchettesJouees = gestion.retourneTablePlanchettesJouees(req.body.indexPartie);

    var IdsPlanchette = tablePlanchettesJouees.retourneIdsPlanchette(req.body.noPlanchette);
    console.log(IdsPlanchette);
    var accesPl = [];
    var rondesJouees = [];
    var i = 0;
    var nbPlJoue = parseInt(IdsPlanchette.length)-1;
    var strAjax = '<div><h2 class="h2Table">Planchette&nbsp;<span class="spanEq">' + req.body.noPlanchette + '</span></h2></div>';

    for(i = 0; i < nbPlJoue; i++){
        accesPl.push(gestion.retourneInfoPlanchette(IdsPlanchette[i]));
        rondesJouees.push(gestion.retourneRonde(accesPl[i][0],accesPl[i][1],accesPl[i][2]));
        strAjax += '<div class="divPlJouees"><span>Nord - Sud  </span><span class="spanEq">' + rondesJouees[i].eNS + '&nbsp;</span><span class="spanEq">' + rondesJouees[i].nomsNS[0] + ' et ' + rondesJouees[i].nomsNS[1] + '</span>' +
            '<br><span>Est - Ouest </span><span class="spanEq">' + rondesJouees[i].eEO + '&nbsp;</span><span class="spanEq">' + rondesJouees[i].nomsEO[0] + ' et ' + rondesJouees[i].nomsEO[1] + '</span></div>' +
            '<div class="divPlJoueesResul">' + rondesJouees[i].planchettes[accesPl[i][3]].contrat + ' par ' + rondesJouees[i].planchettes[accesPl[i][3]].declarant + ' entame ' + rondesJouees[i].planchettes[accesPl[i][3]].entame +
            ' r&eacute;sultat '+rondesJouees[i].planchettes[accesPl[i][3]].resultat + ' points ' + rondesJouees[i].planchettes[accesPl[i][3]].score + '</div>';
    }



    //console.log(rondesJouees[0].eNS+" "+rondesJouees[0].eEO+" "+rondesJouees[0].nomsNS+" "+rondesJouees[0].nomsEO+" "+rondesJouees[0].planchettes[accesPl[0][3]].noPlanchette);
    //console.log(rondesJouees[1].eNS+" "+rondesJouees[1].eEO+" "+rondesJouees[1].nomsNS+" "+rondesJouees[1].nomsEO+" "+rondesJouees[1].planchettes[accesPl[1][3]].noPlanchette);
    //console.log(rondesJouees[2].eNS+" "+rondesJouees[2].eEO+" "+rondesJouees[2].nomsNS+" "+rondesJouees[2].nomsEO+" "+rondesJouees[2].planchettes[accesPl[2][3]].noPlanchette);

    /*console.log(rondesJouees[0].planchettes[accesPl[0][3]]);
    console.log(rondesJouees[1].planchettes[accesPl[1][3]]);
    console.log(rondesJouees[2].planchettes[accesPl[2][3]]);*/

    res.set('Content-Type', 'text/html');
    res.send(strAjax);
});



module.exports = router;
