/**
 * Created by Phil on 2017-04-07.
 */
var express = require('express');
var router = express.Router();
var gestion = require('../node_modules/gestionPartie/gestionPartie');

router.post('/', function(req, res) {
    //console.log(req.body);
    //var sHTML = genereOptionPlanchette(req.body.indexPartie, req.body.table, req.body.rondeAD);
    if(typeof req.body.planchetteAD == 'undefined') {
        gestion.overrideNoRonde(req.body.indexPartie, req.body.table, req.body.rondeAD);
    }else{
        gestion.overrideNoPlanchette(req.body.indexPartie, req.body.table, req.body.rondeAD, req.body.planchetteAD);
    }
    res.send("Ok");
});

module.exports = router;