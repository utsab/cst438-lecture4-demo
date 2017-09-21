var gettyAPI = require("./helpers/getty"); 
var twitterAPI = require("./helpers/twitter"); 
var async = require('async'); 
var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
    async.parallel([
        twitterAPI.doAllTwitterRequests,
        gettyAPI.makeApiRequest
    ],
    // optional callback
    function(err, results) {
        // results is an array
        // first element is going to be 'tweets'
        // second element is going to be 'imageURI'
        
        var tweets = results[0]; 
        var imageURI = results[1]; 
        
        console.log("num tweets!!!!: " + tweets.length);
        console.log("image URI!!!: " + imageURI); 
        res.render('twitterAndGetty', {tweets: tweets, imageURI: imageURI});
    });
  
});

module.exports = router;

