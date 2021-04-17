const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');


 router.get('/admin', function(request, response) {
	if (request.session.loggedin) {
		 connection.query('SELECT * FROM registerUsers',function(error, results, fields){
			 console.log(results);
		 response.render('index(', { users : results});
		 
		 });
	 } else {
		 response.render('NewPage', { error : "Please login!"});
	 }
 });


// router.get('/', function(request, response) {
	// connection.getConnection(function(error, tempCont){
		// if(!!error){
			// tempCont.release();
			// console.log('Error');
		// }else{
			// console.log('Connected');
// 
			// tempCont.query("Select * FROM registerUsers", function(error , rows, fields){
				// tempCont.release();
			// if(!!error){
				// console.log('Error in the query');
// 
			// }else{
				// response.json(rows);
			// }
			// })
		
		// }
	// });
// })

module.exports=router;