function deleteTicket() {
  // Immediately Invoked Function for adding event listeners to delete buttons
  (function addDeleteListeners() {
    // translates the nodeList into a true array to use the map method
    nodesToArray(document.getElementsByClassName("delete_btn")).map(function(d_btn) {
      d_btn.addEventListener('click', removeParentNodes, false);
    });

  })();

  // returns the current event-target's ticket id
  function getDOMticket_num(record) {
    return parseInt(record.id.substring(18));
  }

  // prompts user to confirm a deletion
  // returns true or false
  function confirmDeletion() {
    var confirmation = prompt("Are you sure you want to delete ticket " + getDOMticket_num(event.currentTarget) + "?");
    if(confirmation.toLowerCase() === "yes" || confirmation.toLowerCase() === "y") {
      return true;
    }
    else {
      return false;
    }
  }

  // TODO: FINISH PERSISTING DELETE TO DATA STORE
  // removes data from a collection of related data arrays
  function destroyArrayData(arrays) {
    var record = getForeignKey(getDOMticket_num(event.currentTarget));
    console.log(record);
    arrays.forEach(function(arr, index) {


      // TODO: CLEANUP CODE AND REFACTOR FUNCTIONALLY
      if(record === 0) {
          arr.shift();
      } else if(record == (arr.length - 1)) {
          arr.pop();
      } else if(record == (arr.length - 2)) {
          arr = arr.splice(0, arr.length - 2).concat(arr.pop());
      } else if(record == 1) {
          arr = arr.splice(0, 1).concat(arr.splice(1, arr.length));
      } else {
          arr = arr.splice(0, record).concat(arr.splice(1, arr.length - 1));
      }
  });
}


  // removes a ticket record by deleting the parent <tr> node
  // uses callback to destroyArrayData() to remove array data
  function removeParentNodes() {
    return verify(confirmDeletion(),
                  event.currentTarget.parentNode.parentNode.remove(),
                  destroyArrayData([idArr, clientArr, statusArr, costArr]),
                  "No tickets were deleted",
                  false)
  }

}