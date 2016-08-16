function deleteTicket() {

  // Immediately Invoked Function for adding event listeners to delete buttons
  (function addDeleteListeners() {
    // translates the nodeList into a true array to use the map method
    nodesToArray(document.getElementsByClassName("delete_btn")).map(function(d_btn) {
      d_btn.addEventListener('click', removeParentNodes, false);
    });

  })();

  // returns the current event-target's ticket id
  function getDOMticket_id(record) {
    return record.id.substring(18);
  }

  // prompts user to confirm a deletion
  // returns true or false
  function confirmDeletion() {
    var confirmation = prompt("Are you sure you want to delete ticket " + getDOMticket_id(event.currentTarget) + "?");
    if(confirmation.toLowerCase() === "yes" || confirmation.toLowerCase() === "y") {
      return true;
    }
    else {
      return false;
    }
  }

  // removes ticket data from parallel arrays
  function destroyArrayData() {
    var arrDict = {
      1: idArr,
      2: clientArr,
      3: statusArr,
      4: costArr
    };
    var delete_key = getForeignKey(getDOMticket_id());

    for(var a in arrDict) {
      arrDict[a].splice(delete_key, 1);
    }
  }

  // removes a ticket record by deleting the parent <tr> node
  // uses callback to destroyArrayData() to remove array data
  function removeParentNodes() {
    return verify(confirmDeletion(),
                  event.currentTarget.parentNode.parentNode.remove(),
                  destroyArrayData(),
                  "No tickets were deleted",
                  false)
  }

}