// 1.Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

var user=prompt("what is your favourite city");
if (user==="karachi"){
    alert("welcome to the city of lights");
}

// 2.Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

var user=prompt("what is your gender");
if (user==="male"){
    alert("Good Morning Sir");
}
else if (user==="female"){
    alert("Good Morning Ma'am");
}

// 3.Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

var user=prompt("Give the color of road traffic signal");
if (user==="red"){
alert("Must Stop");
}
if (user==="yellow"){
alert("Ready to move");
}
if (user==="green"){
alert("Move Now");
}

// 4.Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

var user=prompt("Remaining fuel in car (in litres)?");
if (user<="0.25liter"){
    alert("Please refill the fuel in your car");
}

// 5.Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

// 6.Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:

function calculateGrade() {
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const TotalMarks = parseFloat(document.getElementById("TotalMarks").value);

    const obtainMarks = subject1 + subject2 + subject3;
    const percentage = (obtainMarks / TotalMarks) * 100;

    let grade, Remark;
    if (percentage >= 80) {
        grade = "A one";
        Remark = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        Remark = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        Remark = "You need to improve";
    } else {
        grade = "Fail";
        Remark = "Sorry";
    }

    document.getElementById("Result").innerHTML = `Percentage: ${percentage.toFixed(2)}% <br> Grade: ${grade} <br> Remark: ${Remark}`;
}

// 7.Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var user=prompt("Guess the secret number? (ranging from 1 to 10)");
if (user==="7"){
    alert("Bingo! Correctanswer");
}
else if (user==="6"){
    alert("Close enough to the correct answer");
}
else {
    alert("wrong");
}

// 8.Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

function calculateDivisibility(){
    const number=parseInt(document.getElementById("number").value);
    if (number % 3 === 0){
        document.getElementById("Result").innerText = `${number} is divisible by 3.`;
    }
    else{
        document.getElementById("Result"). innerText = `${number} is not divisible by 3.`;
    }
}

// 9.Write a program that checks whether the given input is an
// even number or an odd number.

function calculateEvennumber(){
    const number=parseFloat(document.getElementById("number").value);
    if (!isNaN(number)) {
    if (number % 2 === 0){
        document.getElementById("Result").innerText = `${number} is even.`;
    }
    else{
        document.getElementById("Result").innerText = `${number} is odd.`;
    }
} else {
    document.getElementById("Result").innerText = "Please enter a valid number.";
}
}

// 10.Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var user=prompt("temperature");
if (user >= "40"){
    alert("It is too hot outside.");
}
else if (user >= "30"){
    alert("The Weather today is Normal.");
}
else if(user >= "20"){
    alert("Today’s Weather is cool.");
}
else if(user >= "10"){
    alert("OMG! Today’s Weather is so cool.");
}

// 11.Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operation = document.getElementById("operation").value;

    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }
    if (operation === "+") {
        result = firstNumber + secondNumber;
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "/") {
        if (secondNumber === 0) {
            document.getElementById("result").innerText = "Cannot divide by zero.";
            return;
        }
        result = firstNumber / secondNumber;
    } else if (operation === "%") {
        result = firstNumber % secondNumber;
    } else {
        document.getElementById("result").innerText = "Invalid operation. Please use +, -, *, /, or %.";
        return;
    }
    document.getElementById("result").innerText = `Result: ${result}`;
}
