// index returns the complete production index to the DOM.
// index() -> *html obj
function indexModule() {
  initSchedule();
  populateTable(getTable(), document.getElementById("record"));
  deleteTicketModule();
};
