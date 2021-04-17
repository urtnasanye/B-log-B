const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/creare', function(request, response) {
	response.render('creare(users)');
});



module.exports=router;