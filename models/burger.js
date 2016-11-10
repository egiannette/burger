// var orm = require('./orm.js');
// this was incorrect because I left out config/orm.js


/*
Here is where you setup a model for how to interface with the database.
*/
// this was taken from the cats.js
var orm = require('../config/orm.js');

var burger = {
	selectAll: function () {
		orm.all('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (valOfCol) {
		orm.create('burgers', valOfCol, function (res) {
			cb(res);
		});
	},
	updateOne: function (valOfCol) {
		orm.update('burgers', valOfCol, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;