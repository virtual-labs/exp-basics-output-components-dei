let image_tracker = "off";
function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/7sOn.gif";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "On";
  } else {
    image.src = "./src/images/7sOff.png";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor =
      "#009C4E";
    image_tracker = "off";
  }
}
