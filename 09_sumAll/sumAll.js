const sumAll = function(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    if ( a < 0 || b < 0) {
        return "ERROR";
    }

    let start = 0;
    let end = 0;

    if (b < a) {
        start = b;
        end = a;
    }
    else {
        start = a;
        end = b;
    }

    let output = 0;

    for (let i = start; i <= end; i ++) {
        output += i;
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
