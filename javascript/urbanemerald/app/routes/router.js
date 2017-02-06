// Namespace our App
var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    "": "noCopy",
    "dwtnMpls": "dwtnMplsMessage",
    "nicolletMall": "nicolletMallMessage",
    "weismanArt": "weismanArtMessage",
    "targetHQ": "targetHQMessage",
    "warehouse": "warehouseMessage",
    "guthrie2": "guthrie2Message"

  },

  noCopy: () => {
    $("#copy").html("");
  },

  dwtnMplsMessage: () => {
    $("#copy").html("dwtnMplsMessage");
  },

  nicolletMallMessage: () => {
    $("#copy").html("nicolletMallMessage");
  },

  weismanArtMessage: () => {
    $("#copy").html("weismanArtMessage");
  },

  targetHQMessage: () => {
    $("#copy").html("targetHQMessage");
  },

  warehouseMessage: () => {
    $("#copy").html("warehouseMessage");
  },

  guthrie2Message: () => {
    $("#copy").html("guthrie2Message");
  }

});
