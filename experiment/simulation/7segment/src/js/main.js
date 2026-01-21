let image_tracker = "dis";

function changePower() {
  const image = document.getElementById("ifimg");
  const startBtn = document.getElementById("startBtn");

  if (image_tracker === "dis") {
    image.src = "./src/images/7sOn.gif";
    startBtn.innerHTML = '<span class="play-icon">⏹</span> Stop Simulation';
    startBtn.classList.remove("start-btn");
    startBtn.classList.add("stop-btn");
    image_tracker = "on";
  } else {
    image.src = "./src/images/7sOff.png";
    startBtn.innerHTML = '<span class="play-icon">▶</span> Start Simulation';
    startBtn.classList.remove("stop-btn");
    startBtn.classList.add("start-btn");
    image_tracker = "dis";
  }
}

function changeImage() {
  // No button interaction needed for 7-segment display
  // The display runs automatically when simulation is on
}
