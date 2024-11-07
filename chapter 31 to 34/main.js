var currentdate =  new Date();
var dayofindex = currentdate.getDay()
var date = currentdate.getDate();
var month = currentdate.getMonth() + 1;
var year = currentdate.getFullYear();
var hour = currentdate.getHours();
var minutes = currentdate.getMinutes();
var seconds = currentdate.getSeconds();

var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "fri", "Sat"];
var dayofweek = week[dayofindex];

console.log("Date:" ,date);
console.log("Month:" ,month);
console.log("Year:" ,year);
console.log("Hour:" ,hour);
console.log("Minutes:" ,minutes);
console.log("Second:" ,seconds);
console.log("Day of the week:" ,dayofweek);

var currentmonth = new Date();
var dayofindex = currentmonth.getMonth();
console.log(dayofindex);

var month = ["jan", "Feb", "Mar", "April", "May", "june", "july", "Aug", "Sep", "Oct", "Nov", "Dec"];
var month1 = month[dayofindex];
console.log("Current Month:" ,month1);

var currentday = new Date();
var dayofindex = currentday.getDay();

var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
var day1 = day[dayofindex];
console.log("Today is "  ,day1);
if ("sat" === day1 || "sun" ===day1){
    console.log("Its fun day");
}
else {
    console.log("Its work day");
}

var currentdate = new Date();
var date = currentdate.getDate();
console.log(date);
if(date <= "15"){
    console.log("First fifteen days of the month");
}
else{
    console.log("Last fifteen days of the month");
}

var time = new Date();
var time1 = time.getTime();
console.log("Elapsed miliseconds since january 1, 1970: " ,time1);
var minutes = Math.floor(time1 / 60000);
console.log("Elapsed minutes since January 1, 1970: " ,minutes);

var currenttime = new Date();
var time = currenttime.getHours();
console.log(time);
if (time >= "12"){
    console.log("Its Pm");
}
else{
    console.log("Its Am");
}

var laterdate = new Date(2020, 11, 31);
console.log(laterdate);

var firstRamadan = new Date(2015, 5, 18);
var currentdate = new Date();
var timediference = currentdate - firstRamadan ;
var daypasses = Math.floor(timediference / 1000 * 60 * 60 *24);
console.log("Day pass since first ramadan: " ,daypasses);

var later = new Date (2015, 0, 1);
var currentdate = new Date();
var user = currentdate - later;
var let = Math.floor(user / 1000);
console.log("Elapsed Seconds Between January 1, 2015 and Now: " ,let);

var date = new Date();
console.log(date);

var currentdate = new Date(); 
var hour = currentdate.getHours(); 
currentdate.setHours(hour + 1);
console.log(currentdate); 

var date = new Date();
console.log(date);

var currentdate = new Date();
var year = currentdate.getFullYear();
currentdate.setFullYear(year - 100);
console.log(currentdate);

var age = prompt("Enter your age");
var currentdate = new Date();
var year = currentdate.getFullYear();
var birth = year - age ;
console.log("Your age is " , age);
console.log("Your birth year is " ,birth);

var name = prompt("Enter your name");
console.log("Customer Name: " ,name);
var currentdate = new Date();
var dayofindex = currentdate.getMonth();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
var month1 = month[dayofindex];
console.log("Current Month: " ,month1);
var unit = prompt("Enter your units");
var unit1 = parseFloat(unit);
console.log("Number of units: " ,unit1);
var charges = 16;
console.log("Charges per unit: " ,charges);
var chargesunit = unit1 * charges;
console.log("Net Amount Payable (within Due Date): " ,chargesunit);
var latecharges = 350;
console.log("Late payment surcharge: " ,latecharges);
var plus = chargesunit + latecharges;
console.log("Gross Amount Payable (after Due Date): " ,plus);


