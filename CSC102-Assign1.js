function countdown(){
    var currTime = 10;

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);
}