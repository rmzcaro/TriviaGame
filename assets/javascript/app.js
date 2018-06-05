// upon load show that 5 seconds left 
window.onload = function () {
    $("#start").on("click", countdown.start)
};

// interval that holds countdown
var intervalId;

// prevents clock from speeding up unncecessarily 
var clockRunning = false;

//counter object 
var countdown = {

    time: 0,

    // if start is clicked start counter    
    start: function () {
        console.log(start + "line 20")
        // use the setInterval to start the counter 
        if (!clockRunning) {
            intervalId = setInterval(countdown.count, 1000);
            console.log(intervalId + "line 22")
            clockRunning = true;
        }
    },
    count: function () {
        // countdown
        countdown.time++;
        // get the current time
        var converted = countdown.timeConverter(countdown.time);
        console.log(converted);

        // if 10 seconds went by END THE GAME
        if (converted === "03") {
            clearInterval(intervalId);
            clockRunning = false;
        }

        // use the variable to show the converted time in the display div 
        $("#time-left").text(converted);
        if (converted === "03") {
            $("#time-left").text("TIME IS UP");
        }

    },
    timeConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return seconds;
    }
};