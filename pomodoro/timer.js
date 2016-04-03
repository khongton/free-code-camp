var interval;

function incrementTimer(time) {
  var newTime = parseInt($("#" + time).text(), 10) + 1;
  if (newTime < 1) 
    newTime = 1;
  var display = document.querySelector("#" + time);
  display.textContent = newTime;
}

function decrementTimer(time) {
  var newTime = parseInt($("#" + time).text(), 10) - 1;
  if (newTime < 1) 
    newTime = 1;
  var display = document.querySelector("#" + time);
  display.textContent = newTime;
}

function Timer(duration, display) {
  var audioFile = 'http://www.oringz.com/oringz-uploads/sounds-990-system-fault.mp3';
  var audio = new Audio(audioFile);
  
  var timer = duration, minutes, seconds;
  interval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    display.textContent = minutes + ":" + seconds;
    
    if (--timer < 0) {
      audio.play();
      startBreak();
    }
    }, 1000);
  }

function stopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

function startTimer() {
  var pomodoroTimer = parseInt($("#pomodoro_time").text(), 10);
  var minutes = 60 * pomodoroTimer;
  var display = document.querySelector("#timer");
  Timer(minutes, display);
}

function startBreak() {
  var breakTimer = parseInt($("#break_time").text(), 10);
  var minutes = 60 * breakTimer;
  var display = document.querySelector("#timer");
  audio.stop();
  Timer(minutes, display);
}