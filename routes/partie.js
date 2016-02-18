/**
 * Created by Phil on 2016-02-10.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var xml2js = require('xml2js');
var toA = require('../node_modules/toArray/toArray');
var tableau = require('../node_modules/tableau/tableau');-

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

    if(tableau.retournePhantome() == true){
        nbE = nbE - 1;
    }

    nbT = (parseInt(nbE)/2);

    for(i = 0; i < Math.floor(nbT); i ++){
        boutons = boutons + '<form action="table" method="get"><input type="hidden" name="table" value="'+(i+1)+'"><input type="submit" value="Table '+(i+1)+'"></form>';
    }
    return boutons;
}

module.exports = router;