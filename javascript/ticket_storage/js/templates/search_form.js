// renderSearchForm creates an html form used to search records.
// renderSearchForm() => *html obj
function renderSearchForm(){
  var t = getTable();
  var form = ['<tr class="record" id="read_cntr">',
      '<td id="create_ticket_form">',
          '<div class="input_set">',
            '<span for="Ticket Id">Ticket Id</span>',
            '<input type="number" id="read_ticket_id" placeholder="100000" min="100000" maxlength="6">',
          '</div>',
          '<div class="input_set">',
            '<input type="submit" id="read_ticket_submit" class="btn btn-success">',
          '</div>',
      '</td>',
  '</tr>'].join("");
  var tr = createNode({"tr": ""}, [{"class": "record"}, {"id": "read_cntr"}]);

tr.innerHTML = form;
    if(t == null) {
      return document.getElementById("app").appendChild(tr)
    } else {
      return t.insertBefore(tr, t.childNodes[0]);
    }
};
