// FANCY SURFING GUY

const randomColor = Math.floor(Math.random()*16777215).toString(16);

document.getElementById("surfer").style.backgroundColor = "#" + randomColor;
document.getElementById("surfer").style.borderColor = "#" + randomColor;


// TIMER

var scaleText = 1;

const countdown = () => {
    const countDate = new Date("December 25, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000;
    const minutes = seconds*60;
    const hours = minutes*60;
    const days = hours*24;

    const calcDays = Math.floor(gap/days);
    const calcHours = Math.floor(gap/hours);
    const calcMinutes = Math.floor(gap/minutes);
    const calcSeconds = Math.floor(gap/seconds);

    if (scaleText ===1) {
        document.querySelector(".time").innerText = calcSeconds;
    }
    else if (scaleText ===2) {
        document.querySelector(".time").innerText = calcMinutes;
    }
    else if (scaleText ===3) {
        document.querySelector(".time").innerText = calcHours;
    }
    else if (scaleText ===4) {
        document.querySelector(".time").innerText = calcDays;
    }
    
}

setInterval(countdown, 1000);


// SHOWN SCALE

document.querySelector(".counter").addEventListener('click', () => {if (scaleText === 1){
        document.querySelector("#scaleText").innerText = "minutes";
        scaleText = 2;
        console.log(scaleText);
    }
    else if (scaleText === 2) {
        document.querySelector("#scaleText").innerText = "hours";
        scaleText = 3;
        console.log(scaleText);
    }
    else if (scaleText ===3) {
        document.querySelector("#scaleText").innerText = "days";
        scaleText = 4;
        console.log(scaleText);
    }
    else if (scaleText ===4) {
        document.querySelector("#scaleText").innerText = "seconds";
        scaleText = 1;
        console.log(scaleText);
    }
})

