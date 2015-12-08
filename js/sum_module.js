function sum(a) {

    a = isFinite(a)?a:0;
    var currentSum = a;

    function f(b) {
        b = isFinite(b)?b:0;
        currentSum += b;
        return f;
    }

    f.toString = function() {
        var result=currentSum;
        currentSum=0;
        return result;
    };

    return f;
}
