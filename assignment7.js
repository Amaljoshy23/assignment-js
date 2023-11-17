// Implement a program that checks if a user's entered number is positive, negative, or zero.



var readlineSync = require('readline-sync');

let number=parseInt(readlineSync.question('Enter a number : '));

if(number>0){
    console.log("The number is +ve")
}else if(number<0){
    console.log("The number is -ve")
}else{
    console.log("You have entered zero")
}