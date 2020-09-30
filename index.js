/*

var countDownDate = new Date("Sep 28, 2020 15:00:00").getTime();

var countDownfunction = setInterval(function() {
    
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance %(1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance %(1000*60)) / (1000*60));
    var seconds = Math.floor((distance %(1000*60))/ 1000);
    
    document.getElementById("demo").innerHTML = days + "d: " + hours + "h: "+ minutes + "m: " + seconds+"s ";

    if(distance < 0){
        clearInterval(countDownfunction);
        document.getElementById("demo").innerHTML = "Done";
    }
}, 1000);

*/



var count = new Date("Sep 30, 2020 17:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d / (1000*60*60*24));
    var hours = Math.floor((d %(1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((d %(1000*60*60)) / (1000*60));
    var seconds = Math.floor((d %(1000*60))/ 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(d <= 0){
        clearInterval(x);
    }
}, 1000);