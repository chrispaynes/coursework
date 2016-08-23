// GLOBALS
var clock = {};

// instantiates new time object
// sets Clock object properties using Date properties
function configTime() {
  var ND = new Date();
  clock = new UTC_Clock(ND);
};

// TODO: abstract conditional logic
// Corrects object properties based on current time
function propAdjuster(clock) {
  // calculates hours based on 12 hour clock
  // changes time suffic to AM or PM based on hour
  // => EVENING / PRE-MIDNIGHT (ADJUSTED 7:00pm - 11:59pm)
  if(clock.hrs == 0 || clock.hrs < clock.abs_tzo) {
    clock.adj_period = "pm";
    clock.adj_hrs = clock.hrs + (12 - clock.abs_tzo)
  }

  // => MIDNIGHT ADJUSTMENT (@12:00am local time)
  if(clock.hrs == clock.abs_tzo) {
    clock.adj_period = "am";
    clock.adj_hrs = clock.hrs + (12 - clock.abs_tzo)
  }

  // => MORNING ADJUSTMENT (from 1:00am - 11am local time)
  if(clock.hrs >= clock.abs_tzo && clock.hrs < 17) {
    clock.adj_period = "am";
    clock.adj_hrs = clock.hrs + clock.tzo
  }

   // => NOON ADJUSTMENT (@12:00pm local time)
  if(clock.hrs == (12 + clock.abs_tzo)) {
    clock.adj_period = "pm";
    clock.adj_hrs = clock.hrs - clock.abs_tzo
  }

  // => AFTERNOON ADJUSTMENT (from 1:00pm - 6:00pm)
  if(clock.hrs > (12 + clock.abs_tzo)) {
    clock.adj_period = "pm";
    clock.adj_hrs = clock.hrs - (12 + clock.abs_tzo)
  }
};

// test if a property matches a RegExp
function padTime(prop, regx) {
  regx.test(prop) ? prop : prop = "0" + prop;
  return prop;
}

// writes clock information to DOM
function writeClockToDOM() {
  // creates DOM_CLOCK
  var dom_clock = new DOM_CLOCK();
  configTime();

  // Corrects object properties based on current time
  propAdjuster(clock);

  // writes UTC Hours, Minutes, and Seconds to DOM
  // uses RegExp to left-pad single digit time numbers
  // "_7:_4:_1 am" becomes "07:04:01 am"
  dom_clock.t_node.innerHTML = padTime(clock.adj_hrs, /../)
                  + ":" + padTime(clock.min, /../)
                  + ":" + padTime(clock.sec, /../);

  // writes time period to DOM based on AM/PM designation
  dom_clock.p_node.innerHTML = clock.adj_period;
}

// calls the configTime func() every second to mimic a clock
setInterval(writeClockToDOM, 1000);

if(window.addEventListener) {
  window.addEventListener("load", writeClockToDOM, false);
} else if(window.attachEvent) {
  window.attachEvent("onload", writeClockToDOM);
}