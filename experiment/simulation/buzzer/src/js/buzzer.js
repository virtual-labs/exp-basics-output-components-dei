// BUZZER JAVASCRIPT

let image_tracker_buzzer = "dis";

// POWER SWITCH

function changePower() {
  let image = document.getElementById("ifimg2");
  const pushButton = document.getElementById("buzzerpushbutton");
  const startBtn = document.getElementById("startBtn");
  
  if (image_tracker_buzzer == "dis") {
    image.src = "./src/images/buzzer/buzzer_off.png";
    startBtn.innerHTML = '<span class="play-icon">\u23f9</span> Stop Simulation';
    startBtn.className = "control-btn stop-btn";
    image_tracker_buzzer = "off";
    if (pushButton) pushButton.style.display = "inline-block";
  } else {
    image.src = "./src/images/buzzer/buzzer_static.png";
    startBtn.innerHTML = '<span class="play-icon">\u25b6</span> Start Simulation';
    startBtn.className = "control-btn start-btn";
    image_tracker_buzzer = "dis";
    if (pushButton) pushButton.style.display = "none";
    
    // Stop audio if playing
    let audioElement = document.getElementById("myAudio");
    if (audioElement && !audioElement.paused) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  }
}

// IMAGE SWITCH

function changeBuzzerImage() {
  let image = document.getElementById("ifimg2");
  if (image_tracker_buzzer == "off") {
    image.src = "./src/images/buzzer/buzzer_on.gif";
    image_tracker_buzzer = "on";
  } else if (image_tracker_buzzer == "on") {
    image.src = "./src/images/buzzer/buzzer_off.png";
    image_tracker_buzzer = "off";
  }
}

// AUDIO SWITCH

function togglePlay() {
  let audioElement = document.getElementById("myAudio");
  if (audioElement.paused) {
    audioElement.play();
    audioElement.loop = true;
  } else {
    audioElement.pause();
  }
}
