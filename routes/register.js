const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');
var uuid = require('uuid').v4;
const multer = require('multer');


router.get('/register', function(request, response) {
    	response.render('NewPage');
    });
    
    router.post('/register',function(request,response){
        var username=request.body.username;
         var lastname=request.body.lastname;
         var email=request.body.email;
        var password=request.body.password;
        

         connection.query( 'INSERT INTO `registerUsers`( username, email, password)  VALUES (?,?,?);',[username,email,password],
       function(error, results, fields){
           response.redirect('/login');
         });
       });
module.exports=router;