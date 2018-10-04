/**
 * Created by Phil on 2016-01-31.
 */


var oneCDNU = [70, 90, 110, 130, 150, 170, 190];
var oneCDND = [140, 240, 340, 440, 540, 640, 740];
var oneCDNR = [230, 430, 630, 830, 1030, 1230, 1430];

var oneCDVU = [70, 90, 110, 130, 150, 170, 190];
var oneCDVD = [140, 340, 540, 740, 940, 1140, 1340];
var oneCDVR = [230, 630, 1030, 1430, 1830, 2230, 2630];

var oneHSNU = [80, 110, 140, 170, 200, 230, 260];
var oneHSND = [160, 260, 360, 460, 560, 660, 760];
var oneHSNR = [520, 720, 920, 1120, 1320, 1520, 1720];

var oneHSVU = [80, 110, 140, 170, 200, 230, 260];
var oneHSVD = [160, 360, 560, 760, 960, 1160, 1360];
var oneHSVR = [720, 1120, 1520, 1920, 2320, 2720, 3120];

var oneNTNU = [90, 120, 150, 180, 210, 240, 270];
var oneNTND = [180, 280, 380, 480, 580, 680, 780];
var oneNTNR = [560, 760, 960, 1160, 1360, 1560, 1760];

var oneNTVU = [90, 120, 150, 180, 210, 240, 270];
var oneNTVD = [180, 380, 580, 780, 980, 1180, 1380];
var oneNTVR = [760, 1160, 1560, 1960, 2360, 2760, 3160];

var twoCDNU = [90, 110, 130, 150, 170, 190];
var twoCDND = [180, 280, 380, 480, 580, 680];
var twoCDNR = [560, 760, 960, 1160, 1360, 1560];

var twoCDVU = [90, 110, 130, 150, 170, 190];
var twoCDVD = [180, 380, 580, 780, 980, 1180];
var twoCDVR = [760, 1160, 1560, 1960, 2360, 2760];

var twoHSNU = [110, 140, 170, 200, 230, 260];
var twoHSND = [470, 570, 670, 770, 870, 970];
var twoHSNR = [640, 840, 1040, 1240, 1440, 1640];

var twoHSVU = [110, 140, 170, 200, 230, 260];
var twoHSVD = [670, 870, 1070, 1270, 1470, 1670];
var twoHSVR = [840, 1240, 1640, 2040, 2440, 2840];

var twoNTNU = [120, 150, 180, 210, 240, 270];
var twoNTND = [490, 590, 690, 790, 890, 990];
var twoNTNR = [680, 880, 1080, 1280, 1480, 1680];

var twoNTVU = [120, 150, 180, 210, 240, 270];
var twoNTVD = [690, 890, 1090, 1290, 1490, 1690];
var twoNTVR = [880, 1280, 1680, 2080, 2480, 2880];

var threeCDNU = [110, 130, 150, 170, 190];
var threeCDND = [470, 570, 670, 770, 870];
var threeCDNR = [640, 840, 1040, 1240, 1440];

var threeCDVU = [110, 130, 150, 170, 190];
var threeCDVD = [670, 870, 1070, 1270, 1470];
var threeCDVR = [840, 1240, 1640, 2040, 2440];

var threeHSNU = [140, 170, 200, 230, 260];
var threeHSND = [530, 630, 730, 830, 930];
var threeHSNR = [760, 960, 1160, 1360, 1560];

var threeHSVU = [140, 170, 200, 230, 260];
var threeHSVD = [730, 930, 1130, 1330, 1530];
var threeHSVR = [960, 1360, 1760, 2160, 2560];

var threeNTNU = [400, 430, 460, 490, 520];
var threeNTND = [550, 650, 750, 850, 950];
var threeNTNR = [800, 1000, 1200, 1400, 1600];

var threeNTVU = [600, 630, 660, 690, 720];
var threeNTVD = [750, 950, 1150, 1350, 1550];
var threeNTVR = [1000, 1400, 1800, 2200, 2600];

