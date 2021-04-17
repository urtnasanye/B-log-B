const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');

router.get('/tea/:posts_id', function(request, response) {
	var posts_id=request.params.posts_id;
		connection.query('SELECT * FROM posts WHERE posts_id = ?', [posts_id],function(error, results, fields){
		if(!error){
			response.render('Tea ceremony japanese', { post : results[0]});
	} else {
	  console.log(error);
	}
});
});

module.exports=router;