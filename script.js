let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

let timeUpdate = setInterval(function() {
    let currentTimeAndDate = new Date().getTime();
    let interval = countDownDate - currentTimeAndDate;
  
    let days = Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    if (interval < 0) {
        clearInterval(timeUpdate);
        days = 000;
        hours = 00;
        minutes = 00;
        seconds = 00;
        document.getElementById("timeUp").innerHTML = "🎇HAPPY NEW YEAR🎇";
    }
  }, 1000);
