// registers all buttons by mapping them to click events
// calls functions by passing array string value as a Window object method
["readIndex", "createTicket", "readTicket", "updateTicket"].map(function(evt)  {
  document.getElementById(evt + "Button").addEventListener("click",
    window[evt]);
});