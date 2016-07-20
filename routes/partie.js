/**
 * Created by Phil on 2016-02-10.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var xml2js = require('xml2js');
var toA = require('../node_modules/toArray/toArray');
var tableau = require('../node_modules/tableau/tableau');
var varPl = require('../node_modules/planchette/planchette');

router.get('/', function(req, res, next) {
    var nom = req.query.nom;
    chargerFichier(nom, res);

});

function chargerFichier(nom, res){
    var sXML = fs.readFileSync('./fichiers/'+nom,'utf-8');

    var parser = new xml2js.Parser();
    parser.parseString(sXML.substring(0, sXML.length), function (err, result) {
        toA.toArray(result);
        res.render('partie', { title: 'Partie ' + nom, tables: listerTables()});
    });
}5

function listerTables(){
    var boutons = '';
    var nbE = tableau.retourneNombreDEquipe();
    var nbT = 0;
    var iPhantome = 1;

    if(tableau.retournePhantome() == true){
        nbE = nbE - 1;
        iPhantome = 2;
    }

    nbT = (parseInt(nbE)/2);

    varPl.initPartie();
    for(i = 0; i < Math.floor(nbT); i ++){
        boutons = boutons + '<form action="table" method="get"><input type="hidden" name="genere" value="1"><input type="hidden" name="ronde" value="1"><input type="hidden" name="table" value="'+(i+iPhantome)+'"><input type="submit" value="Table '+(i+1)+'"></form>';
        varPl.ajouteTable(i+1);
    }
    return boutons;
}

module.exports = router;