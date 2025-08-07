let image_tracker = "dis";

function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "dis") {
    image.src = "./src/images/led/oled_on.gif";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "off";
    showPushbuttonNotification();
  } else {
    image.src = "./src/images/led/oled_off.gif";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor ="#009C4E";
    image_tracker = "dis";
    let notification = document.getElementById("pushbuttonNotification");
    if (notification) notification.style.display = "none";
  }
}



