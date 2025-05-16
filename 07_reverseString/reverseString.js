const reverseString = function(string) {
    stringArray = string.split("");
    output = "";

    for (let i = stringArray.length - 1; i >= 0; i --) {
        output += stringArray[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
