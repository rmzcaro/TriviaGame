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


// QUESTIONS

// var questionsArray = [
//     "Black Panther has a degree in: ",
//     "What rare metal is mined in Wakanda?"
// ];

// var answersArray = [
//     ["Chemistry", "Astronomy", "Computer science", "Physics"],
//     ["Iron", "Virbanium", "Copper", "Ore"]

// ]

// var correctArray = [
//     "D. Physics",
//     "B. Vibranium"
// ]
var trivia = [{
        // image: 
        q: "Black Panther has a degree in: ",
        choices: ["Chemistry", "Astronomy", "Computer science", "Physics"],
        correctAns: 3
    },
    {
        // image: 
        q: "What rare metal is mined in Wakanda?",
        choices: ["Iron", "Virbanium", "Copper", "Ore"],
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

    // timer goes here
    clock();
    // questions to show 
    showQuestion();
});

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

//------------------------------------------------
// TRIVIA QUESTIONS BEGIN HERE

// if more questions render next question
function showQuestion() {
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
}

// user selects answer 
$("#answer").on("click", ".answerChoice", function(event) {
    // console.log("hi clicked")
    answerChoice = $(this).text();
    console.log(answerChoice);
    correctChoice = trivia[questionIndex].choices[trivia[questionIndex].correctAns];
    console.log(correctChoice);
    if (answerChoice === correctChoice){
        correctGuess();
        clearInterval(intervalId);
        // increase wins
    } else if (answerChoice !== correctChoice) {
        // console.log("wrong")
        // increase answers wrong 
        // wrongGuess();
        clearInterval(intervalId);

    }
}); 

// if correct guess 

  function correctGuess(){
      score++;
      gameHTML = "<h3 class = 'text-center timer-p'> Time Remaining:<span class = 'timer'>" + timeCounter + "</span></h3>"
      + "<h2 class = 'text-center'> Correct! <br> <br>The answer is: " + correctChoice + "</h2>";
    // console.log(gameHTML);
    $("#triviaGame").html(gameHTML);
    }


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