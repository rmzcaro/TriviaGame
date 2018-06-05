// TRIVIA BEGINS HERE 

// object answers
var answers = {
    q1: ["2"],
    q2: ["4"]
};

// score of 0 
var score = 0; 

// var to hold the index of current answer
var answersIndex = 0; 

// array of answers 
var answersArray = [answers.q1, answers.q2];

// function that updates the score
function updateScore() {
    $("#score").append("score: line8 " + score);
}

// MAIN TRIVIA BEGINS HERE

// when a user presses a key, it will run the function 
$("#triviaGame").click(function() {
    console.log("clicked");

})
// document.onkeyup = function(event) {

    // // determine which key was pressed
    // var userInput = String.fromCharCode(event.which); 

    // // if correct answer, increase and update score
    // if (userInput === answersArray[answersIndex][0]) {
    //     console.log("clicked");

    // }

// }
// -------------------------------------------------

// TIMER BEGINS HERE 

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