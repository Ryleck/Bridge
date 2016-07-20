/**
 * Created by Phil on 2016-01-31.
 */
var express = require('express');
var router = express.Router();
var varPl = require('../node_modules/planchette/planchette');
var varVulPPl = [0,1,2,3,1,2,3,0,2,3,0,1,3,0,1,2];

router.get('/', function(req, res, next) {
    res.render('feuillePointage', { title: 'Feuille de pointage',
        plan: retournePlanchettes(),
        //corriger varPl.getPlNb par varPl.getPRonde
        planchettes: creePlanchettes(varPl.getEquipeNS(req.query.table), varPl.getEquipeEO(req.query.table), varPl.getPlNb(req.query.table))
        //varPl.getPlNb(req.query.table), equipes: codeEquipe(varPl.getEquipeNS(req.query.table), varPl.getEquipeEO(req.query.table), varPl.getPlNb(req.query.table))
    });
});

function determineVul(pl){
    var varVul = varVulPPl[parseInt(pl)+1];
    if (varVul == 0){
        return 'Aucune';
    }
    else if (varVul == 1){
        return 'Nord - Sud';
    }
    else if (varVul == 2){
        return 'Est - Ouest';
    }
    else{
        return 'Tous';
    }

}

function codeEquipe(equipeNS, equipeEO, pl){
    var varVul = varVulPPl[parseInt(pl)+1];
    if (varVul == 0){
        return '<td id="contrat">'+equipeNS+'</td><td id="contrat">'+equipeEO+'</td>';
    }
    else if (varVul == 1){
        return '<td id="tdVul">'+equipeNS+'</td><td id="contrat">'+equipeEO+'</td>';
    }
    else if (varVul == 2){
        return '<td id="contrat">'+equipeNS+'</td><td id="tdVul">'+equipeEO+'</td>';
    }
    else{
        return '<td id="tdVul">'+equipeNS+'</td><td id="tdVul">'+equipeEO+'</td>';
    }
}

function retournePlanchettes(){

}

function creePlanchettes(equipeNS, equipeEO, pl){
    var sPl = '';
    sPl = sPl + '<tr>' +
        '<td id="contrat">'+ pl +'</td>' +
        codeEquipe(equipeNS, equipeEO, pl)+
        '<td id="contrat"><select id="nbLeves">' +
        '<option value="0" disabled selected>Choisir</option>' +
        '<option value="1">1</option>' +
        '<option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
        '<option value="6">6</option>' +
        '<option value="7">7</option>' +
        '</select><select id="couleur">' +
        '<option value="0" disabled selected>Choisir</option>' +
        '<option value="1">Tr&egrave;fle</option>' +
        '<option value="2">Carreau</option>' +
        '<option value="3">Coeur</option>' +
        '<option value="4">Pique</option>' +
        '<option value="5">Sans atout</option>' +
        '</select><select id="contre">' +
        '<option value="1"></option>' +
        '<option value="2">x</option>' +
        '<option value="3">xx</option>' +
        '</select></td>' +
        '<td id="contrat">' +
        '<select id="par">' +
        '<option value="0" disabled selected>Choisir</option>' +
        '<option value="1">Nord</option>' +
        '<option value="2">Est</option>' +
        '<option value="3">Sud</option>' +
        '<option value="4">Ouest</option>' +
        '</select></td>' +
        '<td id="contrat">' +
        '<select id="entame">' +
        '<option value="0" disabled selected>Choisir</option>'+
        '<option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
        '<option value="6">6</option>' +
        '<option value="7">7</option>' +
        '<option value="8">8</option>' +
        '<option value="9">9</option>' +
        '<option value="10">10</option>' +
        '<option value="11">Valet</option>' +
        '<option value="12">Dame</option>' +
        '<option value="13">Roi</option>' +
        '<option value="14">As</option>' +
        '</select>' +
        '<select id="entame">' +
        '<option value="0" disabled selected>Choisir</option>'+
        '<option value="1">Tr&egrave;fle</option>' +
        '<option value="2">Carreau</option>' +
        '<option value="3">Coeur</option>' +
        '<option value="4">Pique</option>' +
        '</select>'+
        '</td>' +
        '<td id="contrat">' +
        '<select id="resultat">' +
        '<option value="0" disabled selected>Choisir</option>'+
        '<option value="1">+6</option>' +
        '<option value="2">+5</option>' +
        '<option value="3">+4</option>' +
        '<option value="4">+3</option>' +
        '<option value="5">+2</option>' +
        '<option value="6">+1</option>' +
        '<option value="7">=</option>' +
        '<option value="8">-1</option>' +
        '<option value="9">-2</option>' +
        '<option value="10">-3</option>' +
        '<option value="11">-4</option>' +
        '<option value="12">-5</option>' +
        '<option value="13">-6</option>' +
        '<option value="14">-7</option>' +
        '<option value="15">-8</option>' +
        '<option value="16">-9</option>' +
        '<option value="17">-10</option>' +
        '<option value="18">-11</option>' +
        '<option value="19">-12</option>' +
        '<option value="20">-13</option>' +
        '</select>' +
        '</td>' +
        '<td id="pointageNS"><input class="txtPoints" type="text" name="pNS"></td>' +
        '<td id="pointageEO"><input class="txtPoints" type="text" name="pEO"></td></tr>';

    //td#contrat=planchette

    //!=equipes
    return sPl;

}

module.exports = router;