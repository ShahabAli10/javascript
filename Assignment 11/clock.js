var valid = setInterval (function() {
    var currentdate = new Date();
    var hour = currentdate.getHours();
    var min = currentdate.getMinutes();
    var sec = currentdate.getSeconds();
    document.body.innerHTML = hour + " : " + min + " : " +  sec + " sec ";
    }, 1000);