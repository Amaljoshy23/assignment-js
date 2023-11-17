// Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

var readlineSync = require('readline-sync');
let age=parseInt(readlineSync.question('Please enter your age : '));
if(age<0){
    console.log("you are a baby")
}else if(age>=0 && age<=12){
    console.log("You are a Child")
}else if(age>=13 && age<=19){
    console.log("You are a Teenager")
}else if(age>=20 && age<=59){
    console.log("You are an Adult")
}else if(age>=60 && age<=100){
    console.log("You are a Senior")
}else{
    console.log("you are already dead")
}