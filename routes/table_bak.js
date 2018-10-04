/**
 * Created by Phil on 2016-02-23.
 */
var express = require('express');
var router = express.Router();
var tableau = require('../node_modules/tableau/tableau');
var mov = require('../node_modules/mouvement/mouvement');
var lettre = require('../node_modules/lettre-equipe/lettreEquipe');
var varPl = require('../node_modules/planchette/planchette');
var varVulPPl = [0,1,2,3,1,2,3,0,2,3,0,1,3,0,1,2];


router.post('/', function(req, res) {

    console.log(req.body);
    res.render('table', {title: 'Table ' + req.body.table, feuille: resumeTable(req.body.table, req.body.ronde, req.body.genere, req)});

});

function resumeTable(table, ronde, genere, req){
    var nbE = tableau.retourneNombreDEquipe();
    var nbR = tableau.retourneNombreRondes();
    var nbP = tableau.retourneNombrePlanchette();
    var nbPpR = nbP/nbR;
    var nouvement = mov.retourneMouvement(nbE)[1];
    //console.log(nouvement);
    if(genere === '1') {
        varPl.initTable(table);
        for (i = nbR * (parseInt(table) - 1); i < nbR * parseInt(table); i++) {
            //console.log(nbPpR);
            creePlanchettes(table, lettre.retourneLettre(nouvement[i][0] - 1), lettre.retourneLettre(nouvement[i][1] - 1), ((nouvement[i][2] * nbPpR) - (nbPpR - 1)), nouvement[i][2] * nbPpR);
            // console.log(lettre.retourneLettre(nouvement[i][0]-1) + " " + lettre.retourneLettre(nouvement[i][1]-1) + " " + ((nouvement[i][2]*nbPpR)-(nbPpR-1))
            //   + " - " + nouvement[i][2]*nbPpR);

        }
    }else{
        var j = 0;

        if(nbPpR > 1) {
            for (i = parseInt(1 + nbPpR * (parseInt(ronde) - 2)); i <= parseInt(nbPpR * (parseInt(ronde) - 1)); i++) {


// A changer

                varPl.setScore(table, i, (parseInt(req.body.pNS[j]) - parseInt(req.body.pEO[j])));
                j++;
            }
        } else {

// A changer
            varPl.setScore(table, parseInt(1 + nbPpR * (parseInt(ronde) - 2)), (parseInt(req.body.pNS) - parseInt(req.body.pEO)));

        }
        console.log(varPl.getPartie());
    }

    var rondeInt = parseInt(ronde) + 1;

    var htmlFormS = '<h2>Ronde '+ronde+'</h2>';
    var htmlFormE = '';

    if(parseInt(ronde) < parseInt(nbR)){
        htmlFormS = htmlFormS + '<form action="table" method="post"><input type="hidden" name="genere" value="0"><input type="hidden" name="ronde" value="' + rondeInt + '"><input type="hidden" name="table" value="'+table+'">';
        htmlFormE = '</tbody></table><input type="submit" value="Ronde suivante" class="bouton"></form></div>';
    }else{
        htmlFormS = htmlFormS + '<form action="terminer" method="post"><input type="hidden" name="table" value="'+table+'">';
        htmlFormE = '</tbody></table><input type="submit" value="Terminer" class="bouton"></form></div>';
    }



    var retour = '<div id="divPl">' +
        htmlFormS +
        '<table id="tablePointage"><tbody><tr><td class="contrat" rowspan="2">&Eacute;tui</td><td class="contrat" colspan="2">&Eacute;quipes</td>'+
        '<td class="contrat" rowspan="2">Contrat</td><td class="contrat" rowspan="2">Par</td><td class="contrat" rowspan="2">Entame</td><td class="contrat" rowspan="2">R&eacute;sultat</td>'+
        '<td class="contrat" colspan="2">Points</td></tr><tr><td class="contrat">N-S</td><td class="contrat">E-O</td><td class="contrat">N-S</td><td class="contrat">E-O</td></tr>';


    for(i = parseInt(1+nbPpR*(parseInt(ronde)-1)); i <= parseInt(nbPpR*parseInt(ronde)); i++) {
        var pl = varPl.getPlanchette(table, i);
        retour = retour + genetePointagePlanchette(pl[0],pl[1],pl[2]);
    }

    return retour + htmlFormE;
}

