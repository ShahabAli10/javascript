// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. 
function checkCharacter(char){
    let ascii = char.charCodeAt(0);

    if (ascii >= 48 && ascii <= 57){
        console.log (char + " is a number. ");
    }
    else if (ascii >= 65 && ascii <= 90){
        console.log (char + " is a uppercase letter. ");
    }
    else if (ascii >= 97 && ascii <= 122){
        console.log (char + " is a lowercase letter. ");
    }
    else {
        console.log (char + " is not a number or letter. ");
    }
}
checkCharacter ('A')
checkCharacter ('a')
checkCharacter ('1')
checkCharacter ('@')

var a = prompt("Enter any number ");
var b = prompt("Enter any number ");
if (a>b){
    document.write(" The value of a is greater: ", a, "<br>");
}
else if (a<b){
    document.write(" The value of b is greater: ", b, "<br>")
}
else {
    document.write("Both value are equal")
}

var num = prompt("enter any number");
if (num ==="0" ){
    document.write(" The number is zero:" , "<br>");
}
else if (num > 0 ){
    document.write(" The number is positive: " , "<br>");
}
else {
    document.write(" The number is netagive: ");
}

var user = prompt("Enter any character");
if (user === "a" || user ==="e" || user ==="i" || user ==="o" || user ==="u"){
    document.write("true");
}
else{
    document.write("false");
}

var pass = prompt("Enter your password:");
if (pass == "password"){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect password");
}

var greeting;
var hour = new Date().getHours();

if (hour < 18) {
    greeting = "Good day";
    console.log(greeting); 
} else {
    greeting = "Good evening";
    console.log(greeting);
}

var input = prompt("Enter time in 24-hour format (e.g., 1900):");

var hour = parseInt(input.substring(0, 2));

if (hour === 0) {
    console.log("12 AM");  
} else if (hour > 0 && hour < 12) {
    console.log(hour + " AM");  
} else if (hour === 12) {
    console.log("12 PM"); 
} else if (hour > 12 && hour <= 23) {
    console.log((hour - 12) + " PM"); 
} else {
    console.log("Invalid time input");
}

var input = prompt("Enter the time in 24 hour format");

var hour = parseInt(input.substring(0,2));

if (hour >= 6 && hour < 12){
    document.write("Good morning");
}
else if ( hour >= 12 && hour < 17 ){
    document.write("Good Afternoon");  
}
else if ( hour >= 17 && hour < 21){
    document.write("Good Evening");
}
else{
    document.write("Good Night");
}