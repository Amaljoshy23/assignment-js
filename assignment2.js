// Create a program that asks the user for two numbers and prints their sum.


var readlinesync = require('readline-sync');

let number1=parseInt(readlinesync.question('enter the first number : '));

let number2=parseInt(readlinesync.question('enter the second number : '));

let sum=number1+number2;

console.log("sum of the numbers =",sum);


