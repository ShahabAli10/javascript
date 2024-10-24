var num =prompt("Enter your First name");
var num1 =prompt("Enter your last name");
var fullname = num + " " + num1 ;
document.write(" Hello Mam/Sir " + fullname  ,"<br>");

var mobilemodel = prompt("Enter your favourite mobile phone model");
var modellength = mobilemodel.length;
document.write(" My favourite phone is: " , mobilemodel , " <br> ");
document.write(" length of string: " , modellength ,"<br>");

var string = prompt("Enter any country");
var character = prompt("Enter a character to find its index");
var firstIndex = string.indexOf(character);
var secondIndex = string.indexOf(character, firstIndex + 1);
document.write("String: " + string + "<br>");
document.write("Index of the first '" + character + "' : " + firstIndex + " <br>");
document.write("Index of the second '" + character + "' : " + secondIndex ,"<br>");

var word = "Hello World";
var index = word.lastIndexOf('l');
document.write( " word: " , word , "<br>");
document.write( " index of last 'l': " , index ,"<br>");

var word = "Pakistani";
var character = word.charAt(3);
document.write(" word: ", word , "<br>");
document.write(" character at index 3: ", character ,"<br>");

var fistname = prompt("Enter your First name:");
var lastname = prompt("Enter your Last name:");
var result = fistname.concat("  ", lastname);
document.write(" Hello Mam/Sir: " , result ,"<br>");

function convertNum(input, from, to){
    return input.replace(from, to ,"<br>");
}
var num = "Hyderabad";
var num1 =  convertNum(num, 'Hyder','Islam');
document.write( " Before: " ,num , "<br>");
document.write( " After: ", num1 ,"<br>");

function convertNum(input, from, to){
    return input.replace(from, to);
}
var message = "Ali and Sara are best friends. They play cricket and football together.";
var num = convertNum(message, 'and', '&');
document.write(" Before: ", message, "<br>");
document.write(" After: ", num ,"<br>");

var input = prompt("Enter Anything");
var result = input.toLocaleUpperCase();
document.write(result ,"<br>");

let stringvalue = "472";
let numbervalue = Number(stringvalue);
let Value = Number(stringvalue);
let string = Value.toString();
console.log("Value:", numbervalue);
console.log("Type:", typeof numbervalue);
console.log("Value:", string);
console.log("Type:", typeof string ,"<br>");


var input =  prompt("Enter any thing to convert into title");
function toTitleCase (str){
   return str
   .toLowerCase()
   .split(' ')
   .map(word=>word.charAt(0).toUpperCase()+ word.slice(1))
   .join(' ');
}
document.write(toTitleCase(input),"<br>");

var num = parseFloat(prompt("Enter numbr in point"));
var num1 = num.toString().replace('.','');
document.write(num1,"<br>");

let username = prompt("Enter a username");
while (username.includes('@') || username.includes('.') || username.includes('!')){
username = prompt("Invalid username. Please enter a username without @,., or !:");   
}
document.write(username,"<br>");

var input = prompt("welcome to apnabakery. What do you want to order sir/mam").toLowerCase();
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
if (A.includes(input)){
    document.write(input, " is available in our bakery");
}
else {
    document.write("we are sorry. ", input , " is not available in our bakery " ,"<br>");
}

var university = "University of karachi";
var array = university.split("");
for (var i = 0; i < array.length; i++)
document.write(array[i] + "<br>");

var input = "pakistan";
var lastcharacter = input.charAt(input.length - 1);
document.write( " word: ",input, "<br>");
document.write( " Last character: ",lastcharacter, "<br>");

var text = "The quick brown fox jumps ovver the lazy  dog";
var find = text.match(/the/gi);
var count = find? find.length : 0 ;
document.write("There are " + count + " occurrence of 'the'.");

var input = prompt("Enter your password. should contain alphabets and number");
if (!isNaN(input.charAt(0))){
    input = prompt("invalid password. It should not start with a number");
}
else if (input.length < 6){
    input = prompt("Password must at least 6 character long");
}
else if (!/[a-zA-Z]/.test(input) && !/\d/.test(input)){
    input = prompt("Password must contain both alphabets and numbers.");
}
else{
    document.write(input, ":", "Password is valid.")
}