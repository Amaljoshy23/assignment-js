// Write a program that takes user input for their name and prints a personalized greeting.


var readlineSync = require('readline-sync');
let name=readlineSync.question('Enter your  Name : ');
console.log("Hello",name,"Good Morning", name, "have a wonderfull day");