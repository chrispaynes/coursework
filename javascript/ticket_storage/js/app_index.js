// index returns the complete production index to the DOM.
// index() -> *html obj
function indexModule() {
  emptyNode(getApp());
  initSchedule();
  populateTable(getTable(), document.getElementById("record"));
  deleteTicketModule();
};
