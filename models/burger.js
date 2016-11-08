// var orm = require('./orm.js');
// this was incorrect because I left out config/orm.js


/*
Here is where you setup a model for how to interface with the database.
*/
// this was taken from the cats.js
var orm = require('../config/orm.js');

var burger = {
	all: function (cb) {
		orm.all('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.delete('burgers', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;