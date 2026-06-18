let time = document.querySelector(".time");
let weekDay = document.querySelector(".weekDay");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");


function fun(ele) {
    if (ele < 10) {
        return "0" + ele;
    }
    return ele;
}

function displayDate() {
    const date = new Date();
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekDay.textContent = weekDays[date.getDay()]  + ",";
    day.textContent = fun(date.getDate());
    month.textContent = date.toLocaleString("default", { month: "long" });
    year.textContent = date.getFullYear();
}

function displayTime() {
    const date = new Date();
    if (date.getHours() <= 12) {
        let currHour = fun(date.getHours());
        const currMin = fun(date.getMinutes());
        const currSec = fun(date.getSeconds());
        const currTime = `${currHour}:${currMin}:${currSec} AM`;
        time.textContent = currTime;
    } else if (date.getHours() > 12) {
        let currHour = fun(date.getHours() - 12);
        const currMin = fun(date.getMinutes());
        const currSec = fun(date.getSeconds());
        const currTime = `${currHour}:${currMin}:${currSec} PM`;
        time.textContent = currTime;
    }
}

function mainFun() {

    displayTime();
    displayDate();
}

setInterval(mainFun, 1000);
