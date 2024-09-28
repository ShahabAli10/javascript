var num1 = prompt("please enter first number");
document.write("sum of ", num1);
var num2 = prompt("please enter second number");
document.write(" and ", num2);
var num3 = parseInt (num1) + parseInt (num2) ;
document.write(" is: ", num3 ,"<br>");

var num1 = prompt("Ticket price");
document.write("Ticket price: " + num1 + "<br>");
var num2 = prompt("How many tickets?");
document.write("Number of tickets: " + num2 + "<br>");
var num3 = parseInt(num1) * parseInt(num2) ;
document.write("Total cost: " +num3 , "<br>");

var num1 = prompt("Enter any number for table");
document.write(num1, " x 1 = ", num1 * 1, "<br>", num1, " x 2 = ", num1 * 2, "<br>", num1, " x 3 = ", num1 * 3, "<br>", num1, " x 4 = ", num1 * 4, "<br>", num1, " x 5 = ", num1 * 5, "<br>", num1, " x 6 = ", num1 * 6, "<br>", num1, " x 7 = ", num1 * 7, "<br>", num1, " x 8 = ", num1 * 8, "<br>", num1, " x 9 = ", num1 * 9, "<br>", num1, " x 10 = ", num1 * 10, "<br>",)

var F = prompt("Give temperature in fahrenhiet");
var num2 = c = ( F - 32 ) * 5 / 9 ;
document.write(num2,  " C ", "<br>");

var C = prompt("Give temperature in Celcius");
var num2 = f = ( C * 9 / 5 ) + 32 ;
document.write(num2, " F ", "<br>");

var num1 = prompt("Price of item 1");
document.write("Price of item 1 is: ", num1 , "<br>");
var num2 = prompt("Quantity of item 1");
document.write("Quantity of item 1 is: ", num2 , "<br>");
var num3 = prompt("Price of item 2");
document.write("Price of item 2 is: ", num3 , "<br>");
var num4 = prompt("Quantity of item 2");
document.write("Quantity of item 2 is: ", num4 , "<br>");
var num5 = parseInt (num1) * parseInt (num2) ; "<br>"
var num6 = parseInt (num3) * parseInt (num4) ; "<br>"
var num7 = parseInt (num5) + parseInt (num6);
document.write("Total cost of your order is: ", num7);
 
var total = prompt("Enter total mark");
document.write(" Total marks: ", total, "<br>");
var obtained = prompt("Enter obtained mark");
document.write(" Marks obtained: ", obtained, "<br>");
var result = (obtained / total) * 100; "<br>" 
document.write(" Percentage: ", result, " % "  , "<br>");

var curreny = prompt("Enter your currency (us, sr):");
var amount = prompt("Enter your amount:");
var result;
if  (curreny.toLowerCase() === "us" || curreny.toLowerCase() === "usd")
{
    result = parseFloat(amount) * 104.80;
    document.write(" Total Currency in PKR: ", + result);
}
else if (curreny.toLowerCase() === "sr" || curreny.toLowerCase() === "SR")
{
    result = parseFloat(amount) * 28;
    document.write("  Total Currency in PKR: ", + result);
}
else{
    document.write("Unsupported currency."); "<br>"
}

var num1 = prompt("Enter any number:");
var num2 = parseInt (num1) + parseInt (5);
var num3 = parseInt (num2) * parseInt (10);
var num4 = parseInt (num3) / parseInt (2);
document.write( " Result: ",num4 ,"<br>");

var year = prompt(" Enter Current year");
document.write(" Current Year: ", year, "<br>");
var birth = prompt("Enter your birth year");
document.write(" Birth Year: ", birth, "<br>");
var result = parseInt (year) - parseInt (birth);
document.write(" Your Age is: ", result, "<br>" );

var r = prompt("Radius of a circle:");
document.write(" Radius of a circle: ", r, "<br>");
$ = 3.142 ;
var circum = parseFloat (2) * parseFloat ($) * parseFloat (r); "<br>"
document.write(" The circumference is: ", circum, "<br>");
var a = parseFloat ($) * parseFloat (r * r);
document.write(" The area: ", a, "<br>");

var snack = prompt("Enter your favourite snack");
document.write(" Favourite Snack: ", snack, "<br>");
var age = prompt("Enter your current age");
document.write(" Current age: ", age, "<br>");
var Mage = prompt("Enter your maximum age");
document.write(" Estimated Maximum Age: " + Mage + "<br>");
var per = prompt("Amount of snacks per day");
document.write("Amount of snacks per day: " + per + "<br>");
var result = parseFloat (Mage) - parseFloat (age) ; "<br>"
var result2 = parseFloat (result) * parseFloat (per); "<br>"
document.write(" You will need " + result2 + " chocolate chip to last you until the ripe old age of " + Mage + "<br>" );
