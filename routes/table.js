/**
 * Created by Phil on 2016-02-23.
 */
var express = require('express');
var router = express.Router();
var gestion = require('../node_modules/gestionPartie/gestionPartie');
var result = require('../node_modules/resultatsTableau/resultatsTableau');

var infoTable = {
    indexPartie : -1,
    noTable : 0,
    noRonde : 0,
    noPlanchette : 0,
    eNS : "",
    eEO : "",
    nomsNS : [],
    nomsEO : [],
    vul : 0
};

router.post('/', function(req, res) {


    if ((typeof req.body.pNS != 'undefined') && (typeof req.body.rondeAD == 'undefined')) {
        chargeInfoTable(req, false);
        console.log("\n\rInscrit points");
        console.log(infoTable);
        console.log("**************");
        console.log(req.body);
        console.log("**************\n\r");

        inscritsPoints(req.body);

        res.send("Ok");
    } else {
        chargeInfoTable(req, true);
        //chargeInfoTable(req, true);
        if (gestion.tableTermine(infoTable.indexPartie, infoTable.noTable) == true) {
            res.render('resultats', {title: 'Resultats', nomsJoueurs: result.retourneNomsJoueurs(infoTable.indexPartie)});
        } else {
            if(typeof req.body.rondeAD == 'undefined') {
                console.log("render");
                render(res);
            }else{
                res.send("Ok");
            }
        }

    }
    //}
});

function render(res){
    res.render('table', {
        title: 'Table ' + infoTable.noTable,
        title2: 'Table ' + '<span class="spanEq">' + infoTable.noTable + '</span>',
        table: infoTable.noTable,
        indexPartie: infoTable.indexPartie,
        ronde: infoTable.noRonde,
        planchette: infoTable.noPlanchette,
        equipeNS: '<span id="sNS" class="' + determineVulEquipe(1) + '">' + infoTable.eNS + '</span>',
        equipeEO: '<span id="sEO" class="' + determineVulEquipe(2) + '">' + infoTable.eEO + '</span>',
        nomsNS: '<span class="spanEq">' + infoTable.nomsNS[0] + '</span> et <span class="spanEq">' + infoTable.nomsNS[1] + '</span>',
        nomsEO: '<span class="spanEq">' + infoTable.nomsEO[0] + '</span> et <span class="spanEq">' + infoTable.nomsEO[1] + '</span>',
        accesDirect: accesDirect(),
        rondesEtPlanchettes: rondesEtPlanchettes()
    });
}

/*function rondesEtPlanchettes(){
    var rondes = gestion.retourneRondes(infoTable.indexPartie, infoTable.noTable);
    //console.log(rondes);
    var i = 0;
    var j = 0;
    var sHTML = "";
    var classes = "";

    for(i = 0; i < rondes.length; i++){

        if(rondes[i].noRonde == infoTable.noRonde){
            classes = "divAccesRondes divAccesRondeActive";
        }else if(rondes[i].termine == 1){
            classes = "divAccesRondes divAccesRondeFinie";
        }else{
            classes = "divAccesRondes";
        }

        sHTML += '<div class="'+classes+'">'+
            '<div>Ronde '+rondes[i].noRonde+'</div>';
        for(j = 0; j < rondes[i].planchettes.length; j++){
            if((rondes[i].planchettes[j].noPlanchette == infoTable.noPlanchette)&&(rondes[i].noRonde == infoTable.noRonde)){
                classes = "divAccPlan divAccesPlanActive";
            }else if(rondes[i].planchettes[j].termine == 1){
                classes = "divAccPlan divAccesPlanFinie";
            }else{
                classes = "divAccPlan";
            }
            sHTML += '<form action="/accesDPl"><div class="'+classes+'" on><input type="hidden" value="'+rondes[i].planchettes[j].idPlanchette+'">Planchette '+rondes[i].planchettes[j].noPlanchette+'</div></form>';
        }
        sHTML += '</div>';
    }

    return sHTML;
}*/

