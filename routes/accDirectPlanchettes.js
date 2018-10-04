/**
 * Created by Phil on 2017-04-05.
 */
var express = require('express');
var router = express.Router();
var gestion = require('../node_modules/gestionPartie/gestionPartie');

router.post('/', function(req, res) {
    //console.log(req.body);
    var sHTML = genereOptionPlanchette(req.body.indexPartie, req.body.table, req.body.rondeAD);
    res.type('html');
    res.send(sHTML);
});

function genereOptionPlanchette(indexPartie, table, ronde){
    var accDirectPl = gestion.retourneAccesDirectPlanchettes(indexPartie, table, ronde);
    var sHTML = '';
    for(i = 0; i < accDirectPl.length; i++){
        sHTML += '<option value="'+ accDirectPl[i] +'">'+ accDirectPl[i] +'</option>';
    }
    return sHTML;
    //console.log(accDirectPl);
}

module.exports = router;