var fourCDNU = [130, 150, 170, 190];
var fourCDND = [510, 610, 710, 810];
var fourCDNR = [720, 920, 1120, 1320];

var fourCDVU = [130, 150, 170, 190];
var fourCDVD = [710, 910, 1110, 1310];
var fourCDVR = [920, 1320, 1720, 2120];

var fourHSNU = [420, 450, 480, 510];
var fourHSND = [590, 690, 790, 890];
var fourHSNR = [880, 1080, 1280, 1480];

var fourHSVU = [620, 650, 680, 710];
var fourHSVD = [790, 990, 1190, 1390];
var fourHSVR = [1080, 1480, 1880, 2280];

var fourNTNU = [430, 460, 490, 520];
var fourNTND = [610, 710, 810, 910];
var fourNTNR = [920, 1120, 1320, 1520];

var fourNTVU = [630, 660, 690, 720];
var fourNTVD = [810, 1010, 1210, 1410];
var fourNTVR = [1120, 1520, 1920, 2320];

var fiveCDNU = [400, 420, 440];
var fiveCDND = [550, 650, 750];
var fiveCDNR = [800, 1000, 1200];

var fiveCDVU = [600, 620, 640];
var fiveCDVD = [750, 950, 1150];
var fiveCDVR = [1000, 1400, 1800];

var fiveHSNU = [450, 480, 510];
var fiveHSND = [650, 750, 850];
var fiveHSNR = [1000, 1200, 1400];

var fiveHSVU = [650, 680, 710];
var fiveHSVD = [850, 1050, 1250];
var fiveHSVR = [1200, 1600, 2000];

var fiveNTNU = [460, 490, 520];
var fiveNTND = [670, 770, 870];
var fiveNTNR = [1040, 1240, 1440];

var fiveNTVU = [660, 690, 720];
var fiveNTVD = [870, 1070, 1270];
var fiveNTVR = [1240, 1640, 2040];

var sixCDNU = [920, 940];
var sixCDND = [1090, 1190];
var sixCDNR = [1380, 1580];

var sixCDVU = [1370, 1390];
var sixCDVD = [1540, 1740];
var sixCDVR = [1830, 2230];

var sixHSNU = [980, 1010];
var sixHSND = [1210, 1310];
var sixHSNR = [1620, 1820];

var sixHSVU = [1430, 1460];
var sixHSVD = [1660, 1860];
var sixHSVR = [2070, 2470];

var sixNTNU = [990, 1020];
var sixNTND = [1230, 1330];
var sixNTNR = [1660, 1860];

var sixNTVU = [1440, 1470];
var sixNTVD = [1680, 1880];
var sixNTVR = [2110, 2510];

var sevenCDNU = [1440];
var sevenCDND = [1630];
var sevenCDNR = [1960];

var sevenCDVU = [2140];
var sevenCDVD = [2330];
var sevenCDVR = [2660];

var sevenHSNU = [1510];
var sevenHSND = [1770];
var sevenHSNR = [2240];

var sevenHSVU = [2210];
var sevenHSVD = [2470];
var sevenHSVR = [2940];

var sevenNTNU = [1520];
var sevenNTND = [1790];
var sevenNTNR = [2280];

var sevenNTVU = [2220];
var sevenNTVD = [2490];
var sevenNTVR = [2980];

var downNU = [50 ,100 ,150 ,200 ,250 ,300 ,350 ,400 ,450 ,500 ,550 ,600 ,650];
var downND = [100, 300, 500, 800, 1100, 1400, 1700, 2000, 2300, 2600, 2900, 3200, 3500];
var downNR = [200, 600, 1000, 1600, 2200, 2800, 3400, 4000, 4600, 5200, 5800, 6400, 7000];

var downVU = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300];
var downVD = [200, 500, 800, 1100, 1400, 1700, 2000, 2300, 2600, 2900, 3200, 3500, 3800];
var downVR = [400, 1000, 1600, 2200, 2800, 3400, 4000, 4600, 5200, 5800, 6400, 7000, 7600];

