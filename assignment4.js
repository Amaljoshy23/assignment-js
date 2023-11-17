// Implement a program that calculates the area of a rectangle using user-provided length and width.



var readlineSync = require('readline-sync');

let length=parseInt(readlineSync.question('Enter the length of the rectangle(m) : '));

let width=parseInt(readlineSync.question('Enter the width of the rectangle(m) : '));

let area=length*width;

console.log("The area of the rectangle =",area,"m^2");