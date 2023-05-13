// const btn = document.querySelector("button");

// const id = setInterval(function(name) {
//     console.log(`hello my name is ${name}`);
// }, 3000, "Zakarya");

// btn.onclick = () => {
//     clearInterval(id);
// }

const hours = document.querySelector(".hours");
const mins = document.querySelector(".minutes");
const secs = document.querySelector(".seconds");
const start = document.getElementById("start");
const stopp = document.getElementById("stop");
const reset = document.getElementById("reset");
let s = 0;
let m = 0;
let h = 0;
let id;

start.onclick = startCounting;
reset.onclick = resetTime;
stopp.onclick = stopCounting;

function startCounting() {
    id = setInterval(function(){
        changeTime();
        if(s === 59){
            s = 0;
            m++;
        } else if(m === 59){
            m = 0;
            h++;
        }
    }, 1000);
}

function changeTime() {
    secs.innerHTML = s < 10 ? '0'+s : s;
    mins.innerHTML = m < 10 ? '0'+m : m;
    hours.innerHTML = h < 10 ? '0'+h : m;
    s++;
}

function stopCounting() {
    clearInterval(id);
}

function resetTime() {
    initializeTime();
    stopCounting();
}

function initializeTime() {
    h = m = s = 0;
    secs.innerHTML = '00';
    mins.innerHTML = '00';
    hours.innerHTML = '00';
}

