var connection = require('./connection.js');

//create the methods that will execute the necessary MySQL commands in the controllers
function printQuestions(num){
	var arr = [];

	for (var i=0; i<num; i++){
		arr.push('?')
	}
	return arr.toString();
}
function objectToSql(ob){
	var arr = [];

	for(var key in ob) {
		arr.push(key + '=' + ob[key]); 
	}

	return arr.toString();
}

var orm = {
	selectAll: function (tableInput,cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
},

	create: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO' + table;

		queryString = queryString + '(';
		queryString = queryString + 
		cols.toString();
		queryString = queryString +')';
		queryString = queryString +'VALUES (';
		queryString = queryString +
		printQuestionMarks(vals.length);
		queryString = queryString + ')';
		console.log(queryString)

		connection.query(queryString, vals, function(err,result){
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function (tableInput,valOfCol) {
		var queryString = 'INSERT INTO ' + tableInput + '(burger_name) VALUES('  + valOfCol + ')';
		connection.query(queryString, [valOfCol], function (err, result) {
			console.log(result);
		});
},
	updateOne: function (tableInput,valOfCol,condition,cb) {
		var queryString = 'UPDATE ' + tableInput;

		queryString = queryString +'SET';
		queryString = queryString +
		objectToSql(objColVals);
		queryString = queryString + 'WHERE ';
		queryString = queryString + condition;

		console.log(queryString)
		connection.query(queryString,
			function(err, result){
				if(err)throw err;
				cb(result);
			});

	}
};

module.exports = orm;




