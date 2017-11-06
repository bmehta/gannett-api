var restify = require('restify');
var errors = require('restify-errors');

function NumbersController() {
    var that = this;
    that.history = [];
    that.sum = 0;
    that.sumindex = -1;
    that.fibonacciCount = 30;
    that.fibArray = [];

    that.fibonacci = function(req, res, next) {
        try {
            var fib = that.getFibonacci(that.fibonacciCount);
            res.send(200, fib);
            return next();
        } catch(e) {
            var err = new errors.InternalServerError(e.message);
            return next(err);
        }
    };

    that.getFibonacci = function(n) {
        if (that.fibArray.length < n) {
            that.fibArray = [0,1];
            var i=0, j=1;
            for (var k=0; k<n-2; k++) {
                var x = i + j;
                that.fibArray.push(x);
                i = j;
                j= x;
            }
        }

        return that.fibArray;

    };

    that.getHistory = function(req, res, next) {
        try{
            res.send(200, that.history);
            return next();
        } catch(e) {
            var err = new errors.InternalServerError(e.message);
            return next(err);
        }
    };


    that.post = function(req, res, next) {
        var bodyObj = JSON.parse(req.body);
        if (!bodyObj.hasOwnProperty('number')) {
            console.log('property number not found');
            res.send(500, 'Property number not found');
        }else {
            var number = parseInt(bodyObj.number);
            that.history.push(number);
            res.send(201, number.toString());
        }
        return next();
    };

    that.total = function(req, res, next) {
        try{

            // Re-calculate sum if new elements have been added to the array (lazy);

            if (that.sumindex < that.history.length -1) {
                for (var i = that.sumindex + 1; i< that.history.length; i++) {
                    that.sum += that.history[i];
                }
                that.sumindex = that.history.length -1;
            }

            res.send(200, that.sum.toString());
            return next();
        } catch(e){
            var err = new errors.InternalServerError(e.message);
            return next(err);
        }
    };
}

module.exports = new NumbersController();