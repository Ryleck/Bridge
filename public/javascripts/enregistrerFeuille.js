/**
 * Created by Phil on 2016-02-09.
 */

$(document).ready(function() {
    $("#btnActualiser").click(function () {
        location.reload();
    });
});


function enregistrer(){
    document.body.innerHTML += '<div class="divEnregistrer"><h2>Enregistrement</h2>' +
    'Veuillez spécifier le nom du fichier<br>' +
    '<form action="enregistre" method="get">' +
    '<input type="text" name="nomFichier" placeholder="Nom du fichier"><br>' +
    '<input type="submit" value="Enregistrer" class="bouton">' +
    '</form>' +
    '</div>'
}