const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/category', function(request, response) {
	response.render("category");
 });

 router.post('/editposts/:posts_id',function(request,response){
     var posts_id=request.params.posts_id;
	connection.query('SELECT * FROM posts', function(error , results, fields){
	  if(!error){
		  response.redirect('/news'); 
	  }else{
		  console.log(error);
	  }
  });
   
 });

module.exports = router;