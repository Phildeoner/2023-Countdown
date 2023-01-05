// Set Count Down date
let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update count down timer every 1 second
let timeUpdate = setInterval(function() {

    // Get the current date and time
    let currentTimeAndDate = new Date().getTime();
  
    // Find the interval between currentTime and the countDownDate
    let interval = countDownDate - currentTimeAndDate;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);
  
    // Display the time.
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    // If the count down is finished, write some text
    if (interval < 0) {
        clearInterval(timeUpdate);
        document.getElementById("days").innerHTML = 000;
        document.getElementById("hours").innerHTML = 00;
        document.getElementById("mins").innerHTML = 00;
        document.getElementById("secs").innerHTML = 00;
        document.getElementById("timeUp").innerHTML = "🎇HAPPY NEW YEAR🎇";
    }
  }, 1000);
