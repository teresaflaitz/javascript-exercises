const removeFromArray = function(myArray, ...toRemove) {
    const myNewArray = [];

    for (i in myArray) {
        let j = 0;
            while(myArray[i] !== toRemove[j] && j < toRemove.length) {
                j++;
            }
            if (j === toRemove.length) {
                myNewArray.push(myArray[i]);
            }
    }
    return myNewArray;
};

// Do not edit below this line
module.exports = removeFromArray;