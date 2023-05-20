var timer = 60;

var timeEl = document.querySelector(".time");
var beginButton = document.querySelector("#begin");

beginButton.addEventListener("click", function() {
    setTime();
});

function setTime() {
    var timerInterval = setInterval(function() {
        timer--;
        timeEl.textContent = timer;
        console.log(timer);
        if (timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}