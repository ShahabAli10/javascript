function generate(){
    var length = Math.floor(Math.random() * 3) + 10;
    var result = '';

    var small = 'abcdefghijklmnopqrstuvwxyz';
    var large = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var number = '123456789';
    var symbol = '!@#$^&()\/';
    var characters = '';

    if (document.getElementById('small').checked){
        characters += small;
    }
    if (document.getElementById('large').checked){
        characters += large;
    }
    if (document.getElementById('number').checked){
        characters += number;
    }
    if (document.getElementById('symbol').checked){
        characters  += symbol;
    }
    
    if (characters === '') {
        document.getElementById('generate').textContent = "Please select an option.";
        return;
    }

    for (var i=0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    document.getElementById('generate').textContent=result;
}

function updateclock(){
var currenttime = new Date();
var hour  = currenttime.getHours();
var min = currenttime.getMinutes();
var sec = currenttime.getSeconds();
document.getElementById('hour').textContent = hour;
document.getElementById('min').textContent = min;
document.getElementById('sec').textContent = sec;
}
setInterval(updateclock, 1000);
updateclock();