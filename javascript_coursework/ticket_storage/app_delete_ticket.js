function deleteTicket() {
  // Immediately Invoked Function
  // add event listeners for delete buttons
  (function addDeleteListeners() {
    var delete_btn_array = document.getElementsByClassName("delete_btn");
    for(var i = 0; i < delete_btn_array.length; i++) {
        delete_btn_array[i].addEventListener('click', removeParentNodes, false);
    }
  })();

  // returns the current event-target's ticket id
  function getTicketId() {
    return event.currentTarget.getAttribute("id").substring(18);
  }

  // prompts user to confirm a deletion
  // returns true or false
  function confirmDeletion() {
    var confirmation = prompt("Are you sure you want to delete ticket " + getTicketId() + "?");
    if(confirmation.toLowerCase() === "yes" || confirmation.toLowerCase() === "y") {
      return true;
    } else {}
    return false;
  }

  // removes ticket data from parallel arrays
  function destroyArrayData() {
    var arrDict = {
      1: idArr,
      2: clientArr,
      3: statusArr,
      4: costArr
    };
    var delete_key = getForeignKey(getTicketId());

    for(var a in arrDict) {
      arrDict[a].splice(delete_key, 1);
    }
  }

  // removes a ticket record by deleting the parent <tr> node
  // uses callback to destroyArrayData() to remove array data
  function removeParentNodes() {
    if(confirmDeletion()) {
      event.currentTarget.parentNode.parentNode.remove();
      destroyArrayData()
    } else {
      return;
    }
  }

}