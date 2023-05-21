var timer = 75;
var timerStop = false;

var body = document.body;
var timeEl = document.querySelector(".time");
var quizEl = document.querySelector(".quiz");
var beginButton = document.querySelector("#begin");
var h2El = document.createElement("h2");
var pEl = document.createElement("p");

var buttonEl1 = document.createElement("button");
var buttonEl2 = document.createElement("button");
var buttonEl3 = document.createElement("button");
var buttonEl4 = document.createElement("button");

var questions = [];
var currentQuestion = 0;
var isCorrect = false;
questions.push({ques : "Commonly used datatypes DO NOT include:", ans1 : "1. strings", ans2 : "2. booleans", ans3 : "3. alerts", ans4 : "4. numbers", correctAns : "3"});

beginButton.addEventListener("click", function() {
    setTime();
    displayQuiz(currentQuestion);
});

buttonEl1.addEventListener("click", function() {
    if (questions[currentQuestion].correctAns === "1") {
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
});

function setTime() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = "Time: " + timer;
        
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
};

function endQuiz() { 
    quizEl.textContent = "";
    h2El.textContent = "TEST OVER";
    pEl.textContent = "Your score is " + timer;
    stopTime();
    quizEl.appendChild(h2El);
    quizEl.appendChild(pEl);
};