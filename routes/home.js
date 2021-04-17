const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/home', function(request, response) {
	response.render('pastel');
 });

module.exports = router;