//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
var Book = require('../numbers');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
chai.use(chaiHttp);

describe('/GET fibonacci', () => {
    it('it should GET first 30 fibonacci numbers', (done) => {
    chai.request(server)
        .get('/api/fibonacci')
        .end((err, res) => {
        res.should.have.status(200);
    res.body.should.be.a('array');
    res.body.length.should.be.eql(30);
    done();
});
});
});
