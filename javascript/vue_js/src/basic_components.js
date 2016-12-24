let jumbotron = new Vue({
  el: '#jumbotron',
  data: {
    heading_1: 'Hello World',
    para_1: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
    button_1: '<a href="#" class="btn btn-primary btn-lg"role="button">Learn more</a>'
  }
});

let card = new Vue({
  el: '#card',
  data: {
    title: 'Header Content Here',
    content: '<strong>Div Content Here</strong>'
  }
});

/*INSTANTIATING REGISTERED VUE COMPONENTS*/

// register a global component
Vue.component('thumbnail', {
  template: '<div class="col-sm-6 col-md-3"> ' +
    '<div class="thumbnail"> ' +
    '<img src="images/vue.png" alt="..."> ' +
    '<div class="caption"> ' +
    '<h3>Article Heading</h3> ' +
    '<p v-on:click="toggle()">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> ' +
    '<p v-if="show" v-on:click="show = false">HIDDEN: Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> ' +
    '<p>' +
    '<a href="#" class="btn btn-primary" role="button">Edit</a>' +
    '<a href="#" class="btn btn-success" role="button">Mark Complete</a>' +
    '<a href="#" class="btn btn-info" role="button">Mark Read</a>' +
    '<a href="#" class="btn btn-danger" role="button">Delete</a>' +
    '</p>' +
    '<div class="well well-sm" v-on:click="timestamp = new Date().toString()"><small><strong>Last Read:</strong> <i> {{ timestamp }} </small></i></div>' +
    '<span class="label label-default"></span>' +
    '<span class="label label-primary">Essentials</span>' +
    '<span class="label label-success">Migration</span>' +
    '<span class="label label-info">Testing</span>' +
    '<span class="label label-warning">Advanced</span>' +
    '</div> </div> </div>',
  data: () => {
    return {
      timestamp: new Date().toString(),
      show: false,
      toggle: function() {
        return this.show == false ? this.show = true : this.show = false
      }
    }
  }
})

// instantiate the component
new Vue({
  el: '#thumbnails',
  data: {
    items: [
      { text: "Text1" },
      { text: "Text2" },
      { text: "Text3" }
      ]
  }
})
