'use strict';

module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define('burger', {
            burgername: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });

return burger;

};









/*

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create("burger", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, function(res) {
            cb(res);
        });
    }

     //   delete: function(objColVals, condition, cb) {
    //    orm.delete("burger", condition, function(res) {
    //        cb(res);
    //    });
    //}

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;


*/
