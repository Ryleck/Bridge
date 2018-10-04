/**
 * Created by Phil on 2017-10-13.
 */
$(document).ready(function() {

    $(document).on('click', "#ajouterNom", function () {
        var req = $('#formNom').serializeArray();
        //console.log(req);
        $.ajax({
            'url': '/ajouteNomJoueur',
            'dataType': 'html',
            'type': 'POST',
            'data': req,
            'success': function (result) {
                $("#listeDesNoms").html(result);
                //console.log(result);

            }
        });
    });
});