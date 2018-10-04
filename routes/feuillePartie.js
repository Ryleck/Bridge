/**
 * Created by Phil on 2016-02-03.
 */
var express = require('express');
var router = express.Router();
var tableau = require('../node_modules/tableau/tableau');
var lettre = require('../node_modules/lettre-equipe/lettreEquipe');


router.get('/', function(req, res, next) {
    console.log(req.query);
    res.render('feuillePartie', { title: 'Feuille de partie', feuille: creeFeuille(req)});
});

function creeFeuille(req){
    var feuille = '';
    var ligneJoueur1 = tableau.retourneTableauLigne(0);
    var ligneJoueur2 = tableau.retourneTableauLigne(1);
    var nbE = parseInt(tableau.retourneNombreDEquipe());

    //console.log(req.query);

    //feuille += '<button type="button" onclick="enregistrer()" class="bouton">Enregistrer</button><br><br>';
    //if(tableau.retournePhantome() == false) {
        for (i = 1; i < ligneJoueur1.length; i++) {
            ligneJoueur1[i] = req.query.name[i+(i-2)];
            ligneJoueur2[i] = req.query.name[i+(i-1)];
        }
   /* }else{
        for(i = 1; i < nbE; i++){
            ligneJoueur1[i] = req.query.name[i-1];
            ligneJoueur2[i] = req.query.name[i+nbE-2];
        }
    }*/
    tableau.ecrireTableauLigne(0, ligneJoueur1);
    tableau.ecrireTableauLigne(1, ligneJoueur2);

    //console.log('partie');
    //console.log(tableau.retourneTableau());
    //console.log(pParR);

    if(tableau.retourneTypeScore().localeCompare('top') == 0){
        feuille += '<table class="tableFeuille">';
        for(i = 0; i <= parseInt(tableau.retourneNombrePlanchette())+2; i++) {
            feuille += '<tr>';
            for (j = 0; j <= nbE; j++) {
                if((i == 0) && ( j == 0)){
                    feuille += '<td id="contrat" rowspan="2">Noms</td>';
                    j++;
                }
                if((i == 1) && ( j == 0)){
                    j++;
                }
                feuille += '<td id="contrat">'+valeurCellule(i, j, nbE)+'</td>';
            }
            feuille += '</tr>';
        }
        feuille += '</table>';
    }else {
        feuille = 'Points IMP';
    }
    return feuille;
}

function valeurCellule(i, j, nbE){
    var texteCellule = '';
    if((i == 2) && ( j == 0)){
        texteCellule = 'Jeu';
    }/*else if((i > 2) && ( j == 0)){
        texteCellule = (i-2).toString();
    }else if((i == 2) && ( j > 0)){
        texteCellule = 'Équipe ' + lettre.retourneLettre(j-1);
    }*/else{
        texteCellule = tableau.retourneTableauPosition(i, j);
    }
    /*if((i == 0) && ( j > 0)){
        texteCellule = tableau.retourneTableauPosition(i, j);
    }
    if((i == 1) && ( j > 0)){
        texteCellule = tableau.retourneTableauPosition(i, j);
    }
    if((tableau.retournePhantome() == true) && (i > 2) && ( j == nbE)){
        texteCellule = tableau.retourneTableauPosition(i, j);
    }*/
    return texteCellule;
}

module.exports = router;