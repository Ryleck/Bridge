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
    var listeArray = fs.readdirSync('./fichiers/');
    var liste = '';
    for (i = 0; i < listeArray.length; i++){
        liste = liste + '<div class="divListeElem">' + listeArray[i] +
        '<form action="partie" method="get" class="formOuvrir"><input name="nom" type="hidden" value="'+ listeArray[i] +'"><input type="submit" value="Ouvrir"></form>' +
        '</div>';
    }
    //console.log(liste);
    return liste;
}

module.exports = router;