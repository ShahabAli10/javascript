// var valid = setInterval (function() {
// var currentdate = new Date();
// var hour = currentdate.getHours();
// var min = currentdate.getMinutes();
// var sec = currentdate.getSeconds();
// document.body.innerHTML = hour + " : " + min + " : " +  sec + " sec ";
// }, 1000);

var num = prompt("Enter the item1 price");
var num1 = prompt("Enter the item2 price");
var num2 = prompt("Enter the item3 price");
var num3 = prompt("Enter the item4 price");
var list = parseFloat(num);
var list1 = parseFloat(num1); 
var list2 = parseFloat(num2); 
var list3 = parseFloat(num3);
document.write(" Item1: ", list, "<br>");
document.write(" Item2: ", list1, "<br>");
document.write(" Item3: ", list2, "<br>");
document.write(" Item4: ", list3, "<br>");
var after = list + list1 + list2 + list3 ;
document.write("Total amount: ", after, "<br>");
var get = after * 15 / 100 ;
var final = after - get;
document.write("After 15% discount: ", final, "<br>");

function generateRandomString(){
var length = Math.floor(Math.random() * 3) + 10;
var result = '';
var small = 'abcdefghijklmnopqrstuvwxyz';
for (var i = 0; i < length ; i++){
var randomindex = Math.floor(Math.random() * small.length);
result += small[randomindex];
}
document.getElementById('randomString').textContent = result;
}

function generatelarge(){
    var length = Math.floor(Math.random() * 3) + 10;
    var result = '';
    var upper =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for ( var i = 0; i < length; i++){
        var randomindex = Math.floor(Math.random() * upper.length);
        result += upper[randomindex];
    } 
    document.getElementById('randomupper').textContent = result;
}

function generatenumber(){
    var length = Math.floor(Math.random() * 3) + 10;
    var result = '';
    var num = '123456789';
    for ( var i = 0; i < length; i++){
        var randomofindex = Math.floor(Math.random() * num.length);
        result += num[randomofindex];
    }
    document.getElementById('randomnumber').textContent = result;
}

function generatespecial(){
    var length = Math.floor(Math.random() * 3) + 10;
    var result = '';
    var sym = '!@#$%^&()<>\/';
    for ( var i = 0; i < length; i++){
        var randomindex = Math.floor(Math.random() * sym.length);
        result += sym[randomindex];
    }
    document.getElementById('randomspecial', "<br>").textContent = result;
}

function generatepassword(){
    var length = Math.floor(Math.random() * 3) + 10;
    result = '';
    var random = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&()<>\/';
    for (var i = 0; i < length; i++){
        var randomindex = Math.floor(Math.random() * random.length);
        result += random[randomindex];
    }
    document.getElementById('passowordgenerator', "<br>").textContent = result;
}

var item1 = 350;
var item2 = 600;
var item3 = 1000; 
var add = item1 + item2 + item3 ;
var tax = add + (add * 10 / 100 );
document.write("Price before tax: ", add, "<br>");
document.write("Price after tax: ", tax);
