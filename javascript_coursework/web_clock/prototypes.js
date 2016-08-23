// TODO: ALLOW USER TO CHANGE TIMEZONE
// Object.prototype.constructor for time zones
function Time_Zone(abbr, name, utc_offset, selected) {
  this.abbr = abbr;
  this.name = name;
  this.utc_offset = utc_offset;
  this.selected = false;
};

// Object.prototype.constructor for a clock
function UTC_Clock(new_date) {
  this.hrs = new_date.getUTCHours();
  this.min = new_date.getUTCMinutes();
  this.sec = new_date.getUTCSeconds();
  // calculates TimezoneOffset divided by 60 to get hours offset
  // multiplies by -1 to get a negative number
  this.tzo = (new_date.getTimezoneOffset() / 60) * -1;
  this.abs_tzo = Math.abs(this.tzo);
  this.adj_hrs = this.hrs;
  this.adj_period = "";
};

// Object.prototype.constructor for time data specific to DOM
function DOM_CLOCK() {
  // DOM object that displays hours, minutes, seconds
  this.t_node = document.getElementById("local_clock")
  // DOM object that displays AM/PM
  this.p_node = document.getElementById("am_pm");
};