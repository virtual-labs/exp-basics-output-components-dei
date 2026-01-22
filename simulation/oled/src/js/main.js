let image_tracker = "dis";

function changePower() {
  let image = document.getElementById("ifimg");
  const pushButton = document.getElementById("pushbutton");
  const startBtn = document.getElementById("startBtn");
  
  if (image_tracker == "dis") {
    image.src = "./src/images/led/oled_on.gif";
    startBtn.innerHTML = '<span class="play-icon">⏹</span> Stop Simulation';
    startBtn.className = "control-btn stop-btn";
    image_tracker = "off";
    if (pushButton) pushButton.style.display = "inline-block";
  } else {
    image.src = "./src/images/led/oled_off.gif";
    startBtn.innerHTML = '<span class="play-icon">▶</span> Start Simulation';
    startBtn.className = "control-btn start-btn";
    image_tracker = "dis";
    if (pushButton) pushButton.style.display = "none";
  }
}

function changeImage() {
  // Placeholder for button interaction if needed
}



