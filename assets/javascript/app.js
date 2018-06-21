// VARIABLES 

// questions begin here 
var questions = {
    q1: ["Black Panther has a degree in: "],
    q2: ["What rare metal is mined in Wakanda?"]
};

// object answers
var answers = {
    q1: ["2"],
    q2: ["4"],
    q3: ["1"],
};

// answers correct
var score = 0;

// wrong answers
var wrong = 0;

// unanswered answers
var unanswered = 0;

// hold questions index
var questionIndex = 0;

questionsArray = [questions.q1, questions.q2];

// var to hold the index of current answer
var answersIndex = 0;

// array of answers 
var answersArray = [answers.q1, answers.q2];

// =======================================================

// MAIN TRIVIA BEGINS HERE

// if more questions render next question
function showQuestion() {
    if (questionIndex <= (questionsArray.length - 1))

    {
        $("#triviaGame").html(questionsArray[questionIndex][0]);
    }
    // if there aren't render the end of the game 
    else {
        gameOver();
    }
}

showQuestion();

// editing above 
// ===================================================

// when a user presses a key, it will run the function 
$("#triviaForm").click(function () {
    // determine which key was pressed
    var userInput = $("input[name=question1]:checked").val();
    console.log(userInput);

    // if no answer increase variable of no answers 
    if (!userInput) {
        // console.log(userInput);
        unanswered++;
        // if correct answer, increase and update score
    } else if (userInput === answersArray[answersIndex][0]) {
        console.log("correct!");
        score++;
        // updateScore();else {
    } else {
        // if anything else, this means it's incorrect and increate that variable 
        wrong++;
        console.log("incorrect!")
    };


    // END TEST
    // increment the answerIndex variable 
    answersIndex++;
});

// POTENTIALLY REMOVE
// function that showes the correct answers total score
// function updateScore() {
//     $("#score").append(score);
// }

// updateScore();


// -------------------------------------------------

// TIMER BEGINS HERE 

// upon load show that 5 seconds left 
window.onload = function () {
    $("#start").on("click", countdown.start);
};


// interval that holds countdown
var intervalId;

// prevents clock from speeding up unncecessarily 
var clockRunning = false;

var countdown = {

    time: 0,

    // if start is clicked start counter    
    start: function () {

        // use the setInterval to start the counter 

        if (!clockRunning) {
            intervalId = setInterval(countdown.count, 1000);
            // console.log(intervalId + "line 22")
            clockRunning = true;
        }
    },
    count: function () {
        // countdown
        countdown.time++;
        // get the current time
        var converted = countdown.timeConverter(countdown.time);
        // console.log(converted);

        // if 10 seconds went by END THE GAME
        if (converted === "05") {
            clearInterval(intervalId);
            clockRunning = false;
        }

        // use the variable to show the converted time in the display div 
        $("#time-left").text(converted);
        if (converted === "05") {
            var timeUp = $("#time-left").text("TIME IS UP");
            gameOver();
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


// function when game over
function gameOver() {
    $("#score").append("Total correct: " + score);
    $("#wrong").append("Total incorrect: " + wrong);
    // total unanswered
    $("#unanswered").append("Total unanswered: " + unanswered);


}