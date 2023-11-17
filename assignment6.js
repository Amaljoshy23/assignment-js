// Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming passing grade is 60 or above).


var readlineSync = require('readline-sync');
let grade1=parseInt(readlineSync.question('Enter mechatronics grade  : '));

let grade2=parseInt(readlineSync.question('Enter rtos grade : '));

let grade3=parseInt(readlineSync.question('Enter dsp grade  : '));

let grade4=parseInt(readlineSync.question('Enter adc grade  : '));

let grade5=parseInt(readlineSync.question('Enter emt grade  : '));

let grade6=parseInt(readlineSync.question('Enter lic grade  : '));

let result=grade1+grade2+grade3+grade4+grade5+grade6;
if(result>=60){
    console.log("You are Passed")
}else{
    console.log("You are failed")
}