const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/contact', function(request, response) {
	response.render('contact');
});
router.post('/contact',function(request,response){
	var firstname=request.body.firstname;
	 var lastname=request.body.lastname;
	var country=request.body.country;
	var subject=request.body.subject;
	connection.query( 'INSERT INTO `contact`( firstname,lastname, country, subject)  VALUES (?,?,?,?);',[firstname,lastname,country,subject], function(error , results, fields){
		response.redirect('/contact');
	});
  });
  
module.exports=router;