var Registration = Vue.component('registration', {
  template: `
    <div class="col-xs-12 bdr">
        <form action='data/commands/registration.php' method="POST">
        <h1>REGISTRATION FORM COMPONENT</h1>
            <div class="form-group col-sm-6">
                <label class="col-sm-4">Username</label>
                <input class="col-sm-8" type="text" name="uname" placeholder="Username" required>
            </div>
            <div class="form-group col-sm-6">
                <label class="col-sm-4">Password</label>
                <input class="col-sm-8" type="text" name="pwd" placeholder="Password" required>
            </div>
            <div class="form-group col-sm-6">
                <label class="col-sm-4">First Name</label>
                <input class="col-sm-8" type="text" name="fname" placeholder="First Name" required>
            </div>
            <div class="form-group col-sm-6">
                <label class="col-sm-4">Last Name</label>
                <input class="col-sm-8" type="text" name="lname" placeholder="Last Name" required>
            </div>
            <div class="form-group col-sm-6">
                <label class="col-sm-4">Email</label>
                <input class="col-sm-8" type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group col-sm-12">
                <input class="btn btn-success" type="submit" name="register" placeholder="" value="Register">
            </div>
        </form>
    </div>
    `,
});

// var Registration = new Vue({
//   el: '#app'
// })
