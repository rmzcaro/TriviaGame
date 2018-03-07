/*  Pseudocode 
Create timer: start and what to do when time is up

        (See simple timer activity)
    - Hold number counter
    -set interval ID
    -decrement function, decreases number by 1 
    - run the stop function 
    - alert user that time is up
    -clear interval

User input for each question which calculates wrong, right
Doesn't allow for more than one input 

    - see questiongame 
    - identify variable
    - id object questions
    - start with score of 0 
    - index
    - array of  questions
    - function to render questions
    - determine in right / wrong

A counter keeps track of answers

Create background and questions 
*/ 

//CODE BEGINS HERE

  //Var that will hold interval that runs stopwatch
  var intervalId;

// Prevents clock from speeding up unnecessarily 
var clockRunning = false;

//Stopwatch Object
var stopwatch = {
    time: 0,

reset: function(){

    stopwatch.time = 0;

    //Display div to 00
    $("display").text("00");
},

start: function() {
    // use setInterval to start the count here and set clock to running
    if(!clockRunning){
        intervalId = setInterval(stopwatch.count, 10);
        clockRunning = true;
    }
},
stop: function() {
    //use clearInterval to  stop the count here 
    clearInterval(intervalId);
    clockRunning = false;
},
count: function(){
    //Increment time 
    stopwatch.time++;

    //Get the current time
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    //Use variable created to show the converted tim in display
    $("display").text(converted);
},
timeConverter: function(t){
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    if (minutes ===0){
        minutes ="00";
    }

    else if (minutes < 10){
        minutes = "0" + minutes;
    }
    return "" + seconds;
}



}
// Variables ================================================================

//Object question for quiz game//

$("#submitBtn").on("click", function () {
    alert("submitted");


//We start the game with a score of 0
var score = 0; 
// To hold the index of a current question 
var questionIndex = 0; 
//Array of questions 
var questionsArray = [questions.q1, questions.q2];

//Functions ==================================================================

// Function to render questions
// function renderQuestion() {
// if (questionIndex <= (questionsArray.length - 1)) {
//     document.querySelector("#question").innerHTML = questionsArray[questionIndex][0];
// }

}

//Function that updates the score
function updateScore(){
    document.querySelector("#score").innerHTML = "Score: " + score;

}

//PROCESS 

//Calling function to start the game
renderQuestion();
updateScore();

document.onkeyup = function(event) {

    //if there are not more questions, stop the function 
    if (questionIndex === questionsArray.length) {
        return;
    }

    /*Identify which key was pressed, make it lowercase, set it to user input
    variable */
    var userInput = String.fromCharCode(event.which).toLowerCase();

    //Only run this code if "t" or "f" were pressed 
    if (userInput ==="t" || userInput ==="f") {
    //if correct answer, increase and update score
    if(userInput === questionsArray[questionIndex][1]){
    score++;
    updateScore();

    }

    //Incremenet the questionIndex variable and call the renderQuestion function
    questionIndex++;
    renderQuestion();

    };

}):
