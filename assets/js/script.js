var timer = 60;

var body = document.body;
var timeEl = document.querySelector(".time");
var quizEl = document.querySelector(".quiz");
var beginButton = document.querySelector("#begin");
var h2El = document.createElement("h2");
var pEl = document.createElement("p");

beginButton.addEventListener("click", function() {
    setTime();
    beginQuiz();
});

function setTime() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = "Time Remaining: " + timer;
        
        if (timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

function beginQuiz() {
    quizEl.textContent = "";
    h2El.textContent="Question 1"
    pEl.textContent = "Hello World";
    quizEl.appendChild(h2El);
    quizEl.appendChild(pEl);
};