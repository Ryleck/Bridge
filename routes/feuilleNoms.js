/**
 * Created by Phil on 2016-02-05.
 */
var express = require('express');
var router = express.Router();
var tableau = require('../node_modules/tableau/tableau');

router.get('/', function(req, res, next) {
    res.render('feuilleNoms', { title: 'Noms des joueurs', feuille: creeFeuille(req.query.nbEquipes,
        req.query.nbPlanchettes, req.query.nbRondes, req.query.score)});
});

function creeFeuille(nbE, nbP, nbR, s) {
    var feuille = '';
    var ligneJoueur1 = [];
    var ligneJoueur2 = [];
    var pParR = nbP / nbR;
    tableau.creePartie(nbE, nbP, nbR, s);
    tableau.creeTableau();
    feuille += '<form action="feuillePartie" method="get">';
    ligneJoueur1 = tableau.retourneTableauLigne(0);
    ligneJoueur2 = tableau.retourneTableauLigne(1);

    console.log(ligneJoueur1);
    console.log(ligneJoueur2);

    for(i = 0; i < nbE; i++){
        feuille += '<input type="text" name="name" value="'+(parseInt(i)+1)+'">';
    }
    feuille += '<br>';
    for(i = 0; i < nbE; i++){
        feuille += '<input type="text" name="name" value="'+(parseInt(i)+parseInt(nbE)+1)+'">';
    }
    feuille += '<br><input type="submit" value="Ajouter"></form>';

    return feuille;
}

module.exports = router;