// create a variable to store the first number
let a = 5;
// create a variable to store the second number
let b = 9;

// A third variable is needed: if we wrote a = b first, the original
// value of a would be overwritten and lost before b could receive it.
let temp = a;
a = b;
b = temp;

console.log(`a = ${a}`);
console.log(`b = ${b}`);