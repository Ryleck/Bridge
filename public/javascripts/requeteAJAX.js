/**
 * Created by Phil on 2017-03-30.
 */

var requeteAccDirectPlJouee;
var width = 0;
var height = 0;
/*$( document ).bind( 'mobileinit', function(){
    $.mobile.loader.prototype.options.disabled = true;
    $.mobile.ajaxEnabled=false;
});*/

$(document).ready(function(){

    width = $( document ).width();
    height = $( document ).height();




    $("#divResolution").text(width+" x "+height);

    $(document).on('change',".radioScore", function(){
        selectFait();
        calcule();
    });

    $(document).on('click',"#btnReqAJAX", function(){
        var req = $('#formPlanchette').serializeArray();
        $("#divVal").hide();
        //console.log("ajax");
        requete(req);
    });

    $(document).on('click','.inputPlanchettes', function(){
        console.log("inputPlanchette");
    });

    $(document).on('click',"#btnReqAnnuler", function(){
        $("#divScreen").hide();
        $("#divVal").hide();
        $("#divPasse").hide();
    });

    $(document).on('click',"#btnPasse",function(){
        resetForm();
        $("#divScreen").show();
        $("#divPasse").show();

    });

    $(document).on('click',"#btnCon",function(){
        if(initializeValidation() == true){
            $("#divScreen").show();
            $("#divVal").show();
        }

    });

    $(document).on('click',"#btnReqAJAXAccesDirect", function(){
        var req = $('#formPlanchette').serialize();
        //alert(req);

        $.ajax({
            'url': '/override',
            'type': 'POST',
            'data': req,
            'success': function(result){
                //process here
                //console.log($('#html').html());
                //$('#html').html(result);
                location.reload();
            }
        });
    });

    $(document).on('change',"#selectRonde", function(event){
        var req = $('#formPlanchette').serialize();
        //'{"iconselect":"'+selected+'"}'
        //console.log(req);

        $.ajax({
            'url': '/accDirectPlanchettes',
            'dataType': 'html',
            'type': 'POST',
            'data': req,
            'success': function(result){
                //process here
                $('#dSelectPl').removeClass('grey').addClass('blue');
                $('#btnReqAJAXAccesDirect').removeClass('btnAjaxDis').addClass('btnAjax').prop('disabled', false);
                $('#selectPlanchette').prop('disabled', false).children().each(function (){
                    if($(this).val() != 0){
                        $(this).remove();
                    }
                }).parent().append(result);
                //console.log(result);
                //$('#html').html(result);
                //location.reload();
            }
        });
        //console.log(event.currentTarget.value);
    });

    $(document).on('click', '.divAccPlan', function(event){
        var formID = event.target.getAttribute("data-form-id");
        var classList = event.currentTarget.classList;
        var planchetteJouee = false;
        var planchetteActive = false;
        var req = $('#'+formID).serialize();
        var i = 0;
        divAccesFerme();
        for(i = 0; i < classList.length; i++){
            if(classList[i] == "divAccesPlanFinie"){
                planchetteJouee = true;
            }
            if(classList[i] == "divAccesPlanActive"){
                planchetteActive = true;
            }
        }
        if(planchetteActive == false){
            if(planchetteJouee == false){
                requeteAccDirect(req);
            }
            else{
                requeteAccDirect(req);
                //fenetrePlanchetteJouee(req);
            }
        }

        //console.log(req);
    });

    $(document).on('click', '.divCouleurResult', function(event){

        var nbChild = event.currentTarget.parentNode.children.length;
        var noPartie = $("#divPartie").children().get(0).value;
        var i = 0;
        var reqJSON = "";
        //console.log(event.currentTarget.parentNode.children[0].innerText);
        //console.log(noPartie);
        //event.stopPropagation();
        //for(i = 0; i < nbChild; i++){
            //if(event.currentTarget.parentNode.children[i].className == 'divNoPl'){
                reqJSON = {noPlanchette:event.currentTarget.parentNode.children[0].innerText, indexPartie:noPartie};
                //console.log(reqJSON);
                $.ajax({
                    'url':'/contrasPlanchette',
                    'dataType': 'html',
                    'type': 'POST',
                    'data': reqJSON,
                    'success': function(result){
                        $("#divResults").html(result);
                        $("#divScreen").show();
                        $("#divResultPlanchette").show();
                        //console.log(result);
                    }
                });
            //}
        //}

    });
    $(document).on('click', '#btnFermer', function(event){
        $("#divScreen").hide();
        $("#divResultPlanchette").hide();
    });

    $(document).on('click', '#btnNon', function(event){
        $("#divScreen").hide();
        $("#divMessagePlJouee").hide();
    });

    $(document).on('click', '#btnOui', function(event){
        $("#divScreen").hide();
        $("#divMessagePlJouee").hide();
        requeteAccDirect(requeteAccDirectPlJouee);
    });

    $(document).on('click', '#btnExporter', function(event){
        //console.log();
        var reqJSON = {indexPartie:$("input[name='indexPartie']").val()};
        $.ajax({
            'url':'/export',
            'dataType': 'html',
            'type': 'POST',
            'data': reqJSON,
            'success': function(result){
                console.log(result);
            }
        });
    });

    $(document).on('click','#divPlus', function(){
        var divAcces = $("#divAcces");

        if(divAcces.width() == 180){
            divAccesFerme();
        }else{
            $("#divScreenPlus").show();
            divAcces.css("border-left", "solid 1px #b2b6b8").css("width","180px");
            $("#divPlus").css("right","180px");
            $("#divPlusSigne").html("&raquo;");
        }

    });

    $(document).on('click','#divScreenPlus', function(){
        divAccesFerme();
    });

   /* $(document).on( "swipeleft", function(event){
        console.log("swipe left");
    } );*/
});

