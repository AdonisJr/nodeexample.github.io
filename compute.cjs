const compute = require('./example.cjs');
let x = 20;
let y = 5;

console.log("Addition " + compute.add(x, y));
console.log("Subtraction " + compute.subtract(x, y));
console.log("Multiplication " + compute.multiply(x, y));
console.log("Division " + compute.division(x, y));