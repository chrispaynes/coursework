// TODO: ALLOW USER TO CHANGE TIMEZONE
// Time_Zone is an Object.prototype.constructor for time zones
// function Time_Zone(abbr *string, name *string, utc_offset *int, selected, *bool)
function Time_Zone(abbr, name, utc_offset, selected) {
  this.abbr = abbr;
  this.name = name;
  this.utc_offset = utc_offset;
  this.selected = false;
};

// UTC_Clock is Object.prototype.constructor for a clock
// function UTC_Clock(new_date *object)
function UTC_Clock(new_date) {
  // time properties *int
  this.hrs = new_date.getUTCHours();
  this.min = new_date.getUTCMinutes();
  this.sec = new_date.getUTCSeconds();

  // UTC_Clock.tzo calculates TimezoneOffset divided by 60(minutes)
  // to get hours offset then multiplies by -1 to create a negative number
  this.tzo = (new_date.getTimezoneOffset() / 60) * -1;
  this.abs_tzo = Math.abs(this.tzo);
  this.adj_hrs = this.hrs;
  this.adj_period = "";
};

// DOM_CLOCK() is Object.prototype.constructor for time data
// written to the Document Object Model
function DOM_CLOCK() {
  // displays hours, minutes, seconds
  this.t_node = document.getElementById("local_clock")
  // displays AM/PM
  this.p_node = document.getElementById("am_pm");
};