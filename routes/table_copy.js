/**
 * Created by Phil on 2016-02-23.
 */
var express = require('express');
var router = express.Router();
//var tableau = require('../node_modules/tableau/tableau');
var mov = require('../node_modules/mouvement/mouvement');
var lettre = require('../node_modules/lettre-equipe/lettreEquipe');
//var varPl = require('../node_modules/planchette/planchette');
var varVulPPl = [0,1,2,3,1,2,3,0,2,3,0,1,3,0,1,2];


router.post('/', function(req, res) {

    console.log(req.body);
    res.render('table', {title: 'Table '+ req.body.table, title2: 'Table '+ '<span class="spanEq">'+req.body.table+'</span>', feuille: resumeTable(req.body.table, req.body.ronde, req.body.genere, req)});

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

    var classEtuiNo = "divEtuiNoActif";
    var classeEtui = "divEtuiActif";
    var sDivNoPl = "";
    var sDivPl = "";
    var nbPl = parseInt(nbPpR*parseInt(ronde));
    var equipeNS;
    var equipeEO;

    for(i = parseInt(1+nbPpR*(parseInt(ronde)-1)); i <= nbPl; i++) {
        var pl = varPl.getPlanchette(table, i);
        sDivNoPl = sDivNoPl + geneteNoPlanchette(pl[0], classEtuiNo);
        sDivPl = sDivPl + genetePointagePlanchette(pl[0], pl[1], pl[2], classeEtui, i, nbPl);
        classEtuiNo = "divEtuiNoInactif";
        classeEtui = "divEtuiInactif";
        equipeNS = '<span class="spanEq">'+pl[1]+'</span>';
        equipeEO = '<span class="spanEq">'+pl[2]+'</span>';
    }

    var htmlFormS = '<h1 class="title">Ronde '+'<span class="spanEq">'+ronde+'</span>'+'</h1><div class="divVs"><span class="spanEqT">Nord-Sud '+equipeNS+'</span><span class="spanVs">vs</span><span class="spanEqT">Est-Ouest '+equipeEO+' </span></div>';
    var htmlFormE = '</div>';

    var btnSuivant;

    if(parseInt(ronde) < parseInt(nbR)){
        htmlFormS = htmlFormS + '<form action="table" method="post"><input type="hidden" name="genere" value="0"><input type="hidden" name="ronde" value="' + rondeInt + '"><input type="hidden" name="table" value="'+table+'">';
        btnSuivant = "Ronde suivante";
    }else{
        htmlFormS = htmlFormS + '<form action="terminer" method="post"><input type="hidden" name="table" value="'+table+'">';
        btnSuivant = "Terminer";
    }





    var retour = '<div id="divPl">' +
        '<div class="divEtuiGauche"><div style="float: right">' +
        '<div class="divEtui">&Eacute;tui</div>' +
        sDivNoPl + '</div><button class="boutonRdnS">'+btnSuivant+'</button></div>'+
        '<div class="divEtuiDroit">' + sDivPl + '</div>';


    return htmlFormS + retour + htmlFormE;
}

function geneteNoPlanchette(pl, classEtuiNo) {
    return '<div data-no-pl="'+pl+'" class="' + classEtuiNo + '" onclick="changeEtui(this)">' + pl + '</div>';
}

function genetePointagePlanchette(pl, equipeNS, equipeEO, classeEtui, i, nbPl){
    var sPl = '<div name="etui'+pl+'"class="'+ classeEtui +'"> '+
    '<div class="dCat"> <span class="spanCat">Contrat</span>'+
    '<div class="styled-select1 blue semi-square">'+
    '<select id="nbLeves'+ pl +'" name="nbLeves">' +
    '<option value="0" disabled selected>Choisir</option>' +
    '<option value="1">1</option>' +
    '<option value="2">2</option>' +
    '<option value="3">3</option>' +
    '<option value="4">4</option>' +
    '<option value="5">5</option>' +
    '<option value="6">6</option>' +
    '<option value="7">7</option>' +
    '</select>' +
    '</div>' +

    '<div class="styled-select2 blue semi-square">'+
    '<select id="couleur'+ pl +'" name="couleur">' +
    '<option value="0" disabled selected>Choisir</option>' +
    '<option value="1">Tr&egrave;fle</option>' +
    '<option value="2">Carreau</option>' +
    '<option value="3">Coeur</option>' +
    '<option value="4">Pique</option>' +
    '<option value="5">Sans atout</option>' +
    '</select>' +
    '</div>' +

    '<div class="styled-select3 blue semi-square">'+
    '<select id="contre'+ pl +'" name="contre">' +
    '<option value="1"></option>' +
    '<option value="2">X</option>' +
    '<option value="3">XX</option>' +
    '</select>' +
    '</div>' +
    '</div>' +

    '<div class="dCat"> <span class="spanCat">Par</span>'+
    '<div class="styled-select1 blue semi-square">'+
    '<select id="par' + pl + '" name="par">' +
    '<option value="0" disabled selected>Choisir</option>' +
    '<option value="1">Nord</option>' +
    '<option value="2">Est</option>' +
    '<option value="3">Sud</option>' +
    '<option value="4">Ouest</option>' +
    '</select>' +
    '</div>' +
    '</div>' +

    '<div class="dCat"> <span class="spanCat">Entame</span>'+
    '<div class="styled-select1 blue semi-square">'+
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
    '</div>' +

    '<div class="styled-select4 blue semi-square">'+
    '<select name="entameCouleur">' +
    '<option value="0" disabled selected>Choisir</option>'+
    '<option value="1">Tr&egrave;fle</option>' +
    '<option value="2">Carreau</option>' +
    '<option value="3">Coeur</option>' +
    '<option value="4">Pique</option>' +
    '</select>' +
    '</div>' +
    '</div>' +

    /*'<div>'+*/
    '<div class="dCat"> <span class="spanCat">R&eacute;sultat</span>'+
    '<div class="styled-select1 blue semi-square">'+
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
    '</div>' +
    '</div>' +
    '<div class="dCat"><span class="spanCat">Points</span>' +
    '<div class="dCat">' + codeEquipeNS(pl) + '<input id="pNS'+ pl +'" class="txtPoints" type="text" name="pNS" value="0"></div>' +
    '<div class="dCat">' + codeEquipeEO(pl) + '<input id="pEO'+ pl +'" class="txtPoints" type="text" name="pEO" value="0"></div>' +
    /*'</div>' +*/
    '</div>';

    if(i == nbPl){
        return sPl + '<input type="submit" value="Ronde&#13;&#10;suivante" class="boutonRdnS"></form></div>';
        return sPl + '</form></div>';
    }else{
        return sPl + '</div>';
    }


}

function codeEquipeNS(pl){
    var varVul = varVulPPl[parseInt(pl)-1];

    switch (varVul){
        case 0 :
            return '<span class="spanCat">N-S</span>';
        case 1 :
            return '<input id="NS" type="hidden" value="'+ pl +'" class="iVul"><span class="spanCatVul">N-S</span>';
        case 2 :
            return '<span class="spanCat">N-S</span>';
        case 3 :
            return '<input id="NS" type="hidden" value="'+ pl +'" class="iVul"><span class="spanCatVul">N-S</span>';
    }
}

function codeEquipeEO(pl){
    var varVul = varVulPPl[parseInt(pl)-1];

    switch (varVul){
        case 0 :
            return '<span class="spanCat">E-O</span>';
        case 1 :
            return '<span class="spanCat">E-O</span>';
        case 2 :
            return '<input id="EO" type="hidden" value="'+ pl +'" class="iVul"><span class="spanCatVul">E-O</span>';
        case 3 :
            return '<input id="EO" type="hidden" value="'+ pl +'" class="iVul"><span class="spanCatVul">E-O</span>';
    }

}

function creePlanchettes(table, eNS, eEO, pPl, dPl){

    for(j = pPl; j <= dPl; j++){
        varPl.ajouterPlanchette(table, eNS, eEO, j);

    }
}

module.exports = router;