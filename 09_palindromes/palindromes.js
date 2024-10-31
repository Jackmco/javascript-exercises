const palindromes = function (string) {
    let stringRightToLeft = ""
    let stringLeftToRight = ""
    let sentenceArray = string.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
                        .replaceAll(" ", "")    
                        .toLowerCase()
                        .split("")
    console.log(sentenceArray, stringLeftToRight, stringRightToLeft)
    stringLeftToRight = sentenceArray.join("")
    stringRightToLeft = sentenceArray.reverse().join("")
    console.log(stringLeftToRight, stringRightToLeft)
    return stringRightToLeft===stringLeftToRight ? true: false
};

// palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
