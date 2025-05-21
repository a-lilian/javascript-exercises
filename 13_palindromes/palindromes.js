function stripStrings (inputString) {
    const toRemove = /[\p{P}\s]/gu
    return inputString.replaceAll(toRemove, "").toLowerCase();
} 

const palindromes = function (input) {
    input = stripStrings(input);
    const inputReversed = input.split("").reverse().join("");
    return input === inputReversed;
};

// Do not edit below this line
module.exports = palindromes;
