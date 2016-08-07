// clears the records currently displayed in the table
// reads all production tickets across parallel arrays
// a foreign key links ticket information across arrays
function readIndex() {
  initTable()
  populateTable(tbl, record)
  deleteTicket()
};