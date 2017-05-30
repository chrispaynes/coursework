var Registration = Vue.component('registration', {
  template: `
    <div class="col-xs-12">
        <hr />
        <form action='data/commands/registration.php' method="POST">
        <h1 class='text-center margin-lg'>Forum Registration</h1>
            <div class="form-group col-sm-6">
                <label class="col-sm-3 txt-green">Username</label>
                <input class="col-sm-6" type="text" name="uname" placeholder="Username" required>
            </div>
            <div class="form-group col-sm-6">
                <label class="col-sm-3 txt-green">Password</label>
                <input class="col-sm-6" type="text" name="pwd" placeholder="Password" required>
            </div>
            <div class="form-group col-sm-6">
                <label class="col-sm-3 txt-green">First Name</label>
                <input class="col-sm-6" type="text" name="fname" placeholder="First Name" required>
            </div>
            <div class="form-group col-sm-6">
                <label class="col-sm-3 txt-green">Last Name</label>
                <input class="col-sm-6" type="text" name="lname" placeholder="Last Name" required>
            </div>
            <div class="form-group col-sm-6">
                <label class="col-sm-3 txt-green">Email</label>
                <input class="col-sm-6" type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group col-sm-12 text-center">
                <input class="btn btn-success" type="submit" name="register" placeholder="" value="Register">
            </div>
        </form>
    </div>
    `,
});
