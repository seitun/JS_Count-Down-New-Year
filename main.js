var leftDays = document.getElementById("leftDays");
var leftHours = document.getElementById("leftHours");
var leftMin = document.getElementById("leftMin");
var leftSec = document.getElementById("leftSec");



// countdown to target date.

var currenTime;
var leftTime;
var targetDate = new Date(2019, 0, 1);


function updateTimer(t) {
    var now = new Date(t);
    var d = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();


    leftDays.innerText = d;
    leftHours.innerText = h;
    leftMin.innerText = m;
    leftSec.innerText = s;

}

function countDown() {
    set = setInterval(() => {
        currenTime = Date.now();
        leftTime = targetDate - currenTime;
        updateTimer(leftTime);
        countDown();
    }, 1000);

}
countDown();






