/**
 * Created by Phil on 2014-12-21.
 */

var myVar;
$(document).ready(function(){
    //Make ajax call to fetch data
    //console.log('ready');
    /*if ($("#refresh").val() == 'yes') {
        var indice = document.getElementsByName('index')[0].value;
        var req = '{"index":"'+ indice +'"}';
        //alert('refresh');
        $.ajax({
            url: "/listeFichiers",
            type: "POST",
            dataType: 'html',
            contentType: 'application/json; charset=UTF-8',
            data: req,
            success: function (resp) {
                document.getElementById('dExistantes').innerHTML = resp;
            },
            error: function (resp) {
                alert("error occurred.");
            }
        });

    } else {
        $('#refresh').val('yes');
    }*/

    $(document).on('click', "#iButtonDelete", function() {
        var r = confirm("Voulez-vous vraiment supprimer la présentation " + this.name);
        //var indice = document.getElementsByName('index')[0].value;
        //console.log(indice);
        if(r == true) {
            //var varDeleteButton = '{"deletebutton":"' + this.name + '"}';
            //alert(varDeleteButton);
            $.ajax({
                url: "/supprimer?nom="+this.name,
                dataType: 'html',
                success: function (resp) {
                    document.getElementsByClassName('divListe')[0].innerHTML = resp;
                },
                error: function (resp) {
                    alert("error occurred.");
                }
            });
        }
    });

});
