let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log(matrix[1][2]);
console.log(matrix);

for ( let i = 1; i <= 10; i++){
console.log(i);
}

var num = prompt("Enter the number for table");
var length = prompt("Enter legth multiplication table");

for ( let i = 1; i <= length; i++){
console.log(num + " X " + i + " = " + num * i  );
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for ( let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    console.log(" Element at index " + i + " " + fruits[i] ); 
}

var length = prompt("Enter the number");
console.log("Countinng:")
for ( let i = 1; i <= length; i++){
    console.log(i);
}

console.log("Reverse Counting:");
for (let i = length; i >=1; i--){
    console.log(i);
}

console.log("Even:");
for (let i = 0; i <= length; i +=2){
    console.log(i);
}

console.log("Odd:");
for (let i = 1; i <= length; i +=2){
    console.log(i);
}

console.log("Series:");
for (let i = 2; i <= length * 2; i +=2){
    console.log(i + "K");
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt( A +"Enter the item you are looking for:").toLowerCase();

if (A.includes(user)){
    alert(user + " is available in the list." );
}
else{
    alert(user + " is not available in the list.");
}

var num = 5;
var num2 = prompt("Enter the Range for mutliplie 5:");
for (let i = num ; i <= num2; i+=num){
    console.log(i);
}

var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (i = 0; i<A.length; i++){
    if (A[i]>largest){
        largest=A[i];
    }
}
console.log(largest);

var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (i=A.length-1 ; i>=0; i--){
    if (A[i]<smallest){
        smallest=A[i];
    }
}
console.log(smallest);


