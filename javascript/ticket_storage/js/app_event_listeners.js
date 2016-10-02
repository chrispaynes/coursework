if(window.addEventListener) {
  window.document.addEventListener("load", readIndex(), false);
}
if(window.attachEvent) {
  window.document.attachEvent("onload", readIndex());
}

// registers all buttons by mapping them to click events
// calls functions by passing array string value as a Window object method
var events = ["readIndex", "createTicket", "readTicket", "updateTicket"];
events.map(function(evt)  {
  if(window.addEventListener) {
    document.getElementById(evt + "Button").addEventListener("click", window[evt], false);
  }
  if(window.attachEvent) {
    document.getElementById(evt + "Button").attachEvent("onclick", window[evt]);
  }
});
