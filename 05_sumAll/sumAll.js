const sumAll = function(smallInt, bigInt) {
    if (typeof(smallInt) !== 'number' || typeof(bigInt) !== 'number'){
        return 'ERROR';
    }
    
    if (smallInt < 0 || bigInt < 0){
        return 'ERROR';
    }

    if (smallInt > bigInt) {
        let tempSmallInt = bigInt;
        let tempBigInt = smallInt;

        smallInt = tempSmallInt;
        bigInt = tempBigInt;
    }

    let sum = 0;
    while (smallInt <= bigInt) {
        sum += smallInt;
        smallInt++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
