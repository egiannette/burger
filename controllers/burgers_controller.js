/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// this was taken from the cats_controller.js I will need to verify it works and figure out the router logic

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(req.body.
		burger_name, function(result){

// router.put('/cats/update/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

		console.log(result);
		res.redirect('/');
	});
});

router.put('/burgers/update', function(req,res){
	burger.updateOne(req.body.burger_name, function(result){
		console.log(result);
		res.redirect('/');
	});
});




module.exports = router;