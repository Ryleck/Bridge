/**
 * Created by Phil on 2018-02-09.
 */
var express = require('express');
var router = express.Router();
var table = require('../node_modules/table/table');

router.post('/', function(req, res) {

    table.chargeInfoTablePlID(req);
    table.render(res);
});

module.exports = router;