function toggle(evnt, evnt_target, evnt_func, parent_func){
  document.getElementById(evnt).addEventListener("click", function() {
    if(document.getElementById(evnt_target) == null) {
      evnt_func();
      return parent_func();
    } else {
      document.getElementById(evnt_target).remove();
    }
  }, false);
}

// registers all buttons by mapping them to click events
// calls functions by passing array string value as a Window object method
function events() {
  return [{"index": [toggle("indexButton", "schedule", index, index)]},
          {"createTicket": [toggle("createTicketButton", "form_cntr", renderCreateForm, createTicket)]},
          {"readTicket": [toggle("readTicketButton", "read_cntr", renderSearchForm, readTicket)]},
          {"updateTicket": [readTicket]}];
}

function addListeners(events) {
  // maps over keys
  events.map(function(evnt){
    if(window.addEventListener) {
      document.getElementById(Object.keys(evnt) + "Button").addEventListener("click",
        // map over values
        evnt[Object.keys(evnt)].map(function(evntFunc) {window[evntFunc]}), false);
    } else if(window.attachEvent) {
      document.getElementById(key + "Button").attachEvent("onclick", window[evt]);
    }
  })
}

(function listen() {
  addListeners(events());
})();
