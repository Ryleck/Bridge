/**
 * Created by Phil on 2016-11-13.
 */
var condition = [0, 0, 0, 0, 0, 0];

function afficheAD(){
    effaceSection();

    $("#divEnteteAD").removeClass("divEnteteUnSelect").addClass("divEnteteSelect");
    $("#divSectionAD").removeClass("divSectionUnSel").addClass("divSectionSel").children("div").removeClass("divSousSectionUnSel").addClass("divSousSectionSel");

}

function afficheContrat(){
    effaceSection();
    $("#divEnteteContrat").removeClass("divEnteteUnSelect").addClass("divEnteteSelect");
    $("#divSectionContrat").removeClass("divSectionUnSel").addClass("divSectionSel").children("div").removeClass("divSousSectionUnSel").addClass("divSousSectionSel");

}

function afficheEntame(){
    var classes = document.getElementById("divEnteteEntame").className;

    if(classes !== "divEntete divEnteteDisSelect"){
        effaceSection();
        $("#divEnteteEntame").removeClass("divEnteteUnSelect").addClass("divEnteteSelect");
        $("#divSectionEntame").removeClass("divSectionUnSel").addClass("divSectionSel").children("div").removeClass("divSousSectionUnSel").addClass("divSousSectionSel");

    }

}

function afficheResultat(){
    var classes = document.getElementById("divEnteteResultat").className;

    if(classes !== "divEntete divEnteteDisSelect") {
        effaceSection();
        $("#divEnteteResultat").removeClass("divEnteteUnSelect").addClass("divEnteteSelect");
        $("#divSectionResultat").removeClass("divSectionUnSel").addClass("divSectionSel").children("div").removeClass("divSousSectionUnSel").addClass("divSousSectionSel");

    }

}

function effaceSection(){

    $(".divEnteteSelect").removeClass("divEnteteSelect").addClass("divEnteteUnSelect");
    $(".divSectionSel").removeClass("divSectionSel").addClass("divSectionUnSel").children("div").removeClass("divSousSectionSel").addClass("divSousSectionUnSel");

}

function selLevees(id){
    var i;
    //selFaitSigne('radioEq');

    document.getElementById('radioEq').checked = true;
    selFaitSigne(document.getElementById('radioEqLabel'));

    var elem = document.getElementsByClassName("labelScoreSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "label labelScoreUnSel";
    }
    id.className = "label labelScoreSel";
    cond(0);
}

function selContre(id){
    var i;
    var elem = document.getElementsByClassName("labelContreSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "label labelContreUnSel";
    }
    id.className = "label labelContreSel";
}

function selLeveesCoul(id){
    var i;
    var elem = document.getElementsByClassName("divCouleurConSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "divCouleur divCouleurConUnSel";
    }
    id.className = "divCouleur divCouleurConSel";
    cond(1);
}

function selPar(id){
    var i;
    var elem = document.getElementsByClassName("labelParSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "label labelParUnSel";
    }
    id.className = "label labelParSel";
    cond(2);
}

function selEntame(id){
    var i;
    var elem = document.getElementsByClassName("labelEntameSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "label labelEntameUnSel";
    }
    id.className = "label labelEntameSel";
    cond(3);
    if(conditionRespecteEntame()){
        activeResultat();
    }
}

function selEntameCouleur(id){
    var i;
    var elem = document.getElementsByClassName("divCouleurEntameSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "divCouleur divCouleurEntameUnSel";
    }
    id.className = "divCouleur divCouleurEntameSel";
    cond(4);
    if(conditionRespecteEntame()){
        activeResultat();
    }
}

function activeEntame(){
    document.getElementById("divEnteteEntame").className = "divEntete divEnteteUnSelect";
}

function activeResultat(){
    document.getElementById("divEnteteResultat").className = "divEntete divEnteteUnSelect";
}

function selFaitSigne(id){
    var i;
    //console.log(id);
    var signe = id.innerHTML;
    var nbLeves = parseInt($('input[name="nbLeves"]:checked').val()) || 1;
    //console.log(nbLeves);
    var elem = document.getElementsByClassName("labelFaitSigneSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "label labelFaitSigneUnSel";
    }
    id.className = "label labelFaitSigneSel";
    //cond(4);
    elem = document.getElementsByClassName("labelFaitSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "label labelFaitUnSel labelFaitDisplay";
    }
    $(".radioFait:checked").prop('checked', false);
    if(signe === "+"){
        enableRadio(6 - (nbLeves - 1));
    }else if((signe === "\u2212")){
        enableRadio(13);
    }else{

        //$('input[name="fait"]:checked').checked = false;
        enableRadio(0);
    }
}

function selFait(id){
    var i;
    var signe = id.innerHTML;
    //console.log(signe);
    var elem = document.getElementsByClassName("labelFaitSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "label labelFaitUnSel labelFaitDisplay";
    }
    id.className = "label labelFaitSel labelFaitDisplay";
    cond(5);
}

function enableRadio(f){
    var elem = document.getElementsByClassName("radioFait");
    var elem2 = document.getElementsByClassName("labelFaitDisplay");
    //console.log(elem.length);
    for(i = 0; i < elem.length; i++){
        elem[i].disabled = true;
        elem2[i].style.display = "none";
    }
    for(j = 0; j < f; j++){
        elem[j].disabled = false;
        elem2[j].style.display = "inline-block";
    }
}

function cond(i){

    condition[i] = 1;
    //console.log(condition);
}