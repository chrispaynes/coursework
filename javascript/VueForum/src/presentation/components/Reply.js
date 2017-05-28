Vue.component('reply-form', {
  template: `
    <div class="col-xs-12 bdr">
        <h1>REPLY FORM COMPONENT</h1>
        <form action='register.php' method="POST">
            <div class="form-group col-sm-12">
                <label class="col-sm-2">Reply:</label>
                <textarea class="col-sm-10" type="text" name="uname" placeholder="" required />
            </div>
        </form>
        <button class="btn btn-success" v-on:click.native="reply()">REPLY</button>
    </div>
    `,
});

var Reply = new Vue({
  el: '#app',
  data() {
    return {items: []}
  },
  // define methods under the `methods` object
  methods: {
    reply: function() {
        console.log("reply to thread")
    },
    viewUsers: function(e) {
        console.log("CALLED viewUsers")
        var xhr = new XMLHttpRequest();
        var headers = ["First Name","Last Name", "Title","Username","Email"];
        xhr.open("GET", "../../data/queries/all_users.php", true);
        console.log(xhr)

        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                var obj = JSON.parse(xhr.responseText);
                jsonToHTML(obj, "users", headers)
            }
        };

        xhr.send();
    }
  }
});