var downN = [];
var downV = [];

var down = [];

var cOne =[];
var cTwo =[];
var cThree =[];
var cFour =[];
var cFive =[];
var cSix =[];
var cSeven =[];

var cOneCD =[];
var cTwoCD =[];
var cThreeCD =[];
var cFourCD =[];
var cFiveCD =[];
var cSixCD =[];
var cSevenCD =[];

var cOneHS =[];
var cTwoHS =[];
var cThreeHS =[];
var cFourHS =[];
var cFiveHS =[];
var cSixHS =[];
var cSevenHS =[];

var cOneNT =[];
var cTwoNT =[];
var cThreeNT =[];
var cFourNT =[];
var cFiveNT =[];
var cSixNT =[];
var cSevenNT =[];

var cOneCDN =[];
var cTwoCDN =[];
var cThreeCDN =[];
var cFourCDN =[];
var cFiveCDN =[];
var cSixCDN =[];
var cSevenCDN =[];

var cOneHSN =[];
var cTwoHSN =[];
var cThreeHSN =[];
var cFourHSN =[];
var cFiveHSN =[];
var cSixHSN =[];
var cSevenHSN =[];

var cOneNTN =[];
var cTwoNTN =[];
var cThreeNTN =[];
var cFourNTN =[];
var cFiveNTN =[];
var cSixNTN =[];
var cSevenNTN =[];

var cOneCDV =[];
var cTwoCDV =[];
var cThreeCDV =[];
var cFourCDV =[];
var cFiveCDV =[];
var cSixCDV =[];
var cSevenCDV =[];

var cOneHSV =[];
var cTwoHSV =[];
var cThreeHSV =[];
var cFourHSV =[];
var cFiveHSV =[];
var cSixHSV =[];
var cSevenHSV =[];

var cOneNTV =[];
var cTwoNTV =[];
var cThreeNTV =[];
var cFourNTV =[];
var cFiveNTV =[];
var cSixNTV =[];
var cSevenNTV =[];

var contract = [];

var scoreTable =[];

var varActiveEntame = true;

