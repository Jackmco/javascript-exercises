const fibonacci = function(fibonacciMember) {
    let oneBefore = 0
    let currentFibonacciMember = 1
    for (i=1; i < Number(fibonacciMember); i++) {
        let placeholder = currentFibonacciMember
        currentFibonacciMember += oneBefore
        oneBefore = placeholder
        console.log(currentFibonacciMember)
    }
    return fibonacciMember < 0 ? "OOPS"
    : isNaN(Number(fibonacciMember)) ? "OOPS" 
    : fibonacciMember == 0 ? 0
    : currentFibonacciMember
}

// fibonacci(-2)
// fibonacci("test")
// fibonacci(0)
// fibonacci(5)

// Do not edit below this line
module.exports = fibonacci;
