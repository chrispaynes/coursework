var NewThread = Vue.component('new-thread-form', {
  template: `
    <div id='new_thread_component' class='col-xs-12'>
        <form action='data/commands/NewThread.php' method='POST'>
        <h1 class='text-center margin-bottom-lg'>Start A New Thread</h1>
            <div class='form-group col-sm-12'>
                <label class='col-xs-12 col-sm-2 txt-green'>Thread Title</label>
                <input class='col-xs-12 col-sm-10' type='text' name='lname' placeholder='' required></textarea>
            </div>
            <div class='form-group col-sm-12'>
                <label class='col-xs-12 col-sm-2 txt-green'>Thread Message</label>
                <textarea rows='12' class='col-xs-12 col-sm-10' type='text' name='lname' placeholder='' required></textarea>
            </div>
            <div class='form-group col-sm-12 text-center'>
                <input class='btn btn-success' type='submit' name='register' value='Submit Thread'>
            </div>
        </form>
    </div>
    `,
});
