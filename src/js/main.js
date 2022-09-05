var countDownDate = new Date("Oct 07, 2022 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("dd").innerHTML = days.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    document.getElementById("hh").innerHTML = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    document.getElementById("mm").innerHTML = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    document.getElementById("ss").innerHTML = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    // If the count down is finished, write some text
    if (distance < 0) {
        document.getElementById("countdown").className = "hidden";
        document.getElementById("reg-btn").className = "hidden";
    }
}, 1000);