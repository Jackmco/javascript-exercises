const removeFromArray = function(initArray, toRemove) {
    toRemove = toRemove.split(",")
    console.log(toRemove) 
    for (i=0; i<initArray.length; i++) {
        console.log(initArray[i]) 
        for (j=0; j<toRemove.length; j++) {
            console.log(j)
            if (initArray[i]===toRemove[j]) {
                initArray.splice(i)
            } 
        }
    }
    return initArray
};

console.log(removeFromArray([1,2,3,4], 3))
// Do not edit below this line
module.exports = removeFromArray;