function initTableScore(){
    downN.push(downNU, downND, downNR);

    downV.push(downVU, downVD, downVR);

    down.push(downN, downV);

    cOneCDN.push(oneCDNU, oneCDND, oneCDNR);
    cTwoCDN.push(twoCDNU, twoCDND, twoCDNR);
    cThreeCDN.push(threeCDNU, threeCDND, threeCDNR);
    cFourCDN.push(fourCDNU, fourCDND, fourCDNR);
    cFiveCDN.push(fiveCDNU, fiveCDND, fiveCDNR);
    cSixCDN.push(sixCDNU, sixCDND, sixCDNR);
    cSevenCDN.push(sevenCDNU, sevenCDND, sevenCDNR);

    cOneHSN.push(oneHSNU, oneHSND, oneHSNR);
    cTwoHSN.push(twoHSNU, twoHSND, twoHSNR);
    cThreeHSN.push(threeHSNU, threeHSND, threeHSNR);
    cFourHSN.push(fourHSNU, fourHSND, fourHSNR);
    cFiveHSN.push(fiveHSNU, fiveHSND, fiveHSNR);
    cSixHSN.push(sixHSNU, sixHSND, sixHSNR);
    cSevenHSN.push(sevenHSNU, sevenHSND, sevenHSNR);

    cOneNTN.push(oneNTNU, oneNTND, oneNTNR);
    cTwoNTN.push(twoNTNU, twoNTND, twoNTNR);
    cThreeNTN.push(threeNTNU, threeNTND, threeNTNR);
    cFourNTN.push(fourNTNU, fourNTND, fourNTNR);
    cFiveNTN.push(fiveNTNU, fiveNTND, fiveNTNR);
    cSixNTN.push(sixNTNU, sixNTND, sixNTNR);
    cSevenNTN.push(sevenNTNU, sevenNTND, sevenNTNR);

    cOneCDV.push(oneCDVU, oneCDVD, oneCDVR);
    cTwoCDV.push(twoCDVU, twoCDVD, twoCDVR);
    cThreeCDV.push(threeCDVU, threeCDVD, threeCDVR);
    cFourCDV.push(fourCDVU, fourCDVD, fourCDVR);
    cFiveCDV.push(fiveCDVU, fiveCDVD, fiveCDVR);
    cSixCDV.push(sixCDVU, sixCDVD, sixCDVR);
    cSevenCDV.push(sevenCDVU, sevenCDVD, sevenCDVR);

    cOneHSV.push(oneHSVU, oneHSVD, oneHSVR);
    cTwoHSV.push(twoHSVU, twoHSVD, twoHSVR);
    cThreeHSV.push(threeHSVU, threeHSVD, threeHSVR);
    cFourHSV.push(fourHSVU, fourHSVD, fourHSVR);
    cFiveHSV.push(fiveHSVU, fiveHSVD, fiveHSVR);
    cSixHSV.push(sixHSVU, sixHSVD, sixHSVR);
    cSevenHSV.push(sevenHSVU, sevenHSVD, sevenHSVR);

    cOneNTV.push(oneNTVU, oneNTVD, oneNTVR);
    cTwoNTV.push(twoNTVU, twoNTVD, twoNTVR);
    cThreeNTV.push(threeNTVU, threeNTVD, threeNTVR);
    cFourNTV.push(fourNTVU, fourNTVD, fourNTVR);
    cFiveNTV.push(fiveNTVU, fiveNTVD, fiveNTVR);
    cSixNTV.push(sixNTVU, sixNTVD, sixNTVR);
    cSevenNTV.push(sevenNTVU, sevenNTVD, sevenNTVR);

    cOneCD.push(cOneCDN, cOneCDV);
    cTwoCD.push(cTwoCDN, cTwoCDV);
    cThreeCD.push(cThreeCDN, cThreeCDV);
    cFourCD.push(cFourCDN, cFourCDV);
    cFiveCD.push(cFiveCDN, cFiveCDV);
    cSixCD.push(cSixCDN, cSixCDV);
    cSevenCD.push(cSevenCDN, cSevenCDV);

    cOneHS.push(cOneHSN, cOneHSV);
    cTwoHS.push(cTwoHSN, cTwoHSV);
    cThreeHS.push(cThreeHSN, cThreeHSV);
    cFourHS.push(cFourHSN, cFourHSV);
    cFiveHS.push(cFiveHSN, cFiveHSV);
    cSixHS.push(cSixHSN, cSixHSV);
    cSevenHS.push(cSevenHSN, cSevenHSV);

    cOneNT.push(cOneNTN, cOneNTV);
    cTwoNT.push(cTwoNTN, cTwoNTV);
    cThreeNT.push(cThreeNTN, cThreeNTV);
    cFourNT.push(cFourNTN, cFourNTV);
    cFiveNT.push(cFiveNTN, cFiveNTV);
    cSixNT.push(cSixNTN, cSixNTV);
    cSevenNT.push(cSevenNTN, cSevenNTV);

    cOne.push(cOneCD, cOneHS, cOneNT);
    cTwo.push(cTwoCD, cTwoHS, cTwoNT);
    cThree.push(cThreeCD, cThreeHS, cThreeNT);
    cFour.push(cFourCD, cFourHS, cFourNT);
    cFive.push(cFiveCD, cFiveHS, cFiveNT);
    cSix.push(cSixCD, cSixHS, cSixNT);
    cSeven.push(cSevenCD, cSevenHS, cSevenNT);

    contract.push(cOne, cTwo, cThree, cFour, cFive, cSix, cSeven);

    scoreTable.push(contract, down);
}

function determineSigne(v){
    switch(v){
        case '2':
            return '+';
        case '3':
            return '-';
        default :
            return '=';
    }

}