function genetePointagePlanchette(pl, equipeNS, equipeEO){
    var sPl = '';
    sPl = sPl + '<tr>' +
        '<td class="contrat">'+ pl +'</td>' +
        codeEquipe(equipeNS, equipeEO, pl)+
        '<td class="contrat"><select id="nbLeves'+ pl +'" name="nbLeves">' +
        '<option value="0" disabled selected>Choisir</option>' +
        '<option value="1">1</option>' +
        '<option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
        '<option value="6">6</option>' +
        '<option value="7">7</option>' +
        '</select><select id="couleur'+ pl +'" name="couleur">' +
        '<option value="0" disabled selected>Choisir</option>' +
        '<option value="1">Tr&egrave;fle</option>' +
        '<option value="2">Carreau</option>' +
        '<option value="3">Coeur</option>' +
        '<option value="4">Pique</option>' +
        '<option value="5">Sans atout</option>' +
        '</select><select id="contre'+ pl +'" name="contre">' +
        '<option value="1"></option>' +
        '<option value="2">X</option>' +
        '<option value="3">XX</option>' +
        '</select></td>' +
        '<td class="contrat">' +
        '<select id="par' + pl + '" name="par">' +
        '<option value="0" disabled selected>Choisir</option>' +
        '<option value="1">Nord</option>' +
        '<option value="2">Est</option>' +
        '<option value="3">Sud</option>' +
        '<option value="4">Ouest</option>' +
        '</select></td>' +
        '<td class="contrat">' +
        '<select name="entame">' +
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
        '<select name="entameCouleur">' +
        '<option value="0" disabled selected>Choisir</option>'+
        '<option value="1">Tr&egrave;fle</option>' +
        '<option value="2">Carreau</option>' +
        '<option value="3">Coeur</option>' +
        '<option value="4">Pique</option>' +
        '</select>'+
        '</td>' +
        '<td class="contrat">' +
        '<select id="resultat'+ pl +'" name="resultat" onchange="calcule(' + pl + ')">' +
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
        '<td id="pointageNS"><input id="pNS'+ pl +'" class="txtPoints" type="text" name="pNS" value="0"></td>' +
        '<td id="pointageEO"><input id="pEO'+ pl +'" class="txtPoints" type="text" name="pEO" value="0"></td></tr>';

    //td#contrat=planchette

    //!=equipes
    return sPl;
}

function codeEquipe(equipeNS, equipeEO, pl){
    var varVul = varVulPPl[parseInt(pl)-1];
    if (varVul == 0){
        return '<td class="contrat">'+equipeNS+'</td><td class="contrat">'+equipeEO+'</td>';
    }
    else if (varVul == 1){
        return '<input id="NS" type="hidden" value="'+ pl +'" class="iVul"><td class="tdVul">'+equipeNS+'</td><td class="contrat">'+equipeEO+'</td>';
    }
    else if (varVul == 2){
        return '<input id="EO" type="hidden" value="'+ pl +'" class="iVul"><td class="contrat">'+equipeNS+'</td><td class="tdVul">'+equipeEO+'</td>';
    }
    else{
        return '<input id="NS" type="hidden" value="'+ pl +'" class="iVul"><input id="EO" type="hidden" value="'+ pl +'" class="iVul"><td class="tdVul">'+equipeNS+'</td><td class="tdVul">'+equipeEO+'</td>';
    }
}

function creePlanchettes(table, eNS, eEO, pPl, dPl){
    //console.log(table+eNS+eEO+pPl+dPl);

    for(j = pPl; j <= dPl; j++){
        //console.log(j);
        varPl.ajouterPlanchette(table, eNS, eEO, j);

    }
    //varPl.ajouterBreak(table);
}

module.exports = router;