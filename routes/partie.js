/**
 * Created by Phil on 2016-02-10.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var xml2js = require('xml2js');
//var toA = require('../node_modules/toArray/toArray');
//var tableau = require('../node_modules/tableau/tableau');
//var varPl = require('../node_modules/planchette/planchette');
var gestion = require('../node_modules/gestionPartie/gestionPartie');

router.get('/', function(req, res, next) {
    var nom = req.query.nom;
    chargerFichier(nom, res);

});

function chargerFichier(nom, res){
    var sXML = fs.readFileSync('./fichiers/parties/'+nom,'utf-8');
    var indexPartie = -1;
    var parser = new xml2js.Parser();
    parser.parseString(sXML.substring(0, sXML.length), function (err, result) {
        indexPartie = gestion.chargePartie(nom, result);
        //toA.toArray(result);
        //console.log(indexPartie);
        res.render('partie', { title: 'Partie ' + nom, tables: listerTables(indexPartie)});
    });
}

function listerTables(indexPartie){
    var boutons = '';
    var tables = gestion.retourneTables(indexPartie);
    var fantome = parseInt(gestion.retourneFantome(indexPartie));
    var debut = 0;
    //console.log(fantome);
    if(fantome == 1){
        debut = 1;
    }
    for(i = debut; i < tables.length; i ++){
        //boutons = boutons + '<form action="/table" method="post"><input type="hidden" name="genere" value="1"><input type="hidden" name="ronde" value="1"><input type="hidden" name="table" value="'+(i+iPhantome)+'"><input type="submit" value="Table '+(i+iPhantome)+'" class="bouton"></form>';
        boutons = boutons + '<form action="/table" method="post"><input type="hidden" name="indexPartie" value="'+ indexPartie +'"><input type="hidden" name="table" value="'+tables[i].noTable+'"><input type="submit" value="Table '+tables[i].noTable+'" class="bouton"></form>';
    }
    boutons = boutons + '<br><a href="/resultats?indexPartie='+indexPartie+'" target="_blank">R&eacute;sultats</a>';
    return boutons;
}

module.exports = router;