function NumbersController() {
    var that = this;
    that.history = [];
    that.sum = 0;
    that.sumindex = -1;
    that.fibonacciCount = 30;
    that.fibArray = [];

    that.fibonacci = function(req, res, next) {
        console.log('In fibonacci');
        var fib = that.getFibonacci(that.fibonacciCount);
        console.log(fib);
        res.send(200, fib);
        return next();
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


    that.post = function(req, res, next) {
        console.log('In post: ' + req.body);
        var bodyObj = JSON.parse(req.body);

        console.log('In post body: ' + bodyObj);
        if (!bodyObj.hasOwnProperty('number')) {
            console.log('property number not found');
            res.send(500);
        }else {
            var number = parseInt(bodyObj.number);
            that.history.push(number);
            res.send(201);
        }
        return next();
    };

    that.total = function(req, res, next) {
        console.log('In sum, that.history' + that.history);

        // Re-calculate sum if new elements have been added to the array (lazy);

        if (that.sumindex < that.history.length -1) {
            for (var i = that.sumindex + 1; i< that.history.length; i++) {
                that.sum += that.history[i];
            }
            that.sumindex = that.history.length -1;
        }

        res.send(200, that.sum.toString());
        return next();
    };
}

module.exports = new NumbersController();