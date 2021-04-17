const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');

router.get('/login', function(request, response) {
	response.render('NewPage');
 });


 router.post('/login', function(request, response) {
	var username = request.body.username;                                     //body dotorh name ni username tei bwl 
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM registerUsers WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			console.log(results);
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/admin');
			} else {			
				
				response.redirect('/');
				
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


// router.post('/register',function(request,response){
	//  var username=request.body.username;
	//  var lastname=request.body.lastname;
	 // var email=request.body.email;
	//  var password=request.body.password;
	 //// connection.query( 'INSERT INTO `registerUsers`( username, email, password)  VALUES (?,?,?);',[username,email,password],
	// function(error, results, fields){
	//	response.redirect('/');
	 // });
	//});

module.exports = router;
