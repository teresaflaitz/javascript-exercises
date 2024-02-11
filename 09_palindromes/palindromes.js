const palindromes = function (str) {
    const strLower = str.toLowerCase();
    const strAlphaNumer = strLower.replace(/[^0-9a-z]/gi, "");
    return strAlphaNumer == strAlphaNumer.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
