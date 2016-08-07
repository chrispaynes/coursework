// Events
var app_events = ["readIndex", "createTicket", "readTicket", "updateTicket"];

// Loops through app_events to register application events
// calls functions by passing array string value as a Window object method
for(var evt in app_events) {
  document.getElementById(app_events[evt] + "Button").addEventListener("click",
    window[app_events[evt]]);
}