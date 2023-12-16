const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("hour")
const ampmEl = document.getElementById("ampm")

function updateClock() {


    let h = new Date().getHours();
    let m = new Date().getHours();
    let s = new Date().getHours();
    let  ampm = "AM"

    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()  =>{
    updateClock();
    }, 1000)
}

