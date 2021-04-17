const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/indexusers', function(request, response) {
	response.render('index(users)');
});

module.exports=router;