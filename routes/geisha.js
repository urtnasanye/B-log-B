const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/geisha', function(request, response) {
	response.render('Geisha-Japan (more)');
});

module.exports=router;