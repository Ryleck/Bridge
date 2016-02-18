/**
 * Created by Phil on 2016-01-31.
 */
function calcule(){
    var r = document.getElementById('resultat');
    var resultat = parseInt(r.options[r.selectedIndex].value);
    var nbl = document.getElementById('nbLeves');
    var nbLeves = parseInt(nbl.options[nbl.selectedIndex].value);
    var pts;
    //console.log(resultat);
    if (resultat >= 0)
        pts = calculePts(nbLeves, resultat);
    else
        pts = calculePtsChute(resultat);
    document.getElementById('pointage').innerText = (pts);
}

function calculePts(nbl, res){
    var bonus = determineBonus();
    var ptsBase = determinePtsBase()
    if (estvulnerable()){
        return (((nbl+res) * ptsBase) + bonus);
    }else{
        return (((nbl+res) * ptsBase) + bonus);
    }
}

function determineBonus(){
    return 300;
}

function determinePtsBase(){
    return 30;
}

function calculePtsChute(res){
    if (estvulnerable()){
        return (res * 100);
    }else{
        return (res * 50);
    }
}

function estvulnerable(){
    var vul = document.getElementById('divVul').innerText;
    var p = document.getElementById('par');
    var par = p.options[p.selectedIndex].value;
    if(vul.localeCompare('Tous') == 0){
        return true;
    }else if (vul.localeCompare('Nord - Sud') == 0){
        if((par.localeCompare('nord') == 0) || (par.localeCompare('sud') == 0)) {
            return true;
        }
    }else if (vul.localeCompare('Est - Ouest') == 0){
        if((par.localeCompare('est') == 0) || (par.localeCompare('ouest') == 0)) {
            return true;
        }
    }
    return false;

}