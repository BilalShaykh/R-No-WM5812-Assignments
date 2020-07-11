var mins = 0;
var secs = 0;
var msecs = 0;
var mseconds = document.getElementById('msecs')
var seconds = document.getElementById('secs');
var minutes = document.getElementById('mins');
var time;
function timer() {
    msecs++;
    mseconds.innerHTML = msecs;
    if (msecs >= 100) {
        secs++;
        seconds.innerHTML = secs;
        msecs = 0;
    }
    else if (secs >= 60) {
        mins++;
        minutes.innerHTML = mins;
        secs = 0;
    }
}

function start() {
    time = setInterval(timer, 10);
    document.getElementById("startbutton").disabled = true;
}

function pause() {
    clearInterval(time);
    document.getElementById("startbutton").disabled = false;

}

function reset() {
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    mseconds.innerHTML = 0;
    document.getElementById("startbutton").disabled = false;

}

