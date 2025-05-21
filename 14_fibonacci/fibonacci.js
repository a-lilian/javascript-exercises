const fibonacci = function(n) {
    n = Number(n);

    if (n < 0) {
        return "OOPS";
    }

    let fibonacciNumbers = [0, 1];

    for (let i = 2; i <= n; i ++) {
        fibonacciNumbers[i] = 
        fibonacciNumbers[i - 1] + 
        fibonacciNumbers[i - 2]; 
    }

    return fibonacciNumbers[n];
};

// Do not edit below this line
module.exports = fibonacci;
