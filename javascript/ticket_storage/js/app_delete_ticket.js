function deleteTicketModule() {

  // confirmDeletion prompts user to confirm they want to delete a record.
  // confirmDeletion(event *obj) => *bool
  function confirmDeletion(event) {
    var confirmation = prompt("Are you sure you want to delete ticket " + event.currentTarget.id + "?");
    if(confirmation.toLowerCase() === "yes" || confirmation.toLowerCase() === "y") {
      return true;
    }
    else {
      return false;
    }
  }

  // destroyDBData removes a ticket entry from the database when the ticket's
  // delete button is clicked.
  // destroyDBData(database *obj, event *obj)
  function destroyDBData(database, event) {
    var record = getTicketIndex(event.currentTarget.id)
    return ticket_db.splice(record, 1);
}

  // removes a ticket record by deleting the parent tr node.
  // uses callback to destroyDBData() to remove array data
  function removeParentNodes(event) {
    return verify(confirmDeletion(event),
                  event.target.parentNode.parentNode.remove(),
                  destroyDBData(ticket_db, event),
                  "No tickets were deleted",
                  false)
  }

}
