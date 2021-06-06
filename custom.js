const randomColor = Math.floor(Math.random()*16777215).toString(16);

document.getElementById("surfer").style.backgroundColor = "#" + randomColor;
document.getElementById("surfer").style.borderColor = "#" + randomColor;

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

    document.querySelector(".time").innerText = calcSeconds;
}

setInterval(countdown, 1000)


