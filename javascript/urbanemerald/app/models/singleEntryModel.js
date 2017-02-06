// Namespace our app
var app = app || {};

app.singleEntry = Backbone.Model.extend({

  defaults: {
    neighborhood: "NOT DEFINED!",
    img: "assets/img/placeholder.jpg"
  }

});
