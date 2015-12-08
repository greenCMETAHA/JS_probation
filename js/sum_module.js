function sum(a) {
    a = a || 0;

    function f(b) {
        b = b || 0;
        return sum(a+b);
    }

    f.toString = function() {
        return a;
    };

    return f;
}
