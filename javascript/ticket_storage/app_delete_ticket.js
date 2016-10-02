function deleteTicket() {
  // addDeleteListeners() adds event listeners for each delete button.
  (function addDeleteListeners() {
    var delete_btns = Array.prototype.slice.call(document.getElementsByClassName("delete_btn"))

    // delete_btns.map maps over each delete button adding a click event listener.
    delete_btns.map(function(btn) {
      btn.addEventListener('click', function(event){
        removeParentNodes(event);
      }, false);
    });

  })();

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
    var record = getForeignKey(event.currentTarget.id)
    return ticket_db.splice(record, 1);
}

  // removes a ticket record by deleting the parent <tr> node
  // uses callback to destroyDBData() to remove array data
  function removeParentNodes(event) {
    return verify(confirmDeletion(event),
                  event.target.parentNode.parentNode.remove(),
                  destroyDBData(ticket_db, event),
                  "No tickets were deleted",
                  false)
  }

}
