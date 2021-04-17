const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');
var uuid = require('uuid').v4;
const multer = require('multer');


router.get('/users', function(request, response) {
    	response.render('NewPage');
    });
    
    router.post('/users',function(request,response){
      var user_img=request.files.user_img;
        var username=request.body.username;
         var lastname=request.body.lastname;
         var email=request.body.email;
        var password=request.body.password;
        user_img.mv('./uploads/'+ user_img.name);

         connection.query( 'INSERT INTO `registerUsers`( user_img,username, email, password)  VALUES (?,?,?,?);',[user_img.name,username,email,password],
       function(error, results, fields){
           response.redirect('/');
         });
       });
module.exports=router;