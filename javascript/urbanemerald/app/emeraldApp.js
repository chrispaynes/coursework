// Create a single Model Instance with an assigned app. component using JSON data
var dwtnMpls = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "dwtnmpls.jpg",
    link: "dwtnmpls"
});

var nicolletMall = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "nicolletmall.jpg",
    link: "nicolletmall"
});

var weismanArt = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "weisman.jpg",
    link: "weisman"
});

var targetHQ = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "target.jpg",
    link: "target"
});

var warehouse = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "warehouse.jpg",
    link: "warehouse"
});

var guthrie2 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "guthrie2.jpg",
    link: "guthrie2"
});

// Define a Collections Group and assign an app.collection object that specifies which previously declared variables to include
var minneapolisGroup = new app.MinneapolisCollection([
    dwtnMpls, nicolletMall, weismanArt, targetHQ, warehouse, guthrie2
]);

// Define a Group View and assign an app.view for the group by passing in the newly created app.Collection object
var minneapolisGroupView = new app.allMinneapolisView({ collection: minneapolisGroup});

// Define an ID for the new created view data and render the Group View element by passing it through the .html function
$("#allMinneapolis").html(minneapolisGroupView.render().el);

// Define a new router and assign an app.Router to handle routing
var mplsRouter = new app.Router();

// START PORTLAND
var theater = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "101_1733.JPG",
    link: "dwtnmpls"
});

var statue = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "101_1752.JPG",
    link: "nicolletmall"
});

var bubbler = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "101_1775.JPG",
    link: "weisman"
});

var portlandGroup = new app.PortlandCollection([
    theater, statue, bubbler
]);

var portlandGroupView = new app.allPortlandView({ collection: portlandGroup});

$("#allPortland").html(portlandGroupView.render().el);

var portlandRouter = new app.Router();


// START CHICAGO
var crownHall = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "crownhall.jpg",
    link: "dwtnmpls"
});

var lincolnPark = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "lincolnparkzoo.jpg",
    link: "nicolletmall"
});

var mcCormick = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "mccormick.jpg",
    link: "weisman"
});

var newFeinberg = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "nwufeinbergschool.jpg",
    link: "target"
});

var stateStreet = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "statestreetbridge.jpg",
    link: "warehouse"
});

var chicagoLibrary = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "chicagolibrary.png",
    link: "guthrie2"
});

var chicagoGroup = new app.ChicagoCollection([
    crownHall, lincolnPark, mcCormick, newFeinberg, stateStreet, chicagoLibrary
]);

var chicagoGroupView = new app.allChicagoView({ collection: chicagoGroup});

$("#allChicago").html(chicagoGroupView.render().el);

var chicagoRouter = new app.Router();

// START CHICAGO
var denverCity1 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_0553.JPG",
    link: "dwtnmpls"
});

var denverCity2 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_0649b.jpg",
    link: "dwtnmpls"
});

var denverCity3 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_0653.JPG",
    link: "dwtnmpls"
});

var denverCity4 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_0960.JPG",
    link: "dwtnmpls"
});

var denverCity5 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_0965.JPG",
    link: "dwtnmpls"
});

var denverCity6 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_1048.JPG",
    link: "dwtnmpls"
});

var denverCity7 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_1068.JPG",
    link: "dwtnmpls"
});

var denverCity8 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_1123.JPG",
    link: "dwtnmpls"
});

var denverCity9 = new app.singleEntry({
    name: "Building_Name_Here",
    neighborhood: "Neighborhood_Name",
    built: "Construction_Year",
    style: "Arch_Style",
    img: "IMG_1146.JPG",
    link: "dwtnmpls"
});



var denverGroup = new app.DenverCollection([
    denverCity1, denverCity2, denverCity3, denverCity4, denverCity5, denverCity6, denverCity7, denverCity8, denverCity9,
]);

var denverGroupView = new app.allDenverView({ collection: denverGroup});

$("#allDenver").html(denverGroupView.render().el);

var denverRouter = new app.Router();

Backbone.history.start();
