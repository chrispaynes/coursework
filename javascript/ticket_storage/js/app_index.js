// index returns the complete production index to the DOM.
// index() -> *html obj
function index() {
  initSchedule();
  populateTable(getTable(), document.getElementById("record"));
  deleteTicket();
};
