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

// Variables ================================================================

//Object question for quiz game//

var questions = {
    q1: ["Nakia was born in Wakanda", "t"],
};

//We start the game with a score of 0
var score = 0; 
// To hold the index of a current question 
var questionIndex = 0; 
//Array of questions 
var questionsArray = [questions.q1];

//Functions ==================================================================
// Function to render questions
function renderQuestion() {


}