function calcule(){

    var nbLeves = parseInt($('input[name="nbLeves"]:checked').val()) || 1;
    var cou = parseInt($('input[name="couleur"]:checked').val());
    var contre = $('input[name="contre"]:checked').val();
    var par = $('input[name="par"]:checked').val();
    //var faitSigne = determineSigne($('input[name="faitSigne"]:checked').val());
    var fait = $('input[name="fait"]:checked').val();

    var resultat = parseInt(fait)-(parseInt(nbLeves)+6);
    /*if(faitSigne != '=') {
        resultat = parseInt(faitSigne + fait);
    }*/

    //console.log(nbLeves + ' ' + cou + ' ' + contre + ' ' + par + ' ' + resultat);

/*
    var r = document.getElementById('resultat'+pl.toString());
    var resultat = parseInt(r.value);
    var nbl = document.getElementById('nbLeves'+pl.toString());
    var nbLeves = parseInt(nbl.value);
    var cr = document.getElementById('contre'+pl.toString());
    var contre = parseInt(cr.value);
    var p = document.getElementById('par' + pl.toString());
    var par = p.value;*/
    var pts1;
    var pts2;
    var champ1 = document.getElementById('p'+tranformeParInverse(par));
    var champ2 = document.getElementById('p'+tranformePar(par));
    var span1 = document.getElementById('spanP'+tranformeParInverse(par));
    var span2 = document.getElementById('spanP'+tranformePar(par));
    initTableScore();
    /*if (resultat > 0) {
        //console.log("test");
        enableRadio(6 - (nbLeves - 1));
    }*/
    //console.log(condition.length);

    if(conditionRespecteContrat()){
        //console.log("Calcule");
        $('#sousContraResume').html(returnContrat());
        //console.log($('.divSousSectionResultat').at);
        if(varActiveEntame == true) {
            activeEntame();
            varActiveEntame = false;
        }
        if (resultat >= 0) {
            //console.log("+++++");
            pts2 = scoreTable[0][nbLeves - 1][couleur(cou)][vulnerabilite(par)][contre - 1][resultat];
            pts1 = 0;
        }else {
            //console.log((-resultat)-1);
            pts1 = scoreTable[1][vulnerabilite(par)][contre - 1][(-resultat)-1];
            pts2 = 0;
        }
        champ1.value = pts1;
        span1.innerHTML = pts1;
        champ2.value = pts2;
        span2.innerHTML = pts2;
    }

    //console.log(pts);
    //champ1.disabled = false;
    //champ2.disabled = false;


}

function conditionRespecteContrat(){
    var l = 3;
    var i = 0;
    for (i = 0; i < l; i++){
        if(condition[i] != 1){
            return false;
        }
    }
    return true;
}

function conditionRespecteEntame(){
    var l = 5;
    var i = 0;
    for (i = 0; i < l; i++){
        if(condition[i] != 1){
            return false;
        }
    }
    return true;
}

/*function resul(r){
    if (r <= 7){
        return(7 - r);
    }else{
        return((r - 7) - 1);
    }
}*/

function couleur(couleur){

    switch (couleur) {
        case 1 :
        case 2 :
            return 0;
        case 3 :
        case 4 :
            return 1;
        case 5 :
            return 2;
    }
}

function vulnerabilite(par){

    if (estVulnerable(par)){
        return 1;
    }else{
        return 0;
    }
}



function estVulnerable(par) {
    var vul = document.getElementsByClassName('spanEqVul');


    for (i = 0; i < vul.length; i++) {
        if (vul[i].id == 's'+tranformePar(par)) {
            return true;
        }

    }
    return false;
}

function tranformePar(v){
    switch (v){
        case '1':
        case '3':
            return 'NS';
        case '2':
        case '4':
            return 'EO';
    }
}

function tranformeParInverse(v){
    switch (v){
        case '1':
        case '3':
            return 'EO';
        case '2':
        case '4':
            return 'NS';
    }
}