// namespace application
var app = app || {};


// singleEntryView creates a single View instance
app.singleEntryView = Backbone.View.extend({

  tagName: "article",
  className: "cityEntryItem",

  template: _.template($("#cityElement").html()),

  // render renders the view to HTML
  render: function() {
    var entryTemplate = this.template(this.model.toJSON());
    this.$el.html(entryTemplate);
    return this;
  },

  events: {
    'mouseover': 'addBgColor',
    'mouseout': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});
