/*
TODO: change get sum to PUT
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

server.get('/', function (req, res, next) {
    console.log('In /');
    res.send('okay');
    return next();
});

server.get('api/fibonacci', numbers.fibonacci);
server.get('api/sum/:id', numbers.put);
server.get('api/sum', numbers.sum);

server.listen(port, function() {
    console.log('api running at ' + port);
});

