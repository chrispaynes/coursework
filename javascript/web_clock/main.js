// GLOBAL VARIABLE
var CLOCK = {};

// configTime instantiates a new time object and
// sets Clock object properties using Date properties
function configTime() {
  CLOCK = new UTC_Clock(new Date());
};

// TODO: abstract conditional logic
// propAdj converts the CLOCK{ } object properties
// based on user's current local time
// propAdj(CLOCK *object)
function propAdj(clock) {
  // Calculates hours based on 12 hour clock.
  // Changes time suffix to AM or PM based on hour.
  // Handles EVENING / PRE-MIDNIGHT (ADJUSTED 7:00pm - 11:59pm)
  if(clock.hrs == 0 || clock.hrs < clock.abs_tzo) {
    clock.adj_period = "pm";
    clock.adj_hrs = clock.hrs + (12 - clock.abs_tzo)
  }

  // Handles MIDNIGHT ADJUSTMENT (@12:00am local time)
  if(clock.hrs == clock.abs_tzo) {
    clock.adj_period = "am";
    clock.adj_hrs = clock.hrs + (12 - clock.abs_tzo)
  }

  // Handles MORNING ADJUSTMENT (from 1:00am - 11am local time)
  if(clock.hrs >= clock.abs_tzo && clock.hrs < 17) {
    clock.adj_period = "am";
    clock.adj_hrs = clock.hrs + clock.tzo
  }

   // Handles NOON ADJUSTMENT (@12:00pm local time)
  if(clock.hrs == (12 + clock.abs_tzo)) {
    clock.adj_period = "pm";
    clock.adj_hrs = clock.hrs - clock.abs_tzo
  }

  // Handles AFTERNOON ADJUSTMENT (from 1:00pm - 6:00pm)
  if(clock.hrs > (12 + clock.abs_tzo)) {
    clock.adj_period = "pm";
    clock.adj_hrs = clock.hrs - (12 + clock.abs_tzo)
  }
};

// padder runs a regular expression object against an
// integer property to verify it has 2 digits, if it
// doesn't, it pads the integer with a leading "0"
// padder(prop *int, regx *object)
function padder(p, regx) {
  regx.test(p) ? p : p = "0" + p;
  return p;
}

// writeClock writes the global CLOCK{ } properties
// to Document Object Model
function writeClock() {
  // creates DOM_CLOCK
  var dom_clock = new DOM_CLOCK();
  configTime();

  // Converts CLOCK{ } properties based on user's local time
  propAdj(CLOCK);

  // writes UTC Hours, Minutes, and Seconds to DOM
  // uses RegExp to left-pad single digit time numbers
  // "_7:_4:_1 am" becomes "07:04:01 am"
  dom_clock.t_node.innerHTML = padder(CLOCK.adj_hrs, /../)
                  + ":" + padder(CLOCK.min, /../)
                  + ":" + padder(CLOCK.sec, /../);

  // writes time period to DOM based on AM/PM designation
  dom_clock.p_node.innerHTML = CLOCK.adj_period;
}

// setInterval calls the writeClock() every second to mimic a CLOCK
// setInterval(writeClock *object, 1000 *int);
setInterval(writeClock, 1000);

if(window.addEventListener) {
  window.addEventListener("load", writeClock, false);
}
if(window.attachEvent) {
  window.attachEvent("onload", writeClock);
}