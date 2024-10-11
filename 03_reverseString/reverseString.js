const reverseString = function(string) {
    let reversedString = ""
    let reversedStringArray = []
    for (i=0; i<string.length; i++) {
        reversedStringArray.unshift(string[i])
    }
    console.log(reversedStringArray)
    for (i=0; i<reversedStringArray.length; i++) {
        reversedString += reversedStringArray[i]
    }
    return reversedString
};
reverseString('hello')
// Do not edit below this line
module.exports = reverseString;
