const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');


router.get('/deleteposts/:posts_id', function(request, response) {
   var posts_id= request.params.posts_id;
     connection.query('DELETE FROM posts WHERE posts_id = ?', [posts_id], function(error , results, fields){
         if(!error){
             response.redirect('/indextopics');  //ehnii elementee l damjuulj ugnu 
         }else{
             console.log(error);
         }
     });
    	
    });


module.exports=router;