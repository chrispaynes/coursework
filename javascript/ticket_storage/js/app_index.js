// clears the records currently displayed in the table
// reads all production tickets across parallel arrays
// a foreign key links ticket information across arrays
function readIndex() {
  emptyTable();
  createHeader(["", "Ticket ID", "Client", "Status", "Cost"], "table_header");
  populateTable(getTable(), document.getElementById("record"));
  deleteTicket();
};
