function NumbersController() {
    var that = this;
    that.history = [];
    //const fibonacciCount = 30;

    that.fibonacci = function(req, res, next) {
        console.log('In fibonacci');
        var fib = that.getFibonacci(30);
        console.log(fib);
        res.send('Ok' + fib);
        return next();
    };

    that.getFibonacci = function(n) {
        var fibArray = [0,1];
        var i=0, j=1;
        for (var k=0; k<n-2; k++) {
            var x = i + j;
            fibArray.push(x);
            i = j;
            j= x;
        }
        return fibArray;
    };


    that.put = function(req, res, next) {
        console.log('In put');
        return next();
    };

    that.sum = function(req, res, next) {
        console.log('In sum');
        return next();
    };
}

module.exports = new NumbersController();