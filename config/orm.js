var connection = require('./connection.js');

//create the methods that will execute the necessary MySQL commands in the controllers

var orm = {
	selectAll: function (tableInput) {
		var queryString = 'SELECT * FROM ' + tableInput;
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
},
	insertOne: function (tableInput,valOfCol) {
		var queryString = 'INSERT INTO ' + tableInput + '(burger_name) VALUES('  + valOfCol + ')';
		connection.query(queryString, [valOfCol], function (err, result) {
			console.log(result);
		});
},
	updateOne: function (tableInput,valOfCol) {
		var queryString = 'UPDATE ' + tableInput + ' SET devoured = 1 WHERE burger_name = ' + valOfCol;
		connection.query(queryString, [valOfCol], function (err, result) {
			console.log(result);
		});
}
};

module.exports = orm;




