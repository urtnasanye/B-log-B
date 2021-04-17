const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/', function(request, response) {
		 connection.query('SELECT * FROM registerUsers',function(error, results, field){
			 connection.query('SELECT * FROM posts', function(error, posts, field){
				if(!error){
					console.log(results);
					 response.render('pastel', { users : results ,posts: posts});
					 }else {
					 console.log(error);
				 }
			 });
 });
});

module.exports = router;