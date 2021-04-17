const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/create', function(request, response) {
	response.render('create');
});

module.exports=router;