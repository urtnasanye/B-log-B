const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/contactUsers', function(request, response) {
	if (request.session.loggedin) {
		 connection.query('SELECT * FROM contact',function(error, results, fields){
			 console.log(results);
		 response.render('contactUser', { users : results});
		 
		 });
	 } else {
		 response.render('NewPage', { error : "Please login!"});
	 }
 });


module.exports=router;