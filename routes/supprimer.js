/**
 * Created by Phil on 2016-07-27.
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {

    //console.log(req.query.nom);
    /* var varPresentation = presentation.getVar(req.body.index);*/
     deleteFile(req.query.nom);
     res.type('html');
     res.send(creeListe());
});

function deleteFile(fileName){
    var userDir = './fichiers/parties/';
    //console.log(userDir);
    //console.log(fileName);
    var path = userDir + fileName;
    //console.log(path);
    try {
        fs.unlinkSync(path);
        /*if(varPresentation.varNomImage != '') {
         deletePhoto(varPresentation.varNomImage);
         }*/
    }catch(e){}
}

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
            '<button type="button" id="iButtonDelete" name="'+ listeArray[i] +'" class="boutonListeSupp">X</button>' +
            '</div>';
    }
    //console.log(liste);
    return liste;
}
/*
function creeListe(){
    var listeArray = fs.readdirSync('./fichiers/');
    var liste = '';
    for (i = 0; i < listeArray.length; i++){
        liste = liste + '<div class="divListeElem">' + listeArray[i] +
            '<form action="partie" method="get" class="formOuvrir"><input name="nom" type="hidden" value="'+ listeArray[i] +'"><input type="submit" value="Ouvrir" class="boutonListe"></form>' +
            '<button type="button" id="iButtonDelete" name="'+ listeArray[i] +'" class="boutonListe">Supprimer</button>' +
            '</div>';
    }
    //console.log(liste);
    return liste;
}*/

module.exports = router;