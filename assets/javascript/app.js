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

// Clock
var counter= 0; 
var intervalId = 0;
var timeCounter = 30; 

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

// ** updating score may need to be added

// MAIN LOGIC 

// START THE GAME 
$("#start").on("click", function(event) {
    
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

// TIMER BEGINS HERE 
 
 function clock() {
    // every second show time left
    intervalId = setInterval(timeLeft, 1000);

    function timeLeft(){
        if (timeCounter === 0) {
            clearInterval(intervalId);
            // outOfTime();
        } else if (timeCounter > 0 ){
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