/*function retourneNomsJoueurs(){
    var nbE = gestion.retourneNbEquipes(infoTable);
    var nbP = gestion.retourneNbPlanchettes(infoTable);
    var i = 0;
    var j = 0;
    var total = 0;
    var htmlString = '';
    for(i = 0; i < nbE; i++) {
        htmlString += '<div><div class="dNomsResultat">'
            +'<span>'+gestion.retourneNomsEquipe(infoTable, i)[0]+' et '
            +gestion.retourneNomsEquipe(infoTable, i)[1]+'</span>'
            + '</div>';
        for(j = 0; j < nbP; j++) {
            total += gestion.retourneScoreEquipe(infoTable, i, j);
            htmlString += '<div class="dPointage">' +
                '<span>' + gestion.retourneScoreEquipe(infoTable, i, j) + '</span>'+
                '</div>'
        }
        htmlString += '<div class="dTotal">' +
            '<span>Total : ' + total + '</span>'+
            '</div></div>';
        total = 0;
        //htmlString += '</div>'
    }
    return htmlString;
    //console.log(nbE);
}*/

function inscritsPoints(requete){
    /*console.log("*****************");
    console.log(infoTable);
    console.log(requete);
    console.log("*****************");*/
    gestion.ecrireResultatPlanchette(infoTable, requete);
}

function determineVulEquipe(eq){
    if(parseInt(infoTable.vul) === 3){
        return "spanEqVul";
    }
    if((parseInt(infoTable.vul) === 2) && (eq === 2)){
        return "spanEqVul";
    }
    if((parseInt(infoTable.vul) === 1) && (eq === 1)){
        return "spanEqVul";
    }
    return "spanEq";
}

function chargeInfoTable(req, affiche){

    console.log("/&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/");
    console.log("/********** Affiche " + affiche + " ************/");

    infoTable.indexPartie = parseInt(req.body.indexPartie);
    infoTable.noTable = parseInt(req.body.table);
    infoTable.noRonde = gestion.retourneNoRonde(infoTable.indexPartie, infoTable.noTable);
    if(parseInt(infoTable.noRonde) != -1) {
        infoTable.noPlanchette = gestion.retourneNoPlanchette(infoTable.indexPartie, infoTable.noTable, infoTable.noRonde, affiche);
        infoTable.eNS = gestion.retourneENS(infoTable.indexPartie, infoTable.noTable, infoTable.noRonde);
        infoTable.eEO = gestion.retourneEEO(infoTable.indexPartie, infoTable.noTable, infoTable.noRonde);
        infoTable.nomsNS = gestion.retourneNomsNS(infoTable.indexPartie, infoTable.noTable, infoTable.noRonde);
        infoTable.nomsEO = gestion.retourneNomsEO(infoTable.indexPartie, infoTable.noTable, infoTable.noRonde);
        infoTable.vul = gestion.retourneVul(infoTable.indexPartie, infoTable.noTable, infoTable.noRonde, infoTable.noPlanchette);
    }else{
        console.log("Else charge");
    }
    console.log("/&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/");
    console.log(infoTable);
    console.log("/&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/");
}

function accesDirect(){

    var accDirectRondes = gestion.retourneAccesDirectRondes(infoTable.indexPartie, infoTable.noTable);
    var i = 0;
    var sHTML = '<div class="styled-select1 blue semi-square">'+
        '<select id="selectRonde" name="rondeAD">' +
        '<option value="0" disabled selected>Ronde</option>';
    for(i = 0; i < accDirectRondes.length; i++){
        sHTML += '<option value="'+ accDirectRondes[i] +'">'+ accDirectRondes[i] +'</option>';
    }
    sHTML += '</select></div>'+
        '<div id="dSelectPl" class="styled-select1 grey semi-square">'+
        '<select id="selectPlanchette" name="planchetteAD" disabled>' +
        '<option value="0" disabled selected>Planchette</option>' +
        '</select></div>';
    return sHTML;

}

module.exports = router;