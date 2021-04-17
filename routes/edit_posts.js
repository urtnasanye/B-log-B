const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');


router.get('/editposts/:posts_id', function(request, response) {
   var posts_id= request.params.posts_id;
     connection.query('SELECT * FROM posts WHERE posts_id = ?', [posts_id], function(error , results, fields){
         if(!error){
             response.render('editposts',{users: results[0] });    //ehnii elementee l damjuulj ugnu 
         }else{
             console.log(error);
         }
     });
    });
    
    router.post('/editposts/:posts_id',function(request,response){
        var file=request.files.avatar;
        var posts_id=request.params.posts_id;
        var d_file=request.files.avatar1;
        var d_fileName=d_file.name;
        var title=request.body.title;
         var description=request.body.description;
         var d_description=request.body.description1;
         var category=request.body.category;
         var date=request.body.date;
         console.log(request.files);
         file.mv('./uploads/'+ file.name);
         d_file.mv('./uploads/'+ d_fileName);
        connection.query('UPDATE posts SET file =?, d_file =?, title =?, description =?, d_description =?, category =?, date =?  WHERE posts_id = ?',  [file.name, d_fileName, title, description, d_description, category, date, posts_id], function(error , results, fields){
          if(!error){
              response.redirect('/news'); 
          }else{
              console.log(error);
          }
      });
       
     });
module.exports=router;