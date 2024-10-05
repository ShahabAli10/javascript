var studentnames = [];
console.log(studentnames);
var studentnames = new Array();
console.log(studentnames);
var string = ["Apple", "Mango", "Grapes",];
console.log(string);
var  numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);
var booleanArray = [true, false, true];
var mixedArray = ["Hello", 42, true, "World", false,];
console.log(mixedArray);
var qualifications = ["SSc", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil.", "Phd"];
console.log(qualifications);

var input =prompt("Enter first student Name");
var  student = [input];
totalmark = 500 ;
var input1 = prompt("Enter first student mark");
var per = input1 / totalmark * 100
document.write( " Score of ", student + " is " + input1 , ". " , " Percentage " , per , "%" , "<br>");
var input2 =prompt("Enter second student Name");
var  student1 = [input2];
totalmark = 500 ;
var input3 = prompt("Enter second student mark");
var per1 = input3 / totalmark * 100
document.write( " Score of ", student1 + " is " + input3 , ". " , " Percentage " , per1 , "%" , "<br>");
var input4 =prompt("Enter second student Name");
var  student2 = [input4];
totalmark = 500 ;
var input5 = prompt("Enter third student mark");
var per2 = input5 / totalmark * 100
document.write( " Score of ", student2 + " is " + input5 , ". " , " Percentage " , per2 , "%" , "<br>");

var color = ["Red", "Blue", "Green",];
document.write(" Initial color: ", color , "<br>");
let user = prompt("Enter a color to add at the beginning:");
color.unshift(user);
document.write(" Updated color: ", color , "<br>");
let user1 = prompt("Enter a color to add at the end:")
color.push(user1);
document.write(" Updated color: ", color , "<br>");
color.unshift("Orange", "Yellow");
document.write(" Updated color: ", color, "<br>");
color.shift();
document.write( " Updated color: " ,color , "<br>");
color.pop();
document.write(" Updated color: ", color , "<br>");
let index = prompt("Enter the index where you want to add a new color (0 for start):");
let newcolor = prompt("Enter the color you want to add:");
color.splice(index, 0, newcolor);
document.write(" Updated: ", color, "<br>");
let index1 = prompt("Enter the index where you want to remove color (e.g, 0 means remove the first color):");
color.splice(index1,1);
document.write(" Updated: ", color ,"<br>");

var student = parseInt(prompt("Enter the number of student"));
var student1 = parseInt(prompt("Enter the number of student"));
var student2 = parseInt(prompt("Enter the number of student"));
var student3 = parseInt(prompt("Enter the number of student"));
var per = [student, student1, student2, student3];
console.log(" Score of Students: ", per);
per.sort();
console.log("Ordered Score of Students: ", per , "<br>");

var cities =  ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "<br>"];
document.write( " Cities: " ,cities);
var selectedcitieslits = ["Karachi", "Quetta", "<br>"];
document.write( " Selected cities list: " ,selectedcitieslits);

var arr =  ["This", "is", "my", "cat"];
document.write(" Array: ", arr, "<br>");
var result = arr.join(" ");
document.write(" String: ", result, "<br>");

var arr = ["Keyboard", "mouse", "printer", "monitor"];
var arr1 = [];
arr1.push("Keyboard", "mouse", "printer", "monitor");
console.log(arr)
console.log(arr1.shift());
console.log(arr1.shift());
console.log(arr1.shift());
console.log(arr1.shift());

var arr = ["Keyboard", "mouse", "printe", "monitor"];
console.log(arr);
arr.reverse();
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());

var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(  " Phone Manufacturers: <br>");
document.write('<select>',);
for (var i = 0; i < phone.length; i++){
document.write('<option value="' + phone[i] + '">' + phone[i] + '</option>');
}
document.write('</select>');