function divAccesFerme(){
    width = $( document ).width();

    if(parseInt(width) <= 1160) {
        var divAcces = $("#divAcces");
        $("#divScreenPlus").hide();
        divAcces.css("width", "0").css("border-left", "none");
        $("#divPlus").css("right", "0");
        $("#divPlusSigne").html("&laquo;");
    }
}

function fenetrePlanchetteJouee(req){
    requeteAccDirectPlJouee = req;
    $("#divScreen").show();
    $("#divMessagePlJouee").show();
}

function requeteAccDirect(req){
    $("#divScreen").show();
    requete(req);
}

function requete(req){
    $("#divSpinner").show();

    $.ajax({
        'url': '/table',
        'dataType': 'html',
        'type': 'POST',
        'data': req,
        'success': function(result){
            //process here
            //console.log($('#html').html());
            //document.body.innerHTML = result;
            $("#divMainAjax").html(result);
            $("#divSpinner").hide();
            $("#divScreen").hide();
            /*location.reload();*/
            condition = [0, 0, 0, 0, 0, 0];
            varActiveEntame = true;
            //$("html").html(result);
        },
        'error': function(err){
            console.log(err);
        }
    });
}

function resetForm() {
    $(".radio:checked").prop('checked', false);
    $("#radioCtr1").prop('checked', true);
    $("#divEnteteEntame").removeClass("divEnteteSelect").removeClass("divEnteteUnSelect").addClass("divEnteteDisSelect");
    $("#divEnteteResultat").removeClass("divEnteteSelect").removeClass("divEnteteUnSelect").addClass("divEnteteDisSelect");
    //console.log($(".labelScoreSel").get(0));
    $(".labelScoreSel").first().removeClass("labelScoreSel").addClass("labelScoreUnSel");
    $(".labelEntameSel").first().removeClass("labelEntameSel").addClass("labelEntameUnSel");
    $(".divCouleurConSel").first().removeClass("divCouleurConSel").addClass("divCouleurConUnSel");
    $(".divCouleurEntameSel").first().removeClass("divCouleurEntameSel").addClass("divCouleurEntameUnSel");
    $(".labelFaitSel").first().removeClass("labelFaitSel").addClass("labelFaitUnSel");
    $(".labelParSel").first().removeClass("labelParSel").addClass("labelParUnSel");
    $(".labelContreSel").first().removeClass("labelContreSel").addClass("labelContreUnSel");
    $(".labelContreUnSel").first().removeClass("labelContreUnSel").addClass("labelContreSel");
    $(".divFaitSel").first().removeClass("divFaitSel");
    $("#pNS").val(0);
    $("#pEO").val(0);
    condition = [0, 0, 0, 0, 0, 0];
}

function initializeValidation(){
    var req = $('#formPlanchette').serializeArray();
    console.log(req);
    if(req.length < 12){
        return false
    }else{

        //console.log(req);
        $('#contratValidation').html(returnContrat());
        $('#entameValidation').html(returnEntame(req));
        $('#resultatValidation').html(returnResultat(req));
        return true;


    }


}

function returnEntame(req){
    var entame = $("input[name=entame]:checked")[0].value;
    var entameCouleur = $("input[name=entameCouleur]:checked")[0].value;

    return retourneEntame(entame)+' de '+retourneCouleur(entameCouleur);
}

function returnResultat(req){
    var contra = parseInt($("input[name=nbLeves]:checked")[0].value)+6;
    var fait = $("input[name=fait]:checked")[0].value;
    var resultat = "fait ";
    var strLevee = "levées";
    var diff = fait - contra;

    if(fait < 2){
        strLevee = "levée";
    }
    if(fait > contra){
        diff = "+"+diff;
    }

    //console.log(req);
    //console.log(contra);
    if(contra == fait){
        resultat += fait + " "+strLevee+" ( = )";
    }else{
        resultat += fait + " "+strLevee+" ( "+diff+" )";
    }
    /*if(faitSigne > 1){
        return retourneSigne(faitSigne) + fait;
    }else{
        return '=';
    }*/
    return resultat;
}

function retourneCouleur(couleur){
    switch (couleur){
        case '1':
            return 'tr&egrave;fle';
        case '2':
            return 'carreau';
        case '3':
            return 'coeur';
        case '4':
            return 'pique';
        case '5':
            return 'sans atout';
    }
}

function retourneContre(contre){
    switch (contre){
        case '1':
            return '';
        case '2':
            return 'contr&eacute;';
        case '3':
            return 'surcontr&eacute;';
    }
}

function retournePar(par){
    switch (par){
        case '1':
            return 'nord';
        case '2':
            return 'est';
        case '3':
            return 'sud';
        case '4':
            return 'ouest';
    }
}

function retourneEntame(entame){
    switch (entame){
        case '1':
            return 'as';
        case '11':
            return 'valet';
        case '12':
            return 'dame';
        case '13':
            return 'roi';
    }
    return entame;
}

function retourneSigne(faitSigne){
    switch (faitSigne){
        case '2':
            return '+';
        case '3':
            return '-';
    }
}

function returnContrat(){
    //console.log($("input[name=nbLeves]:checked")[0].value);
    var nbLeve = $("input[name=nbLeves]:checked")[0].value;
    var contre = $("input[name=contre]:checked")[0].value;
    var couleur = $("input[name=couleur]:checked")[0].value;
    var par = $("input[name=par]:checked")[0].value;
    return nbLeve +' '+retourneCouleur(couleur)+' '+retourneContre(contre)+' par '+retournePar(par);
}