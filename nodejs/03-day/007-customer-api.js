var express = require('express');
var router = express.Router();

var customers = [
	{id:1, name:'Vivek', email:'vivek@gmail.com', phone:'112233', address:'ahmedabad'},
	{id:2, name:'Rama', email:'vivek@gmail.com', phone:'112233', address:'ahmedabad'},
	{id:3, name:'Krishna', email:'vivek@gmail.com', phone:'112233', address:'ahmedabad'},
	{id:4, name:'Rahim', email:'vivek@gmail.com', phone:'112233', address:'ahmedabad'}
];

router.get('/', function (req, res) {
	res.send(customers);
});

router.put('/', function (req, res) {
	let customer = req.body;
	for (var i = 0; i < customers.length; i++) {
		if(customer.id == customers[i].id){
			customers[i] = customer;
		}
	}
	res.send({result:'success', msg:'customer updated successfully.'});
});

router.delete('/', function (req, res) {
	let customer = req.body;
	let temp = [];
	for (var i = 0; i < customers.length; i++) {
		if(customer.id != customers[i].id){
			temp.push(customers[i]);
		}
	}
	customers = temp;
	res.send({result:'success', msg:'customer delete successfully.'});
});

router.post('/', function (req, res) {
	console.log("customer:"+JSON.stringify(req.body));
	customers.push(req.body);
	res.send({result:'success', msg:'customer added successfully.'});
});

module.exports = router;


