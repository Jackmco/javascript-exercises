const add = function(...numbers) {
	return added = numbers.reduce((total, number) => {
    return total + number
  }, 0);
}

const subtract = function(...numbers) {
  return numbers.reduce((total, number) => {
    return total - number
  });
};

const sum = function(...numbers) {
  numbers = numbers[0] // adjusts the rest argument reception to be one list
  return numbers
    .map((number) => Number(number))  
    .reduce((total, number) => {return total + number}, 0);
};

const multiply = function(...numbers) {
  numbers = numbers[0] // adjusts the rest argument reception to be one list
  return numbers
    .map((number) => Number(number))  
    .reduce((total, number) => {return total * number}, 1);
};

const power = function(number, exponent) {
  let answer = 1  
  for (i=0; i<exponent; i++) {
       answer = answer * number
    }
    return answer 
};

const factorial = function(number) {
  if (number === 0) {return 1}
  let answer = 1
  for (i=number; i>0; i--) {
    answer *= i
  } 
  return answer
};
console.log(factorial(10))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
