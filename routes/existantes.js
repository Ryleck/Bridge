/**
 * Created by Phil on 2016-02-10.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
    res.render('existantes', { title: 'Liste des parties existantes', liste:creeListe()});
});

function creeListe(){
    var dir = './fichiers/parties/';
    var listeArray = fs.readdirSync(dir);
    listeArray.sort(function(a, b) {
        return fs.statSync(dir + a).mtime.getTime() -
            fs.statSync(dir + b).mtime.getTime();
    });
    listeArray.reverse();
    var liste = '';
    for (i = 0; i < listeArray.length; i++){
        liste = liste + '<div class="divListeElem"><div class="nomFichier">' + listeArray[i] +
        '</div><form action="partie" method="get" class="formOuvrir"><input name="nom" type="hidden" value="'+ listeArray[i] +'"><input type="submit" value="Ouvrir" class="boutonListe"></form>' +
        //'<button type="button" id="iButtonResultat" name="'+ listeArray[i] +'" class="boutonListe">R&eacute;sultat</button>' +
        '<button type="button" id="iButtonDelete" name="'+ listeArray[i] +'" class="boutonListeSupp">X</button>' +
        '</div>';
    }
    //console.log(liste);
    return liste;
}

module.exports = router;