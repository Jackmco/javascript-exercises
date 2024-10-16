const convertToCelsius = function(fahrTemp) {
  celsTemp = (fahrTemp-32)*(5/9)
  celsTemp = Math.round(celsTemp*10) / 10 

  return celsTemp
};

const convertToFahrenheit = function(celsTemp) {
  fahrTemp = ((celsTemp * (9/5))+32)
  fahrTemp = Math.round(fahrTemp*10) / 10


  return fahrTemp
};
console.log(convertToCelsius(32))


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
