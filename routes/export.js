/**
 * Created by Phil on 2018-03-01.
 */
var express = require('express');
var router = express.Router();
var gestion = require('../node_modules/gestionPartie/gestionPartie');
var fs = require('fs');

router.post('/', function(req, res) {
    console.log(req.body.indexPartie);
    var xmlResult = "";
    var infoTable = {
        indexPartie : req.body.indexPartie
    };
    var nbE = gestion.retourneNbEquipes(infoTable);
    var nbP = gestion.retourneNbPlanchettes(infoTable);
    var i = 0;
    var j = 0;
    var total = 0;
    var score = 0;
    var nom1 = "";
    var nom2 = "";
    var tableauNomTotal = [
        ["Christiane",0],
        ["Claire",0],
        ["Claude",0],
        ["Danielle",0],
        ["France",0],
        ["Gilles",0],
        ["Jacqueline",0],
        ["Lise",0],
        ["Michel",0],
        ["Phil.-Alex.",0],
        ["PierreB",0],
        ["PierreR",0],
        ["Chantal",0]
    ];
    //console.log(tableauNomTotal);
    for(i = 0; i < nbE; i++) {
        nom1 = gestion.retourneNomsEquipe(infoTable, i)[0];
        nom2 = gestion.retourneNomsEquipe(infoTable, i)[1];
        //console.log(i);
        for(j = 0; j < nbP; j++) {
            score = gestion.retourneScoreEquipe(infoTable, i, j);
            total += score;

        }
        for(j = 0; j < tableauNomTotal.length; j++) {
            if(nom1.match(tableauNomTotal[j][0])){
                //console.log(nom1.match(tableauNomTotal[j][0]));
                tableauNomTotal[j][1] = total;
            }
            if(nom2.match(tableauNomTotal[j][0])){
                //console.log(nom2.match(tableauNomTotal[j][0]));
                tableauNomTotal[j][1] = total;
            }
        }
        total = 0;

    }
    //xmlResult = "<total>";
    for(j = 0; j < tableauNomTotal.length; j++) {
        //xmlResult += "<"+ tableauNomTotal[j][0] +">"+ tableauNomTotal[j][1] +"</"+ tableauNomTotal[j][0] +">";
        xmlResult += tableauNomTotal[j][1].toString().replace(".",",") +"\n";
    }
    //xmlResult += "</total>";
    /*fs.writeFile('./fichiers/resultats parties/'+gestion.retourneNomPartie(infoTable.indexPartie)+'_resultats.xml', xmlResult, 'utf8', function (err) {
        if (err) throw err;
        //console.log('SSSSSSSSSSSSSSS Saved2! SSSSSSSSSSSSSSSS');
    });*/
    fs.writeFile('./fichiers/resultats parties/'+gestion.retourneNomPartie(infoTable.indexPartie)+'_resultats.txt', xmlResult, 'utf8', function (err) {
        if (err) throw err;
        //console.log('SSSSSSSSSSSSSSS Saved2! SSSSSSSSSSSSSSSS');
    });
    res.send("Ok");
});

module.exports = router;