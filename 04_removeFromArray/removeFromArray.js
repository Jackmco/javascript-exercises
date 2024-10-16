const removeFromArray = function(initArray, ...toRemove) {
    
    
    //iterate through the toRemove array to find what to get rid of
    for (i=0; i<toRemove.length; i++) {
        let numToRemove = toRemove[i] // specify the exact number to remove
        for (j=0; j<initArray.length; j++) { // move through the passed argument array
            if (numToRemove === initArray[j]) { // if number to remove is in the array, get rid of it
                if (initArray[j+1] === numToRemove) { // if the index next to the primary index is also the same number, get rid of two
                    initArray.splice(initArray.indexOf(initArray[j]), 2) 
                }
                else { // otherwise, just get rid of the primary index
                    initArray.splice(initArray.indexOf(initArray[j]), 1)
                }
            }
        }
    }
    return initArray
}

console.log(removeFromArray([1, 2, 2, 3], 2))
// expect: [1, 4]


// Do not edit below this line
module.exports = removeFromArray;
