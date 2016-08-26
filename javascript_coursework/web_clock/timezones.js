// TIME_ZONES is a constant containing a collection of individual Time_Zones
// Key = Timezone abbreviation *string
// Value = new Time_Zone(abbr *string, name *string, utc_offset *int, selected, *bool) *object
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
TIME_ZONES.CDT.selected = true;

// tz_write() is an IIFE that loops through TIME_ZONES{ } to create
// and append a dropdown list of timezones options to select from
(function tz_write() {
  var tzs = document.getElementById("time_zone_selector");
  var tzs_opt;

  for(var tz in TIME_ZONES) {
    tzs_opt = document.createElement("option");
    tzs_opt.selected = TIME_ZONES[tz].selected;
    tzs_opt.value = TIME_ZONES[tz].abbr;
    tzs_opt.innerHTML = TIME_ZONES[tz].abbr + " - " + TIME_ZONES[tz].name + " (UTC" + TIME_ZONES[tz].utc_offset + ")";
    tzs.appendChild(tzs_opt)
  }
})();