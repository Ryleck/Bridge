/**
 * Created by Phil on 2016-06-05.
 */
/**
 * Created by Phil on 2016-02-03.
 */
var express = require('express');
var router = express.Router();
/*var tableau = require('../node_modules/tableau/tableau');
var varPl = require('../node_modules/planchette/planchette');*/
//var gestion = require('../node_modules/gestionPartie/gestionPartie');
var result = require('../node_modules/resultatsTableau/resultatsTableau');
var table = require('../node_modules/table/table');

router.get('/', function(req, res, next) {
    //console.log(req.query.indexPartie);
    res.render('resultats', { title: 'Resultats', indexPartieInput: table.indexPartieHtml(req.query.indexPartie), nomsJoueurs: result.retourneNomsJoueurs(req.query.indexPartie)});
});

/*function retourneNomsJoueurs(indexPartie){
    var infoTable = {
        indexPartie : indexPartie
    };
    var nbE = gestion.retourneNbEquipes(infoTable);
    var nbP = gestion.retourneNbPlanchettes(infoTable);
    var i = 0;
    var j = 0;
    var total = 0;
    var score = 0;
    var htmlString = '';
    var couleurSpan = '';
    for(i = 0; i < nbE; i++) {
        htmlString += '<div class="dResultEquipe"><div class="dNomsResultat">'
            +'<span>'+gestion.retourneNomsEquipe(infoTable, i)[0]+'<span class="spanBlue"> et </span>'
            +gestion.retourneNomsEquipe(infoTable, i)[1]+'</span>'
            + '</div>';
        for(j = 0; j < nbP; j++) {
            score = gestion.retourneScoreEquipe(infoTable, i, j);
            total += score;
            htmlString += '<div class="dPointage">';
                if(score == 0){
                    couleurSpan = "spanRed";
                }else{
                    couleurSpan = "spanBlue";
                }

            htmlString += '<span class="'+ couleurSpan +'">' + gestion.retourneScoreEquipe(infoTable, i, j) + '</span>'+
                '</div>'
        }
        htmlString += '<div class="dTotal">' +
            '<span>Total : ' + total + '</span>'+
            '</div></div>';
        total = 0;
        //htmlString += '</div>'
    }
    return htmlString;
    //console.log(nbE);
}
*/
function creeFeuilleRes(){

    /*var feuille = '';
    //var ligneJoueur1 = tableau.retourneTableauLigne(0);
    //var ligneJoueur2 = tableau.retourneTableauLigne(1);
    var nbE = parseInt(tableau.retourneNombreDEquipe());
    var totalEquipes = [];


    totalEquipes.push("Total");
    for (j = 1; j <= nbE; j++) {
        totalEquipes.push(0);
    }

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
                feuille += '<td id="contrat">'+valeurCelluleRes(i, j, nbE)+'</td>';
                if(( i > 2) && (j > 0)){
                    totalEquipes[j] = totalEquipes[j] + parseFloat(valeurCelluleRes(i, j, nbE));
                }
            }
            feuille += '</tr>';

        }
        feuille += '<tr>';
        for (j = 0; j <= nbE; j++) {
            feuille += '<td id="contrat">'+totalEquipes[j]+'</td>';
        }
        feuille += '</tr>';
        feuille += '</table>';
    }else {
        feuille = 'Points IMP';
    }
    return feuille;*/
}

function valeurCelluleRes(i, j, nbE){
    var texteCellule = '';
    if((i == 2) && ( j == 0)){
        texteCellule = 'Jeu';
    }else{
        texteCellule = tableau.retourneTableauPosition(i, j);
    }

    return texteCellule;
}

module.exports = router;