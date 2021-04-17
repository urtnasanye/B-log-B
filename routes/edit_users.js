const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');


router.get('/edit/:rUsers_id', function(request, response) {
   var rUsers_id= request.params.rUsers_id;
     connection.query('SELECT * FROM registerUsers WHERE rUsers_id = ?', [rUsers_id], function(error , results, fields){
         if(!error){
             response.render('user/edit',{user: results[0] });  //ehnii elementee l damjuulj ugnu 
         }else{
             console.log(error);
         }
     });
    	
    });
    
    router.post('/edit/:rUsers_id',function(request,response){
        var user_img=request.files.user_img;
        var username=request.body.username;
         var rUsers_id=request.params.rUsers_id;
         var email=request.body.email;
        var password=request.body.password;
        
        user_img.mv('./uploads/'+ user_img.name);
        connection.query('UPDATE registerUsers SET user_img =? ,username =?,  email =?, password =? WHERE rUsers_id = ?', [user_img.name,username,email, password,rUsers_id], function(error , results, fields){
          if(!error){
              response.redirect('/admin'); 
          }else{
              console.log(error);
          }
      });
       
     });
module.exports=router;