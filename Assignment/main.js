function calculate() {
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const TotalMarks = parseFloat(document.getElementById("TotalMarks").value);

    const obtainedMarks = subject1 + subject2 + subject3;
    const percentage = (obtainedMarks / TotalMarks) * 100;

    let grade, Remark;
    if (percentage >= 80) {
        grade = "A-one";
        Remark = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        Remark = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        Remark = "You need to improve";
    } else {
        grade = "F";
        Remark = "Sorry";
    }

    document.getElementById("MarkSheet").innerHTML = `Percentage: ${percentage.toFixed(2)}% <br> Grade: ${grade} <br> Remark: ${Remark}`;
}

var User = prompt("Current Time (e.g., 6am, 1pm, 5pm)");
var time = User.toLowerCase();
var hours;


if (time.endsWith("am")) {
    hours = parseInt(time) === 12 ? 0 : parseInt(time); 
} else {
    hours = parseInt(time) === 12 ? 12 : parseInt(time) + 12; 
}


if (hours >= 6 && hours < 12) {
    alert("Good Morning");
} else if (hours >= 12 && hours < 17) {
    alert("Good Afternoon");
} else if (hours >= 17 && hours < 21) {
    alert("Good Evening");
} else {
    alert("Good Night");
}


// var User = prompt("Current Time e.g(6am, 1pm, 5pm)");
// var time = User.toLowerCase();

// if (time >=="6am" && time<"12pm"){
//     alert("Good Morning");
// }
// else if(time >=="12pm" && time<"5pm"){
//     alert("Good Afternoon");
// }
// else if (time >=="5pm" && time<"9pm"){
//     alert("Good Evening");
// }
// else{
//     alert("Good Night");
// }



