var ND;
var clock;
var dom_clock;

// configures time by creating a new date object
// creates clock and dom_clock objects
function configTime() {
  // creates new Date object
  ND = new Date();

  // creates Clock instance with "UTCHours", "Minutes", and "Seconds" properties
  // @params(hrs, min, sec)
  clock = new Clock(ND.getHours(), ND.getMinutes(), ND.getSeconds());

  // creates DOM_CLOCK instance using the new Date properties
  dom_clock = new DOM_CLOCK(ND);

  // calculates hours based on 12 hour clock
  // changes time suffic to AM or PM based on hour
  if(clock.hrs > 12) {
    clock.period = "pm";
  }
};

// writes clock information to DOM
function writeClockToDOM() {
  configTime();

  // accepts RegExp to left pad single digit numbers
  function padTime(prop, regx) {
    regx.test(prop) ? prop : prop = "0" + prop;
    return prop;
  }

  // writes UTC Hours, Minutes, and Seconds to DOM
  dom_clock.clock_node.innerHTML = padTime(dom_clock.calcUTCHrs(), /..../)
                  + ":" + padTime(clock.min, /../)
                  + ":" + padTime(clock.sec, /../);

  // writes time period to DOM based on AM/PM designation
  dom_clock.period_node.innerHTML = clock.period;
}

// calls the configTime func() every second to mimic a clock
setInterval(writeClockToDOM, 1000);

if(window.addEventListener) {
  window.addEventListener("load", writeClockToDOM, false);
} else if(window.attachEvent) {
  window.attachEvent("onload", writeClockToDOM);
}