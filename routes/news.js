const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/news', function(request, response) {
		 connection.query('SELECT * FROM posts',function(error, results, field){
		if(!error){
		console.log(results);
		 response.render('newsPage(update)', { users : results});
		 }else {
		 console.log(error);
	 }
 });
});


//Delete
 //connection.connect(function(err) {
	//if (err) throw err;
//	 var sql = "DELETE FROM posts WHERE posts_id='6'";
//	 connection.query(sql, function (err, result) {
//	   if (err) throw err;
//	   console.log("Number of records deleted: " + result.affectedRows);
//	 });
  // });

module.exports = router;