// Timer variables
var timer = 75;
var timerStop = false;

// HTML elements
var body = document.body;
var timeEl = document.querySelector(".time");
var quizEl = document.querySelector(".quiz");
var viewScores = document.querySelector(".viewScores");
var beginButton = document.querySelector("#begin");
var h2El = document.createElement("h2");
var p1El = document.createElement("p");
var hrEl = document.createElement("hr");
var p2El = document.createElement("p");
var labelEl = document.createElement("label");
var inputEL = document.createElement("input");
var submitEl = document.createElement("button");

var buttonEl1 = document.createElement("button");
var buttonEl2 = document.createElement("button");
var buttonEl3 = document.createElement("button");
var buttonEl4 = document.createElement("button");

// Variables for storing questions
var questions = [];
var currentQuestion = 0;
var isCorrect = false;

// Add all the questions and their correct answers to an array
questions.push({
    ques : "Commonly used datatypes DO NOT include:",
    ans1 : "1. strings",
    ans2 : "2. booleans",
    ans3 : "3. alerts",
    ans4 : "4. numbers",
    correctAns : 3
});

questions.push({
    ques : "The condition in an if/else statement is enclosed with ___________.",
    ans1 : "1. quotes",
    ans2 : "2. curly brackets",
    ans3 : "3. parenthesis",
    ans4 : "4. square brackets",
    correctAns : 3
});

questions.push({
    ques : "Arrays in JavaScript can be used to store ___________.",
    ans1 : "1. numbers and strings",
    ans2 : "2. other arrays",
    ans3 : "3. booleans",
    ans4 : "4. all of the above",
    correctAns : 4
});

questions.push({
    ques : "String values must be enclosed within ___________ when being assigned to variables.",
    ans1 : "1. commas",
    ans2 : "2. curly brackets",
    ans3 : "3. quotes",
    ans4 : "4. parenthesis",
    correctAns : 3
});

questions.push({
    ques : "A very useful tool used during development and debugging for printed content to the debugger is:",
    ans1 : "1. JavaScript",
    ans2 : "2. terminal/bash",
    ans3 : "3. for loops",
    ans4 : "4. console.log",
    correctAns : 4
});

// Button for starting the quiz
beginButton.addEventListener("click", function() {
    setTime();
    displayQuiz(currentQuestion);
});

// Buttons for answers
buttonEl1.addEventListener("click", function() {
    compareAnswers(1);
});

buttonEl2.addEventListener("click", function() {
    compareAnswers(2);
});

buttonEl3.addEventListener("click", function() {
    compareAnswers(3);
});

buttonEl4.addEventListener("click", function() {
    compareAnswers(4);
});

// Button for submitting high scores
submitEl.addEventListener("click", function() {
    var highScores = {
        initials: inputEL.value,
        score: timer
    };

    localStorage.setItem("highScores", JSON.stringify(highScores));
    showScores();
});

// Link for viewing high scores
viewScores.addEventListener("click", function() {
    showScores();
});

// Compares the answer button clicked to the question's answer
function compareAnswers(i) {
    if (questions[currentQuestion].correctAns === i) {
        isCorrect = true;
    }
    else {
        isCorrect = false;
        timer = timer - 10;
    }
    
    currentQuestion++;
    if (currentQuestion === questions.length) {
        endQuiz();
    }
    else {
        displayQuiz(currentQuestion);
    }
}

// Sets the timer interval and stops it when the quiz is done or the timer hits 0
function setTime() {
    var timerInterval = setInterval(function() {
        if (!timerStop) {
            timer--;
            timeEl.textContent = "Time: " + timer;
        }
        
        if (timer <= 0 || timerStop === true) {
            clearInterval(timerInterval);
            timeEl.textContent = "";
            endQuiz();
        }
    }, 1000);
};

function stopTime() {
    timerStop = true;
};

// Displays the questions and answers
function displayQuiz(currentQuestion) {
    quizEl.textContent = "";
    h2El.textContent = questions[currentQuestion].ques;
    buttonEl1.textContent = questions[currentQuestion].ans1;
    buttonEl2.textContent = questions[currentQuestion].ans2;
    buttonEl3.textContent = questions[currentQuestion].ans3;
    buttonEl4.textContent = questions[currentQuestion].ans4;
    quizEl.appendChild(h2El);
    quizEl.appendChild(buttonEl1);
    quizEl.appendChild(buttonEl2);
    quizEl.appendChild(buttonEl3);
    quizEl.appendChild(buttonEl4);

    if (currentQuestion !== 0) {
        if (isCorrect) {
            p2El.textContent = "Right!";
        }
        else {
            p2El.textContent = "Wrong";
        }
        quizEl.appendChild(hrEl);
        quizEl.appendChild(p2El);
    }
};

// Displays the end of quiz message and lets the user enter high scores
function endQuiz() { 
    quizEl.textContent = "";
    h2El.textContent = "All done!";
    p1El.textContent = "Your final score is " + timer;
    labelEl.textContent = "Enter initials:";
    submitEl.textContent = "Submit";
    stopTime();
    quizEl.appendChild(h2El);
    quizEl.appendChild(p1El);
    quizEl.appendChild(labelEl);
    quizEl.appendChild(inputEL);
    quizEl.appendChild(submitEl);
};

// Parses and displays the high scores stored in local storage
function showScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    quizEl.textContent = "";
    h2El.textContent = "High Scores";
    p1El.textContent = highScores.initials + ": " + highScores.score;
    quizEl.appendChild(h2El);
    quizEl.appendChild(p1El);
};