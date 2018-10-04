/**
 * Created by Phil on 2016-09-26.
 */
function changeEtui(elem){
    var actif = document.getElementsByClassName("divEtuiNoActif");
    var pl = '';
    for(i=0; i< actif.length; i++){
        actif[i].className = "divEtuiNoInactif";
    }
    actif = document.getElementsByClassName("divEtuiActif");
    for(i=0; i< actif.length; i++){
        actif[i].className = "divEtuiInactif";
    }
    elem.className = "divEtuiNoActif";
    pl = "etui"+elem.getAttribute("data-no-pl");
    //console.log(pl);
    actif = document.getElementsByName(pl);
    for(i=0; i< actif.length; i++) {
        actif[i].className = "divEtuiActif"
    }

}


/*if($.mobile.media("screen and (max-device-width: 359px)")) {
    // Change viewport for smaller devices
    $('meta[name=viewport]').attr('content','width=device-width, initial-scale=0.6');
}*/
