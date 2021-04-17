const express=require('express');
const router = express.Router();
const connection=require('../connection/connection');

router.get('/arhitektur', function(request, response) {
	response.render('Japanese Arhichektur');
});

module.exports = router;