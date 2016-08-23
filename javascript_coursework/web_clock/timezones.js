// Time Zone Constants
const TIME_ZONES = {
  "AST":  new Time_Zone("AST", "Atlantic Standard", -4),
  "ADT":  new Time_Zone("ADT", "Atlantic Daylight Time", -3),
  "EST":  new Time_Zone("EST", "Eastern Standard Time", -5),
  "EDT":  new Time_Zone("EDT", "Eastern Daylight Time", -4),
  "CST":  new Time_Zone("CST", "Central Standard Time", -6),
  "CDT":  new Time_Zone("CDT", "Central Daylight Time", -5),
  "MST":  new Time_Zone("MST", "Mountain Standard Time", -7),
  "MDT":  new Time_Zone("MDT", "Mountain Daylight Time", -6),
  "PST":  new Time_Zone("PST", "Pacific Standard Time", -8),
  "PDT":  new Time_Zone("PDT", "Pacific Daylight Time", -7),
  "AKST": new Time_Zone("AKST", "Alaska Standard Time", -9),
  "AKDT": new Time_Zone("AKDT", "Alaska Daylight Time", -8),
  "HAST": new Time_Zone("HAST", "Aleutian Standard Time", -10)
};

// TEST DEFAULT TIMEZONE
TIME_ZONES.CST.selected = true;

var tzs = document.getElementById("time_zone_selector");
var tzs_opt;

// creates HTML dropdown using keys from TIME_ZONES hash
for(var tz in TIME_ZONES) {
  tzs_opt = document.createElement("option");
  tzs_opt.selected = TIME_ZONES[tz].selected;
  tzs_opt.value = TIME_ZONES[tz].abbr;
  tzs_opt.innerHTML = TIME_ZONES[tz].abbr + " - " + TIME_ZONES[tz].name + " (UTC" + TIME_ZONES[tz].utc_offset + ")";
  tzs.appendChild(tzs_opt)
}