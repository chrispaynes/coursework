// namespace application
var app = app || {};

// Create a single View instance, this one is specific to MPLS
app.allMinneapolisView = Backbone.View.extend({

  tagName: "section",

  render: function() {
    this.collection.each(this.addEntry, this);
    return this;
  },

  addEntry: function(entry) {
    var entryView = new app.singleEntryView({ model: entry });
    this.$el.append(entryView.render().el);
  }

});

app.allPortlandView = Backbone.View.extend({

  tagName: "section",

  render: function() {
    this.collection.each(this.addEntry, this);
    return this;
  },

  addEntry: function(entry) {
    var entryView = new app.singleEntryView({ model: entry });
    this.$el.append(entryView.render().el);
  }

});

app.allChicagoView = Backbone.View.extend({

  tagName: "section",

  render: function() {
    this.collection.each(this.addEntry, this);
    return this;
  },

  addEntry: function(entry) {
    var entryView = new app.singleEntryView({ model: entry });
    this.$el.append(entryView.render().el);
  }

});

app.allDenverView = Backbone.View.extend({

  tagName: "section",

  render: function() {
    this.collection.each(this.addEntry, this);
    return this;
  },

  addEntry: function(entry) {
    var entryView = new app.singleEntryView({ model: entry });
    this.$el.append(entryView.render().el);
  }

});
