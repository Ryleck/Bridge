/**
 * Created by Phil on 2016-02-23.
 */
var express = require('express');
var router = express.Router();
var gestion = require('../node_modules/gestionPartie/gestionPartie');
var result = require('../node_modules/resultatsTableau/resultatsTableau');
var table = require('../node_modules/table/table');

/*var table.infoTable() = {
    indexPartie : -1,
    noTable : 0,
    noRonde : 0,
    noPlanchette : 0,
    eNS : "",
    eEO : "",
    nomsNS : [],
    nomsEO : [],
    vul : 0
};*/

router.post('/', function(req, res) {

    //console.log(req.body);

    if ((typeof req.body.pNS != 'undefined') && (typeof req.body.rondeAD == 'undefined')) {

        //console.log("EEEEEEEEE");
        /*console.log("\n\rInscrit points");
        console.log(table.infoTable());
        console.log("**************");
        console.log(req.body);
        console.log("**************\n\r");*/

        table.inscritsPoints(req.body);
        table.chargeInfoTable(req, true);

        //console.log("\n\rInscrit points");
        if (gestion.tableTermine(table.infoTable().indexPartie, table.infoTable().noTable) == 1) {
            res.render('resultatsAjax', {
                nomsJoueurs: result.retourneNomsJoueurs(table.infoTable().indexPartie),
                indexPartieInput: table.indexPartieHtml(table.infoTable().indexPartie),
                rondesEtPlanchettes: table.rondesEtPlanchettes()
            });
        } else {
            res.set('Content-Type', 'text/html');
            res.send(table.divMainAjax());
        }
    } else if(req.body.accesDirect != undefined) {
        //console.log("ADADADADAD");
        table.chargeInfoTablePlID(req);
        //table.render(res);
        res.set('Content-Type', 'text/html');
        res.send(table.divMainAjax());
    } else {
        //console.log("ANANANANAN");
        table.chargeInfoTable(req, true);
        //table.chargeInfoTable(req, true);
        if (gestion.tableTermine(table.infoTable().indexPartie, table.infoTable().noTable) == 1) {
            res.render('resultats', {
                title: 'Resultats',
                nomsJoueurs: result.retourneNomsJoueurs(table.infoTable().indexPartie),
                indexPartieInput: table.indexPartieHtml(table.infoTable().indexPartie),
                rondesEtPlanchettes: table.rondesEtPlanchettes()
            });
        } else {
            if(typeof req.body.rondeAD == 'undefined') {
                //console.log("render");
                table.render(res);
            }else{
                res.send("Ok");
            }
        }

    }
    //}
});





/*function retourneNomsJoueurs(){
    var nbE = gestion.retourneNbEquipes(table.infoTable());
    var nbP = gestion.retourneNbPlanchettes(table.infoTable());
    var i = 0;
    var j = 0;
    var total = 0;
    var htmlString = '';
    for(i = 0; i < nbE; i++) {
        htmlString += '<div><div class="dNomsResultat">'
            +'<span>'+gestion.retourneNomsEquipe(table.infoTable(), i)[0]+' et '
            +gestion.retourneNomsEquipe(table.infoTable(), i)[1]+'</span>'
            + '</div>';
        for(j = 0; j < nbP; j++) {
            total += gestion.retourneScoreEquipe(table.infoTable(), i, j);
            htmlString += '<div class="dPointage">' +
                '<span>' + gestion.retourneScoreEquipe(table.infoTable(), i, j) + '</span>'+
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




/*function chargeInfoTable(req, affiche){

    console.log("/&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/");
    console.log("/********** Affiche " + affiche + " ************///");

    /*infoTable.indexPartie = parseInt(req.body.indexPartie);
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
}*/



module.exports = router;