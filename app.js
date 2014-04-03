var express = require('express');
var http = require('http');
var path = require('path');
var log = require('./libs/log')(module);
var db = require('./libs/sequelize');
var player = require('./libs/player');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({ keepExtensions: true, uploadDir: '~/uploads' }));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// routing
app.get('/players', player.query);
app.post('/players', player.create);
app.post('/upload', player.uploadPicture);

app.get('/players/:id', player.find);
app.put('/players/:id', player.update);
app.delete('/players/:id', player.delete);


http.createServer(app).listen(app.get('port'), function () {
    log.info('Express server listening on port ' + app.get('port'));
});
