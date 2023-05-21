var timer = 75;

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

beginButton.addEventListener("click", function() {
    setTime();
    beginQuiz();
});

function setTime() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = "Time: " + timer;
        
        if (timer === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "";
            endQuiz();
        }
    }, 1000);
};

function beginQuiz() {
    quizEl.textContent = "";
    h2El.textContent = "Commonly used datatypes DO NOT include:";
    buttonEl1.textContent = "1. strings";
    buttonEl2.textContent = "2. booleans";
    buttonEl3.textContent = "3. alerts";
    buttonEl4.textContent = "4. numbers";
    quizEl.appendChild(h2El);
    quizEl.appendChild(buttonEl1);
    quizEl.appendChild(buttonEl2);
    quizEl.appendChild(buttonEl3);
    quizEl.appendChild(buttonEl4);
};

function endQuiz() {
    quizEl.textContent = "";
    h2El.textContent = "TEST OVER";
    quizEl.appendChild(h2El);
};