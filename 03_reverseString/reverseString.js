const reverseString = function(text) {
    let textReversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        textReversed += text.at(i);
    }
    return textReversed;
};

// Do not edit below this line
module.exports = reverseString;
