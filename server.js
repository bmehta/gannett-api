/*
TODO: error handling
*/

var restify = require('restify'),
    numbers = require('./numbers'),
    port = process.env.PORT || 3000;

var server = restify.createServer({
    name: 'Numbers server',
    version: '1.0.0'
});

server.use(function(req, res, next){
    console.log(req.method + ' ' + req.url);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token');
    return next();
});

server.opts('/\.*/', optionsRoute);

function setCorsHeaders(res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
}

function optionsRoute(req, res, next) {

    res.send(200);
    return next();
}

server.use(restify.plugins.bodyParser());

server.get('api/fibonacci', numbers.fibonacci);
server.post('api/post/', numbers.post);
server.get('api/total', numbers.total);
server.get('api/history', numbers.getHistory);

server.listen(port, function() {
    console.log('api running at ' + port);
});

module.exports = server;
