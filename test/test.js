//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
chai.use(chaiHttp);

// Test GET fibonacci
describe('/GET fibonacci', () => {
    it('it should GET first 30 fibonacci numbers in an array', (done) => {
    chai.request(server)
        .get('/api/fibonacci')
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(30);
        done();
})
})
})

/*
 * Test POST to add a number
 */
describe('/POST number', () => {
    it('it should POST a number 3', (done) => {
    var num = '{"number": 3}';
    chai.request(server)
        .post('/api/post')
        .set('content-type', 'json')
        .send(num)
        .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.eql('3');
    done();
});
});

});

/*
 * Test POST to add a number
 */
describe('/POST number', () => {
    it('it should POST a number 5', (done) => {
    var num = '{"number": 5}';
    chai.request(server)
        .post('/api/post')
        .set('content-type', 'json')
        .send(num)
        .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.eql('5')
    done();
});
});

});

/*
* Test GET to get the total
 */
describe('/GET total', () => {
    it('it should GET the total and the total should be 8', (done) => {
    chai.request(server)
        .get('/api/total')
        .end((err, res) => {
        res.should.have.status(200);
    res.body.should.be.eql('8');
    done();
})
})
})

// Test GET history
describe('/GET history', () => {
    it('it should GET the history', (done) => {
    chai.request(server)
        .get('/api/history')
        .end((err, res) => {
        res.should.have.status(200);
    res.body.should.be.a('array');
    res.body.length.should.be.eql(2);
    res.body.should.be.eql([3,5]);
    done();
})
})
})