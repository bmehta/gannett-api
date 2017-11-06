'use strict';

//requires
var restify = require('restify'),
    numbers = require('./numbers'),
    errs = require('restify-errors');


var port = process.env.PORT || 3000;

// Create the server
var server = restify.createServer({
    name: 'Gannett Numbers server',
    version: '1.0.0'
});

// CORS handlers
server.use(function(req, res, next){
    console.log(req.method + ' ' + req.url);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date');
    return next();
});

// handler for OPTIONS method (for api/post)
server.opts('/\.*/', optionsRoute);

function optionsRoute(req, res, next) {

    res.send(200);
    return next();
}

// plugin to parse request body
server.use(restify.plugins.bodyParser());

// routes
server.get('api/fibonacci', numbers.fibonacci);
server.post('api/post/', numbers.post);
server.get('api/total', numbers.total);
server.get('api/history', numbers.getHistory);

// handle uncaught exception
server.on('uncaughtException', function(req, res, route, err)  {
    console.log('Uncaught exception:' + err);
});

// startup message
server.listen(port, function() {
    console.log('api running at ' + port);
});

module.exports = server;
