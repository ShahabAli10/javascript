var age=prompt("Your age");
alert(age);

// 2.Declare & initilaize a variable to keep track of how many times a visitor has visited a web page.
var visits = localStorage.visits ? Number(localStorage.visits) : 0;

visits++;

localStorage.visits = visits;


document.write("You have visited this site " + visits + " times.");

// 3. Declare a variable called birthyear & assign to it your birth year.
function showAlert(){
var birthyear="2004";
alert(birthyear);
}
var birthYear = 2004;
document.write("I was born in " + birthYear + ".");

// 4. Write a script in variables the fllowing information:
var name=prompt(" name? ")
document.write(name);
var product=prompt(" product ");
document.write(" Order " + product + " on XYZ clothing Store. " );
