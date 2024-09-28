var a  = prompt("Enter any number");
document.write(" The value of a is: ", a , "<br>");
a++;
document.write(" The value of a++ is: ", a , "<br>");
document.write(" Now the value of a is: ", a , "<br>");
document.write(" The value of a++ is: ", a , "<br>");
a++;
document.write(" Now the value of a is: ", a , "<br>");
a--;
document.write(" The value of a-- is: ", a , "<br>");
document.write(" Now the value of a is: ", a , "<br>");
document.write(" The value of a is: ", a , "<br>");
a--;
document.write(" Now the value of a is: ", a , "<br>");

var a = 2, b = 1;
document.write(" a is: ", a, "<br>" , " b is: ", b, "<br>");
var result = --a - --b + ++b + b--;
document.write(result, "<br>");

var user = prompt("Enter your name");
document.write(" Hello " , user, "<br>");

function generateTable() {
    var num = document.getElementById("numberInput").value;
    if (num === "") {
        num = 5;
    }
    document.getElementById("tableHeading").innerHTML = "Multiplication Table of " + num;
    var table = "";
    for (var i = 1; i <= 10; i++) {
        table += num + " x " + i + " = " + (num * i) + "<br>";
    }
    document.getElementById("tableResult").innerHTML = table;
}

// var subbject1 = prompt("Enter your first subject");
// var mark1 = prompt("Enter your obtained Mark in subject1 ");
// var result1 = parseFloat (mark1) / 100 * 100;
// document.write(" Subject1: ", subbject1, " 100 ", + +  mark1, + "" +   result1, " % " , "<br>"); 
// var subbject2 = prompt("Enter your second subject");
// var mark2 = prompt("Enter your Obtained Mark in subject2");
// var result2 = parseFloat (mark2) / 100 * 100;
// document.write(" Subject2: ", subbject2, " 100 ", + +  mark2, + "" +  result2, " % " ,"<br>");
// var subbject3 = prompt("Enter your third subject ");
// var mark3 = prompt("Enter your obtained Mark in subject3");
// var result3 = parseFloat (mark3) / 100 * 100;
// document.write(" Subject1: ", subbject3, " 100 ", + + mark3, + "" +  result2, " % " ,"<br>");

var subject1 = prompt("Enter your first subject:");
var mark1 = prompt("Enter your obtained mark in " + subject1 + ":");
var result1 = (parseFloat(mark1) / 100) * 100;  
document.write("Subject 1: " + subject1 + " | Marks: " + mark1 + " | Percentage: " + result1 + "%<br>");


var subject2 = prompt("Enter your second subject:");
var mark2 = prompt("Enter your obtained mark in " + subject2 + ":");
var result2 = (parseFloat(mark2) / 100) * 100; 
document.write("Subject 2: " + subject2 + " | Marks: " + mark2 + " | Percentage: " + result2 + "%<br>");


var subject3 = prompt("Enter your third subject:");
var mark3 = prompt("Enter your obtained mark in " + subject3 + ":");
var result3 = (parseFloat(mark3) / 100) * 100;  
document.write("Subject 3: " + subject3 + " | Marks: " + mark3 + " | Percentage: " + result3 + "%<br>");