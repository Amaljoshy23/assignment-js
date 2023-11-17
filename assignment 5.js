// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

var readlineSync = require('readline-sync');
let a=parseInt(readlineSync.question('Please enter your age : '));

if(a>=18){
    console.log("yes,you are eligible to vote")
}else{
    console.log("you are not eligble to vote")
}