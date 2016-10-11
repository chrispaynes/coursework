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
  return [{"index": [toggle("indexButton", "schedule", indexModule, indexModule)]},
          {"createTicket": [toggle("createTicketButton", "form_cntr", renderCreateForm, createTicketModule)]},
          {"readTicket": [toggle("readTicketButton", "read_cntr", renderSearchForm, readTicketModule)]},
          {"updateTicket": [readTicketModule]}];
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

// addDeleteListeners() adds event listeners for each delete button.
function addDeleteListeners() {
  var delete_btns = Array.prototype.slice.call(document.getElementsByClassName("delete_btn"))

  // delete_btns.map maps over each delete button adding a click event listener.
  delete_btns.map(function(btn) {
    btn.addEventListener('click', function(event){
      removeParentNodes(event);
    }, false);
  });

};

(function listen() {
  addListeners(events());
})();
