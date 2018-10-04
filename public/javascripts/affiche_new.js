/**
 * Created by Phil on 2016-11-13.
 */
var condition = [0, 0, 0, 0, 0, 0];

function afficheAD(){
    effaceSection();

    $("#divEnteteAD").removeClass("divEnteteUnSelect").addClass("divEnteteSelect");
    $("#divSectionAD").removeClass("divSectionUnSel").addClass("divSectionSel").children(".divSousSection").removeClass("divSousSectionUnSel").addClass("divSousSectionSel");

}

function afficheContrat(){
    effaceSection();
    $(".divPasse").show();
    $("#divEnteteContrat").removeClass("divEnteteUnSelect").addClass("divEnteteSelect");
    $("#divSectionContrat").removeClass("divSectionUnSel").addClass("divSectionSel").children(".divSousSection").removeClass("divSousSectionUnSel").addClass("divSousSectionSel");

}

function afficheEntame(){
    var classes = document.getElementById("divEnteteEntame").className;

    if(classes !== "divEntete divEnteteDisSelect"){
        effaceSection();
        $("#divEnteteEntame").removeClass("divEnteteUnSelect").addClass("divEnteteSelect");
        $("#divSectionEntame").removeClass("divSectionUnSel").addClass("divSectionSel").children(".divSousSection").removeClass("divSousSectionUnSel").addClass("divSousSectionSel");

    }

}

function afficheResultat(){
    var classes = document.getElementById("divEnteteResultat").className;

    if(classes !== "divEntete divEnteteDisSelect") {
        effaceSection();
        $("#divEnteteResultat").removeClass("divEnteteUnSelect").addClass("divEnteteSelect");
        $("#divSectionResultat").removeClass("divSectionUnSel").addClass("divSectionSel").children(".divSousSection").removeClass("divSousSectionUnSel").addClass("divSousSectionSel");

    }
    $("#contratResume").show();
}

function effaceSection(){
    $(".divPasse").hide();
    $("#contratResume").hide();
    $(".divEnteteSelect").removeClass("divEnteteSelect").addClass("divEnteteUnSelect");
    $(".divSectionSel").removeClass("divSectionSel").addClass("divSectionUnSel").children(".divSousSection").removeClass("divSousSectionSel").addClass("divSousSectionUnSel");

}

function expandRonde(elem){
    var jqueryId = $(".divAccesRondes");
    var jqueryId2 = $(".divAccesRondesSel");
    var nbPlanchette = parseInt(jqueryId[0].children.length)-1;
    var hauteur = ((nbPlanchette*41)+35)+((nbPlanchette-1)*3);
    //var hauteurFin
    //console.log(jqueryId[0].children.length);
    //console.log(id.id);
    if(jqueryId2.length > 0){
        if (jqueryId2[0].id != elem.id){
            jqueryId2.removeClass("divAccesRondesSel").animate({height: '28px'}, 1000);
            $(elem).addClass("divAccesRondesSel").animate({height: hauteur + 'px'}, 1000);
        }
    }else{
        //console.log(elem);
        $(elem).animate({height: hauteur + 'px'}, 1000);
    }
}

function selLevees(id){
    var i;
    //selFaitSigne('radioEq');

    //document.getElementById('radioEq').checked = true;
    //selFaitSigne(document.getElementById('radioEqLabel'));

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
    document.getElementById("divSousSectionEntame").className = "divSousSection divSousSectionSel divSectionMedia";
    width = $( document ).width();

    if(parseInt(width) <= 1160) {
        $("html, body").animate({
            scrollTop: $("#divSousSectionEntame").offset().top
        }, 2000);
    }
}

function activeResultat(){
    document.getElementById("divEnteteResultat").className = "divEntete divEnteteUnSelect";
    document.getElementById("divSousSectionResultat").className = "divSousSection divSousSectionSel divSectionMedia";
    width = $( document ).width();

    if(parseInt(width) <= 1160) {
        $("html, body").animate({
            scrollTop: $("#divSousSectionResultat").offset().top
        }, 2000);
    }
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
    //var signe = id.innerHTML;
    //console.log($(id).children("labelFaitDisplay")[0].htmlFor);
    var radio = "#"+$(id).children(".labelFaitDisplay")[0].htmlFor;
    //id.stopPropagation();
    resetLabelFait();
    $(id).children(".labelFaitDisplay")[0].className = "label labelFaitSel labelFaitDisplay";

    $(radio).prop('checked', true);
    cond(5);
}

function selectFait(){
    var contra = parseInt($(".radioScore:checked")[0].value)+6;
    var radio = "#radioFait"+contra;
    var div = "#divFait"+contra;
    var label = "#labelFait"+contra;
    var moins = contra;
    var plus = 13 - contra;
    var i = 0;
    var arrayJQLabelFait = $(".labelFait");


    var elem = document.getElementsByClassName("divFaitSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "divFait";
    }

    resetLabelFait();

    $(radio).prop('checked', true);
    $(div).addClass("divFaitSel");
    $(label).removeClass("labelFaitUnSel").addClass("labelFaitSel");

    for(i = 0; i < moins; i++){
        arrayJQLabelFait.get(i).innerHTML = "-"+(contra-i);
    }
    arrayJQLabelFait.get(contra).innerHTML = "=";
    for(i = 1; i <= plus; i++){
        arrayJQLabelFait.get(contra+i).innerHTML = "+"+i;
    }
    //console.log(plus);
}

function resetLabelFait(){
    var i;

    var elem = document.getElementsByClassName("labelFaitSel");
    for(i = 0; i < elem.length; i++){
        elem[i].className = "label labelFaitUnSel labelFaitDisplay";
    }
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