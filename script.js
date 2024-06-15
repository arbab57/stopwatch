const screen = document.querySelector('#screen');
const msScreen = document.querySelector('#mili-s')
const btnStop = document.querySelector('#btn-stop');
const btnStart = document.querySelector('#btn-start');
const btnReset = document.querySelector('#btn-reset');
const hand = document.querySelector('#clock-hand')
const btnSound = document.querySelector('#btn-sound')
const soundIcon = document.querySelector('#sound-icon')
const audio = document.querySelector('#audio');

let miliS = 0;
let seconds = 0;
let minutes = 0;
let hours  = 0;
let counter = null;
let xtr0 = "";
let xtr0M = "";
let xtr0H = "";
let xtr0MS1 = "";
let xtr0MS2 = "";
isOn = false;
let soundOn = true;


btnSound.addEventListener("click", function() {

if (soundOn) {
    soundIcon.classList.remove('fa-volume-up')
soundIcon.classList.add('fa-volume-xmark')
soundOn = false;
audio.src = "";
}else {
    soundIcon.classList.add('fa-volume-up')
    soundIcon.classList.remove('fa-volume-xmark')
    soundOn = true;
        audio.src = "Stopwatch Sound Effect.mp3";
        audio.play()
    
}

});

btnStart.addEventListener("click", function() {

    if (isOn) {
     null
    }else {
        counter = setInterval(stopwatch, 1000)
        isOn = true
        btnStart.classList.add('active')
        btnStop.classList.remove('active');
audio.play()
    }

});

btnStop.addEventListener("click", function() {

if (isOn) {
    clearInterval(counter);
    isOn = false;
    btnStop.classList.add('active');
    btnStart.classList.remove('active')
    audio.pause()
}

});

btnReset.addEventListener("click", function() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(counter);
    btnStart.classList.remove('active')
    btnStop.classList.remove('active');
    btnReset.classList.add('active');
    setTimeout(active1s, 100)
    seconds < 10 ? xtr0 = "0" : xtr0 = "";
minutes < 10 ? xtr0M = "0" : xtr0M = "";
hours < 10 ? xtr0H = "0" : xtr0H = "";
    screen.innerText = `${xtr0H}${hours}:${xtr0M}${minutes}:${xtr0}${seconds}`
    isOn = false;
    hand.style.transition = "0.3s"
    hand.style.transform = `rotate(0deg)`
    audio.pause()

});

function active1s() {
    btnReset.classList.remove('active');
}


function stopwatch() {

// miliS++;

// if (miliS === 1000) {
    seconds++;
    // miliS = 0;
// }
hand.style.transition = "1.1s linear"
hand.style.transform = `rotate(${seconds * 6}deg)` 
    
   if (seconds === 60) {
    minutes++;
    seconds = 0
   }
   if (minutes === 60) {
    hours++;
    minutes = 0;
   }

seconds < 10 ? xtr0 = "0" : xtr0 = "";
minutes < 10 ? xtr0M = "0" : xtr0M = "";
hours < 10 ? xtr0H = "0" : xtr0H = "";
miliS < 10 ? xtr0MS1 = "0" : xtr0MS1 = "";
miliS < 100 ? xtr0MS1 = "0" : xtr0MS1 = "";


    screen.innerText = `${xtr0H}${hours}:${xtr0M}${minutes}:${xtr0}${seconds}`
    // msScreen.innerText = `${xtr0MS2}${xtr0MS1}${miliS}`
    


}