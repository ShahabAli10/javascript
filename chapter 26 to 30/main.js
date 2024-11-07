var user = prompt("Enter any number for round off");
var user1 = Math.round(user);
console.log("Round off: " ,user1);
var user = prompt("Enter any number for floor off");
var user2 = Math.floor(user);
console.log("Floor off: "  ,user2);
var user = prompt("Enter any number for ceil off");
var user3 = Math.ceil(user);
console.log("Ceil off: "  ,user3);

var user = prompt("Enter any number for round off");
var negativenumber = -user;
var user1 = Math.round(negativenumber);
console.log("Round off: " ,user1);
var user = prompt("Enter any number for floor off");
var negativenumber = -user;
var user2 = Math.floor(negativenumber);
console.log("Floor off: ", user2);
var user = prompt("Enter any number for ceil off");
var negativenumber = -user;
var user3 = Math.ceil(negativenumber);
console.log("Ceil off: " ,user3);

var user = -4;
var user2 = Math.abs(user);
console.log(user2);
var user = 5;
var user2 = Math.abs(user);
console.log(user2);

var user = Math.random()*6;
var user1 = Math.round(user);
console.log("Random dice value: "  ,user1);

var user = Math.random() < 0.5 ? "Head" : "tail" ;
console.log(user);

var number = Math.random()*100;
var number1 = Math.round(number);
console.log("Random nnumber between 1 and 100: " ,number1);

var user = prompt("Enter your weigth in kilogram");
var user1 = parseFloat(user);
console.log("The weight of user is " , user1 , "kilograms");

var random = Math.random()*10;
var round = Math.round(random);
var user = prompt("Enter any number between 1  to 10");
if (user == round ){
    console.log("Congrats");    
}
else {
    console.log( "Try Again!" , "The number is" ,round, "and your number is" ,user,);
}