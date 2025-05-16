const repeatString = function(string, repeatCount) {

    if (repeatCount < 0) {
        return "ERROR";
    }
    
    let output = "";
    
    for (let i = 0; i < repeatCount; i ++)
    {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
