/**
 * Created by Phil on 2016-02-05.
 */
var express = require('express');
var router = express.Router();
var tableau = require('../node_modules/tableau/tableau');
//var mov = require('../node_modules/mouvement/mouvement');
var noms = require('../node_modules/nomJoueurs/nomJoueurs');

router.get('/', function(req, res, next) {
    res.render('feuilleNoms', { title: 'Noms des joueurs', feuille: creeFeuille(req.query.nbEquipes,
        req.query.nbPlanchettes, req.query.indexNbRondes, req.query.score)});
});

function creeFeuille(nbE, nbP, iNbR, s) {
    var feuille = '';
    var ligneJoueur1 = [];
    var ligneJoueur2 = [];
    var listeDesNoms = noms.listeNoms();
    var option = genereListe(listeDesNoms);
    tableau.creePartie(nbE, nbP, iNbR, s);
    tableau.creeTableau();
    feuille += '<form action="feuillePartie" method="get">';
    ligneJoueur1 = tableau.retourneTableauLigne(0);
    ligneJoueur2 = tableau.retourneTableauLigne(1);

    //console.log(ligneJoueur1);
    //console.log(ligneJoueur2);

    /*for(i = 0; i < nbE; i++){
        feuille += '<input type="text" name="name">';
    }
    feuille += '<br>';*/

    var nombreEq = parseInt(tableau.retourneNombreDEquipe());

    /*for(i = 0; i < nombreEq; i++){

        if((i == nombreEq-1) &&(tableau.retournePhantome() == true)){
            feuille += '<input type="text" name="name" class="champsNom" placeholder="&Eacute;quipe fant&ocirc;me">';
        }else{
            feuille += '<input type="text" name="name" class="champsNom" placeholder="&Eacute;quipe '+ String.fromCharCode(65 + i) +'">';
        }
    }
    /*feuille += '<br>';
    for(i = 0; i < nbE; i++){
        feuille += '<div class="divChampsNom">et</div>';
    }*/
    /*feuille += '<br>';
    for(i = 0; i < nombreEq; i++){

        if((i == nombreEq-1) &&(tableau.retournePhantome() == true)){
            feuille += '<input type="text" name="name" class="champsNom" placeholder="&Eacute;quipe fant&ocirc;me">';
        }else{
            feuille += '<input type="text" name="name" class="champsNom" placeholder="&Eacute;quipe '+ String.fromCharCode(65 + i) +'">';
        }
    }*/

    for(i = 0; i < nombreEq; i++){

        if((i == nombreEq-1) &&(tableau.retournePhantome() == true)){
            feuille += '<div class="divNomEquipes"> &Eacute;quipe '+ String.fromCharCode(65 + i) + ' (fant&ocirc;me)'+
                '<select class="selectNom" name="name" >'+ option +'</select>';
            feuille += '<select class="selectNom" name="name" >'+ option +'</select></div>';
            /*feuille += '<div class="divNomEquipes"> &Eacute;quipe fant&ocirc;me <input type="text" name="name" class="champsNom" value="Fant&ocirc;me">';
            feuille += '<input type="text" name="name" class="champsNom" value="Fant&ocirc;me"></div>';*/
        }else{
            //feuille += '<div class="divNomEquipes"> &Eacute;quipe '+ String.fromCharCode(65 + i) +'<input type="text" name="name" class="champsNom" placeholder="Nom 1"value="'+ String.fromCharCode(65 + i) +'">';
            //feuille += '<input type="text" name="name" class="champsNom" placeholder="Nom 2" value="'+ String.fromCharCode(65 + i) +'"></div>';
            feuille += '<div class="divNomEquipes"> &Eacute;quipe '+ String.fromCharCode(65 + i) +
                '<select class="selectNom" name="name" >'+ option +'</select>';
            feuille += '<select class="selectNom" name="name" >'+ option +'</select></div>';
        }
    }

    feuille += '<br><input type="submit" value="Ajouter" class="bouton"><br><a href="/nomsJoueurs">Ajouter un nom</a> </form>';

    return feuille;
}

function genereListe(liste){
    var j = 0;
    var taille = liste.length;
    var option = '';
    for(j = 0; j < taille; j++){
        option += '<option value="'+liste[j]+'">'+liste[j]+'</option>'
    }
    return option;
}

module.exports = router;