let is12Hour = true;

function display() {
  let datetime = new Date();
  let hour = datetime.getHours();
  let minute = datetime.getMinutes();
  let second = datetime.getSeconds();

  let ampm = "AM";
  if (is12Hour) {
    if (hour >= 12) ampm = "PM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
  }

  let hourStr = hour < 10 ? `0${hour}` : `${hour}`;
  let minuteStr = minute < 10 ? `0${minute}` : `${minute}`;
  let secondStr = second < 10 ? `0${second}` : `${second}`;

  document.getElementById("hourid").innerHTML = hourStr;
  document.getElementById("minuteid").innerHTML = minuteStr;
  document.getElementById("secondid").innerHTML = secondStr;
  document.getElementById("ampmid").innerHTML = ampm;

  let dateStr = datetime.toDateString();
  document.getElementById("dateid").innerHTML = dateStr;
}

setInterval(display, 1000);
