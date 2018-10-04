/**
 * Created by Phil on 2017-10-13.
 */
var express = require('express');
var router = express.Router();
var noms = require('../node_modules/nomJoueurs/nomJoueurs');

router.get('/', function(req, res, next) {
    res.render('nomsJoueurs', { title: 'Liste de noms des joueurs', liste: genereListe()});
});

function genereListe(){
    var listeHtml = '';
    var liste = noms.listeNoms();
    var taille = liste.length;
    var nom = '';

    for(i = 0; i < taille; i++){

        nom = liste[i];

        listeHtml += '<div class="divNom">'+nom+'</div>';
    }
    return listeHtml;
}

module.exports = router;