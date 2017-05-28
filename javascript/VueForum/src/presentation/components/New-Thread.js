var NewThread = Vue.component('new-thread-form', {
  template: `
    <div class="col-xs-12 bdr">
        <form action='register.php' method="POST">
        <h1>NEW THREAD FORM COMPONENT</h1>
            <div class="form-group col-sm-12">
                <label class="col-sm-2">Thread Title</label>
                <textarea class="col-sm-10" type="text" name="lname" placeholder="" required></textarea>
            </div>
            <div class="form-group col-sm-12">
                <input class="btn btn-success" type="submit" name="register" placeholder="" value="Submit Thread">
            </div>
        </form>
    </div>
    `,
});

// var NewThread = new Vue({
//   el: '#app'
// });
