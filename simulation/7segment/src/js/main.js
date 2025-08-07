let image_tracker = "off";
function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/7sOn.gif";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "On";
    showPushbuttonNotification();
  } else {
    image.src = "./src/images/7sOff.png";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor =
      "#009C4E";
    image_tracker = "off";
    let notification = document.getElementById("pushbuttonNotification");
    if (notification) notification.style.display = "none";
  }
}

function showPushbuttonNotification() {
  let notification = document.getElementById("pushbuttonNotification");
  if (notification) {
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
}
