const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');



router.get('/indextopics', function(request, response) {
	if (request.session.loggedin) {
		 connection.query('SELECT * FROM posts',function(error, results, fields){
			 console.log(results);
		 response.render('index(topics)', { users : results});
		 
		 });
	 } else {
		 response.render('NewPage', { error : "Please login!"});
	 }
 });

module.exports=router;