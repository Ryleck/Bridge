/**
 * Created by Phil on 2017-10-13.
 */
var express = require('express');
var router = express.Router();
var noms = require('../node_modules/nomJoueurs/nomJoueurs');


router.post('/',function(req, res){

    noms.ajouteNom(req.body.nom);
    res.type("html");

    res.send(genereListe());
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
