// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

window.startStop = function startStop() {
    // console.log('Time started!!');
    if (!isRunning) {
        isRunning = true;
        // timer = setInterval(() => {  -----> Callback function
        // }, 1000);
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').textContent = 'Pause';
    } else {
        pause();
    }
}

function updateTime() {
    seconds++;
    // seconds += 60;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function pause() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startStop').textContent = 'Start';
}

window.reset = function reset() {
    // console.log("Reset clicked!!");
    pause();
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
}

function displayTime() {
    let display = document.querySelector('.timerDisplay');
    let formattedTime = `
    ${String(hours).padStart(2, '0')}:
    ${String(minutes).padStart(2, '0')}:
    ${String(seconds).padStart(2, '0')}
    `;
    // if(display) {
    display.textContent = formattedTime;
    // }
}

displayTime();