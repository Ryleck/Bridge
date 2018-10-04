/**
 * Created by Phil on 2016-02-09.
 */
var express = require('express');
var router = express.Router();
var toXML = require('../node_modules/toXML/toXML');
var fs = require('fs');

router.get('/', function(req, res, next) {
    sauvgarder(req.query.nomFichier);
    res.render('index', { title: 'Soir&eacute;e de bridge' , name:'soir&eacute;e de bridge'});
});

function sauvgarder(nom){

    var sXML = toXML.toXMLString();
    fs.writeFile("./fichiers/parties/"+nom+".xml", sXML, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("Fichier sauvgardé!");
    });
}

module.exports = router;