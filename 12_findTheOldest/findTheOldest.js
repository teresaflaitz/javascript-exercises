const findTheOldest = function(arr) {
    const oldToYoung = arr.sort( function(a, b) {
        if(!("yearOfDeath" in a)) {
            return ((b.yearOfDeath - b.yearOfBirth) - ((new Date).getFullYear() - a.yearOfBirth));
        }
        else if (!("yearOfDeath" in b)) {
            return (((new Date).getFullYear() - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
        };
        return ((b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    });
    return oldToYoung[0];
};

// Do not edit below this line
module.exports = findTheOldest;
