var app = app || {};

app.MinneapolisCollection = Backbone.Collection.extend({
  model: app.singleEntry
});


app.PortlandCollection = Backbone.Collection.extend({
  model: app.singleEntry
});


app.ChicagoCollection = Backbone.Collection.extend({
  model: app.singleEntry
});


app.DenverCollection = Backbone.Collection.extend({
  model: app.singleEntry
});
