// answers correct
var score = 0;

// wrong answers
var wrong = 0;

// unanswered answers
var unanswered = 0;

// hold questions index
var questionIndex = 0;

// var to hold the index of current answer
var answersIndex = 0;

// Clock
var counter = 0;
var intervalId = 0;
var timeCounter = 30;

var trivia = [{
        // image: 
        q: "Black Panther has a degree in: ",
        choices: ["Chemistry", "Astronomy", "Computer science", "Physics"],
        correctAns: 3
    },
    {
        // image: 
        q: "What rare metal is mined in Wakanda?",
        choices: ["Iron", "Vibranium", "Copper", "Ore"],
        correctAns: 1
    },
    {
        // image: 
        q: "Black Panther married ",
        choices: ["Nakia", "Okoye", "Storm", "Gamora"],
        correctAns: 2
    }

];

// =======================================================

// MAIN LOGIC 

// START THE GAME 
$("#start").on("click", function (event) {
    $(this).hide();
    // answers correct
    var score = 0;

    // wrong answers
    var wrong = 0;

    // unanswered answers
    var unanswered = 0;

    // questions to show 
    showQuestion();

    // timer goes here
    clock();
});

// editing above 

// ===================================================

//------------------------------------------------
// TRIVIA QUESTIONS BEGIN HERE

// if more questions render next question
function showQuestion() {

    console.log("show question running");
    $("#question").html("<p class= 'text'>" + trivia[questionIndex].q + "</p>");

    // answers 
    answerInput = "<p class = 'answerChoice'>" + trivia[questionIndex].choices[0] +
        "</p> <p class = 'answerChoice'>" +
        trivia[questionIndex].choices[1] +
        "</p> <p class = 'answerChoice'>" +
        trivia[questionIndex].choices[2] +
        "</p> <p class = 'answerChoice'>" +
        trivia[questionIndex].choices[3] +
        "</p>";
    $("#answer").html(answerInput);
    console.log(answerInput + "at line 88");
} 

// showQuestion();

// user selects answer 
$("#answer").on("click", ".answerChoice", function (event) {
    // console.log("hi clicked")
    answerChoice = $(this).text();
    console.log(answerChoice);
    correctChoice = trivia[questionIndex].choices[trivia[questionIndex].correctAns];
    console.log(correctChoice);
    if (answerChoice === correctChoice) {
        correctGuess();
        clearInterval(intervalId);
        // increase wins
    } else if (answerChoice !== correctChoice) {
        // console.log("wrong")
        // increase answers wrong 
        wrongGuess();
        clearInterval(intervalId);

    }
});

// if correct guess 
function correctGuess() {
    score++;
    $("#time-left").hide();
    $("#question").empty();
    $("#answer").empty();
    gameHTML = "<h3 class = 'text-center timer-p'> Time Remaining: <span class = 'timer'> " + timeCounter + "</span></h3>" +
        "<h2 class = 'text-center'> Correct! <br> <br>The answer is: " + correctChoice + "</h2>";
    // console.log(gameHTML);
    $("#summary").html(gameHTML);

    setTimeout(bridge, 2500);
};

// bridges to next question or ends game 
function bridge() {
    // console.log(questionIndex);
    if (questionIndex < 3) {
        questionIndex++;
        // console.log(questionIndex);
        showQuestion();

        $("#summary").empty();
        $("#time-left").show();
        timeCounter = 30;
        clock();

        //     // THIS IS WHERE I LEFT OFF, I NEED THE NEXT QUESTION TO RENDER 
        //     // ONCE THE FIRST QUESTION HAS BEEN SUBMITTED 

        //     // $("#time-left").show();
        //     // timeCounter = 30; 
        //     // clock();

        //  }
        //   else {
        //     // endGame();
    } else {
        console.log("huh???")
    }
}

// if wrong guess 
function wrongGuess() {
    wrong++;
    $("#time-left").hide();
    gameHTML = "<h3 class = 'text-center timer-p'> Time Remaining:<span class = 'timer'>" + timeCounter + "</span></h3>" +
        "<h2 class = 'text-center'> Sorry, that's the wrong answer. <br> <br>The answer is: " + correctChoice + "</h2>";
    // console.log(gameHTML);
    $("#triviaGame").html(gameHTML);
};


//====================================================

// TIMER BEGINS HERE 

function clock() {
    // every second show time left
    intervalId = setInterval(timeLeft, 1000);

    function timeLeft() {
        if (timeCounter === 0) {
            clearInterval(intervalId);
            // outOfTime();
        } else if (timeCounter > 0) {
            timeCounter--;
        }
        $("#time-left").html(timeCounter);
    }
}


// function when game over
function gameOver() {
    $("#score").append("Total correct: " + score);
    $("#wrong").append("Total incorrect: " + wrong);
    // total unanswered
    $("#unanswered").append("Total unanswered: " + unanswered);


}