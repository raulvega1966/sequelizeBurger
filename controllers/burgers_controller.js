
var express = require("express");

var router = express.Router();

// Import the model burger.js (cat.js) to use its database functions.
var db = require("../models");

// Create route for getting all. find all returns for all entries for a table (from create-read in class assignment.)
//this section is from 4-Sequelize-Validations-Solved in class assignment.
//
router.get('/', function(req, res){
  db.burger.findAll({}).then(function(burgerInfo) {
    res.render("index", { burger: burgerInfo });
  });
});

  //res.redirect('/burger')

//router.get("/burger", function(req, res) {
 // burger.all(function(data) {
 //   var hbsObject = {
 //     burger: data
 //   };
 //   console.log(hbsObject);
//    res.render("index", hbsObject);
//  });
//});

// POST route for saving a new burger (also from todo list of create-read in class assignment)

router.post("/burger/create", function(req, res) {
  db.burger.create({
    burgername: req.body.burgername,
    devoured: false
  });
  res.redirect("/");
});



// Put Route for updating burgers (todo list from create-read in class assignment)

router.put("/burger/update/:id", function(req, res) {
  
  db.burger.update({
    devoured: true
  }, 
  {
    where: {
      id: req.body.id
    }
  });
res.redirect("/");
});

//router.put("/burger/update/:id", function(req, res) {
 //var condition = "id = " + req.params.id;

  //console.log("condition", condition);

 // burger.update({
  //  devoured: req.body.devoured
 // }, condition, function() {
 //   res.redirect("/burger");
 // });
//});


/*
router.delete('/burger/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  burger.delete('burger', condition, function() {
    res.redirect('/burger');
  });
});
*/

// Export routes for server.js to use.
module.exports = router;