"use strict";
const express = require('express');
const router = express.Router();
const mockImage = require('../mocks/mock-fetch-emotion.json');

const request = require("request");


router.post('/fetch-emotion', (req, res) => {

	var options = {
	      method: 'post',

	      body:  {
	      					image: req.body.image
	      			 },

	      json: true,
	      url: 'https://8agk07z9h1.execute-api.us-east-1.amazonaws.com/prod/api/public/emotions'
	  };

	  request(options, function (error, httpResponse, body) {
	    var result = {
	        'error': error,
	        'statusCode': httpResponse && httpResponse.statusCode,
	        'body': body
	    };
	    if (error) {
	      console.log(error);
	      res.send(error);
	    } else {
	     console.log(result.body);
	     res.send(result.body);
	    }
	  });


}); // Post





module.exports = router;