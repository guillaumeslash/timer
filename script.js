let timer = 600;

document.getElementById("timer").innerHTML = "Lezgongue";

const interval = setInterval(function() {
   if (timer > 0) {
      timer--;
      document.getElementById("timer").innerHTML = toTime(timer).substring(3);
   }
   else {
      clearInterval(interval);
   }
}, 1000);


const addMins = (mins) => {
  timer = timer + 60*mins;
}

const removeMins = (mins) => {
  if (timer > 60) {
    timer = timer - 60*mins;
  }

}

const toTime = (seconds) => {
   var date = new Date(null);
   date.setSeconds(seconds);
   return date.toISOString().substr(11, 8);
}
