const convertToCelsius = function(fahrenheit) {
  let celsisus = (fahrenheit - 32) * (5/9);
  return Math.round(celsisus * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (((9/5) * celsius + 32));
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
