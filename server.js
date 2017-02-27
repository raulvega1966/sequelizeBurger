/*Homework Week 14 -Burger */

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
//	from cats in class example
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var app = express();

var db = require("./models")

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);



//sync our models per homework instructions part 5.

var port = process.env.PORT || 3000;

db.sequelize.sync({}).then(function() {
  app.listen(port, function() {
    console.log("Listening on PORT " + port);
  });
});