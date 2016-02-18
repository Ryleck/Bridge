/**
 * Created by Phil on 2016-02-02.
 */

var nbR = 0;

function calculeNbPlanchettes() {
    var nbP = document.getElementById('selectNbPlanchettes');
    var listeNbPlanchettes = '';
    nbP.disabled = false;
    listeNbPlanchettes = lister();
    nbP.innerHTML = listeNbPlanchettes;
    //calculeNbRondes();
}

function nbPlanchettesPRds(){
    var nbPPR = 0;
    var nbP = document.getElementById('nbPls').value;

    nbPPR = nbP/nbR;
    document.getElementById('nbRondes').value = nbR + ' rondes' + '; ' + nbPPR + ' Planchettes/Rondes';
}

function calculeNbRondes(){
    var nbE = document.getElementById('selectNbEquipes');
    var nbEquipes = parseInt(nbE.options[nbE.selectedIndex].value);
    if (isOdd(nbEquipes)){
        nbR = nbEquipes;
    }else{
        nbR = nbEquipes - 1;
    }
    //console.log(nbR);
    document.getElementById('nbPls').disabled = false;
    document.getElementById('nbRondes').value = nbR + ' rondes';
}

function isOdd(num) { return num % 2;}

function lister(){
    var nbE = document.getElementById('selectNbEquipes');
    var nbEquipes = parseInt(nbE.options[nbE.selectedIndex].value)-1;
    var retour = '';
    for(i = 2; i <= 4; i++){
        retour += '<option value="' + i * nbEquipes +'">' + i * nbEquipes +'</option>';
    }
    return retour;
}