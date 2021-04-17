const express=require('express');
const router = express.Router();
var path = require('path');
var uuid = require('uuid').v4;
const multer = require('multer');
const connection=require('../connection/connection');


 var storage = multer.diskStorage ({
    destination: (request, file , cb) =>{
	  cb(null, 'uploads');
   },
   filename:(request,file, cb) => {
          const {originalname} = file;
		  cb(null, `${uuid()}-${originalname}`);
    }
 });


const { request } = require('http');
var upload = multer({storage});


router.get('/createtopics', function(request, response) {
	response.render('create(topics)');
});

router.post('/createtopics',function(request,response){
	console.log("aaaaaaaaa"+request.body);
	var file=request.files.avatar;
	var d_file=request.files.avatar1;
	var d_fileName=d_file.name;
	var title=request.body.title;
	 var description=request.body.description;
	 var d_description=request.body.description1;
	 var category=request.body.category;
	 var date=request.body.date;
	 file.mv('./uploads/'+ file.name);
	 d_file.mv('./uploads/'+ d_fileName);
	 
	 connection.query( 'INSERT INTO `posts`( file, d_file, title, description, d_description,category,date)  VALUES (?,?,?,?,?,?,?);',
	 [file.name, d_fileName, title, description, d_description,category, date],
     function(error, results, fields){
	    if(!error){
		 response.redirect('/news');
	    }else{
		    console.log(error);
	    }
	  });
 });


//router.post('/uploads', upload.array('avatar'), (request,response)=>{
//return response.json({ status : 'Ok', uploaded: request.files.length});
  //   });

	
module.exports=router;