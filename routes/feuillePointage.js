/**
 * Created by Phil on 2016-01-31.
 */
var express = require('express');
var router = express.Router();
var varPl = require('../node_modules/planchette/planchette');
var varVul = determineVul(varPl.getVul(0));

router.get('/', function(req, res, next) {
    res.render('feuillePointage', { title: 'Feuille de pointage', planchette: varPl.getPlNb(0), equipes: codeEquipe(varPl.getEquipeNS(0), varPl.getEquipeEO(0), varPl.getVul(0)),
    vulnerabilite: varVul});
});

function determineVul(vul){
    if (vul == 1){
        return 'Tous';
    }
    else if (vul == 2){
        return 'Nord - Sud';
    }
    else if (vul == 3){
        return 'Est - Ouest';
    }
    else{
        return 'Aucune';
    }

}

function codeEquipe(equipeNS, equipeEO, vul){
    if (varPl.getVul(0) == 1){
        return '<td id="tdVul">'+equipeNS+'</td><td id="tdVul">'+equipeEO+'</td>';
    }
    else if (varPl.getVul(0) == 2){
        return '<td id="tdVul">'+equipeNS+'</td><td id="contrat">'+equipeEO+'</td>';
    }
    else if (varPl.getVul(0) == 3){
        return '<td id="contrat">'+equipeNS+'</td><td id="tdVul">'+equipeEO+'</td>';
    }
    else{
        return '<td id="contrat">'+equipeNS+'</td><td id="contrat">'+equipeEO+'</td>';
    }
}

module.exports = router;