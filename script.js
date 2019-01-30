var date = prompt("M D,Y H:M:S - month day,year hours:minutes:seconds");

var count = new Date(date).getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d/(1000*60*60*24));
    var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((d%(1000*60*60))/(1000*60));
    var seconds = Math.floor((d%(1000*60))/(1000));

    document.getElementById("days").innerHTML = days;

    if(hours < 10 && hours >= 0) {
        document.getElementById("hours").innerHTML = "0" + hours;
    } else {
        document.getElementById("hours").innerHTML = hours;
    }

    if(minutes < 10 && minutes >= 0) {
        document.getElementById("minutes").innerHTML = "0" + minutes;
    } else {
        document.getElementById("minutes").innerHTML = minutes;
    }

    if(seconds < 10 && seconds >= 0) {
        document.getElementById("seconds").innerHTML = "0" + seconds;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    }

    if(d <= 0) {
        clearInterval(x);
    }

},1000);