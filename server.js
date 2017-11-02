/*
TODO:
error handling
in tests change to async/await
add versioning to url
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
    return next();
});

server.use(restify.plugins.bodyParser());

server.get('api/fibonacci', numbers.fibonacci);
server.post('api/post/', numbers.post);
server.get('api/total', numbers.total);

server.listen(port, function() {
    console.log('api running at ' + port);
});

module.exports = server;
