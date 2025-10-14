const launchDay = new Date("2026-12-31T00:00:00").getTime();

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

function clockUpdate() {
    const now = new Date().getTime();
    const diff = launchDay - now;
    
    if (diff <= 0) {
        day.textContent = "00";
        hour.textContent = "00";
        minute.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timer)
        return
    }

    const dayCalc = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hourCalc = Math.floor((diff % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    const minuteCalc = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondCalc = Math.floor((diff % (1000 * 60)) / 1000);
    
    
    day.textContent = dayCalc.toString().padStart(2, "0");
    hour.textContent = hourCalc.toString().padStart(2, "0");
    minute.textContent = minuteCalc.toString().padStart(2, "0");
    seconds.textContent = secondCalc.toString().padStart(2, "0");
}


const timer = setInterval(clockUpdate, 1000);

clockUpdate();

const msgBox = document.getElementById("message-box");

if(msgBox) {
    setTimeout(() => {
        msgBox.classList.add("fade-out");
    }, 8000);

        setTimeout(() => {
      msgBox.style.display = "none";
    }, 11000);
}