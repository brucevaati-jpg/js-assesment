// create a variable to store the temperature in Celsius
const celsius = 25;
// create a variable to store the temperature in Fahrenheit
// Multiplication and division are evaluated left to right before the
// addition, so C * 9 / 5 + 32 works without extra brackets.
const fahrenheit = celsius * 9 / 5 + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);