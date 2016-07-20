var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var nouvellePartie = require('./routes/nouvellePartie');
var feuillePointage = require('./routes/feuillePointage');
var feuillePartie = require('./routes/feuillePartie');
var feuilleNoms = require('./routes/feuilleNoms');
var enregistre = require('./routes/enregistre');
var existantes = require('./routes/existantes');
var partie = require('./routes/partie');
var mouvement = require('./routes/mouvement');
var table = require('./routes/table');
var terminer = require('./routes/terminer');
var resultats = require('./routes/resultats');
var mov = require('./node_modules/mouvement/mouvement');
//var varPl = require('./node_modules/planchette/planchette');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/nouvellePartie', nouvellePartie);
app.use('/feuillePointage', feuillePointage);
app.use('/feuillePartie', feuillePartie);
app.use('/feuilleNoms', feuilleNoms);
app.use('/enregistre', enregistre);
app.use('/existantes', existantes);
app.use('/partie', partie);
app.use('/mouvement', mouvement);
app.use('/table', table);
app.use('/terminer', terminer);
app.use('/resultats', resultats);

mov.initMouvement();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
