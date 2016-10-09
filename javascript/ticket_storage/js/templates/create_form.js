// renderSearchForm creates an html form used to search records.
function renderCreateForm(){
  var t = getTable();
  var tr = createNode({"tr": form}, [{"class": "record"},
                                   {"id": "form_cntr"}]);
  var form = ['<td id="create_ticket_form">',
                '<div class="input_set">',
                  '<span for="Ticket Id">Ticket Id</span>',
                  '<input type="number" id="create_ticket_id" placeholder="000000" min="100000" maxlength="6">',
                '</div>',
                '<div class="input_set">',
                  '<span for="Client Name">Client Name</span>',
                  '<input type="text" id="create_ticket_client" placeholder="client name">',
                '</div>',
                '<div class="input_set">',
                  '<span for="Client Status">Client Status</span>',
                  '<input type="text" id="create_ticket_status" placeholder="ticket status">',
                '</div>',
                '<div class="input_set">',
                  '<span for="Client Cost">Client Cost</span>',
                  '<input type="number" id="create_ticket_cost" placeholder="0000.00">',
                '</div>',
                '<div class="input_set">',
                  '<input type="submit" id="create_ticket_submit" class="btn btn-success">',
                '</div>',
             '</td>'].join("");

  tr.innerHTML = form;

  if(t == null || t == undefined) {
    return document.getElementById("app").appendChild(tr)
  } else {
    t.insertBefore(tr, t.childNodes[0]);
  }
};
