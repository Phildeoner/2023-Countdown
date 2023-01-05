let getDays = document.getElementById("days");
let getHours = document.getElementById("hours");
let getMins = document.getElementById("mins");
let getSecs = document.getElementById("secs");

// Set Count Down date
let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update count down timer every 1 second
let timeUpdate = updateTime(function() {

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
    getDays.innerHTML = days;
    getHours.innerHTML = hours;
    getMins.innerHTML = minutes;
    getSecs.innerHTML = seconds;
    
  }, 1000);