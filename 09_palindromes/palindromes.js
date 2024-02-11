const palindromes = function (str) {
    strLower = str.toLowerCase();
    strAlphaNumer = strLower.replace(/[^0-9a-z]/gi, "");
    const arr = strAlphaNumer.split("");
    while (arr.length > 1) {
        if (arr[0] === arr[arr.length - 1]) {
            arr.shift();
            arr.pop();
        }
        else {
            return false;
        };
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
