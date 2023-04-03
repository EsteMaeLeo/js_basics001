const showClock = () => {
  let date = new Date();
  let hour = formatHour(date.getHours());
  let minutes = formatHour(date.getMinutes());
  let seg = formatHour(date.getSeconds());
  document.getElementById("hour").innerHTML = `${hour}:${minutes}:${seg}`;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Set",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Dom", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let dayWeek= days[date.getDay()]
  let day = date.getDate()
  let month = months[date.getMonth()]
  let dateText = `${dayWeek}, ${day}, ${month}`
  document.getElementById('date').innerHTML=dateText;

  document.getElementById('container').classList.toggle('animation')
};

const formatHour = (hour) => {
  if (hour < 10) {
    hour = "0" + hour;
  }
  return hour;
};

setInterval(showClock, 1000);
