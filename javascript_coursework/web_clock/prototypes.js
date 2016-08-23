// TODO: ALLOW USER TO CHANGE TIMEZONE
// Object.prototype.constructor for time zones
function Time_Zone(abbr, name, utc_offset, selected) {
  this.abbr = abbr;
  this.name = name;
  this.utc_offset = utc_offset;
  this.selected = false;
}

// Object.prototype.constructor for a clock
function Clock(hrs, min, sec) {
  this.hrs = hrs;
  this.min = min;
  this.sec = sec;
  this.period = "am";
}

// Object.prototype.constructor for time data specific to DOM
function DOM_CLOCK(date_obj) {
  // calculates TimezoneOffset divided by 60 to get hours offset
  // multiplies by -1 to get a negative offest
  this.tzo = (date_obj.getTimezoneOffset() / 60) * -1;
  // DOM object that displays hours, minutes, seconds
  this.clock_node = document.getElementById("local_clock")
  // DOM object that displays AM/PM
  this.period_node = document.getElementById("am_pm");

  this.calcUTCHrs = function() {
                      if(date_obj.getUTCHours() + this.tzo < 12) {
                        return 12 + (date_obj.getUTCHours() + this.tzo)
                      } else {
                        return date_obj.getUTCHours() + this.tzo;
                      }
  };
}