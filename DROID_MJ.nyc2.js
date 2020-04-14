var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "404";
    document.getElementById("hours").innerHTML = "404";
    document.getElementById("minutes").innerHTML = "404";
    document.getElementById("seconds").innerHTML = "404";
    document.getElementById("d").innerHTML = "404";
    document.getElementById("h").innerHTML = "404";
    document.getElementById("m").innerHTML = "404";
    document.getElementById("s").innerHTML = "404";
    document.getElementById("lo1").innerHTML = "ERROR";
    document.getElementById('te').style.animationPlayState='pause';
    document.getElementById('te').innerHTML = 'Thats An Error, Thats All I Know';
    document.getElementById('in').style.background = 'transparent';
    document.getElementById('te').style.background = 'transparent';
    document.querySelector('body').style.background = '#212121';
  }
  else {
    document.getElementById("lo1").innerHTML = "Loading...";
    document.getElementById('te').style.animationPlayState = 'running';
  }
}, 1000);

var hi=window.alert("Hi");
var greeting=window.alert("Happy New Year");
var prayer=window.alert("May we witness more of it in life");
var code=window.alert("Happy new year, Happy Coding</>");