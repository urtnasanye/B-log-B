const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');
var path = require('path');


router.get('/delete/:rUsers_id', function(request, response) {
   var rUsers_id= request.params.rUsers_id;
     connection.query('DELETE FROM registerUsers WHERE rUsers_id = ?', [rUsers_id], function(error , results, fields){
         if(!error){
             response.redirect('/admin');  //ehnii elementee l damjuulj ugnu 
         }else{
             console.log(error);
         }
     });
    	
    });


    //JQuerynd heregte
    // router.delete('/delete/:rUsers_id', function(request, response) {
        // var rUsers_id= request.params.rUsers_id;
        //   connection.query('DELETE FROM registerUsers WHERE rUsers_id = ?', [rUsers_id], function(error , results, fields){
            //   if(!error){
                //   response.end();  //ehnii elementee l damjuulj ugnu 
            //   }else{
                //   console.log(error);
            //   }
        //   });
            //  
        //  });
    

module.exports=router;