var express = require('express');
var router = express.Router();
var https = require('https'); 


console.log("In getty!!!!!!!!!!!!"); 
console.log("api key: " + process.env.GETTY_API_KEY); 
console.log("twitter: " + process.env.TWITTER_CLIENT_ID); 

const options = {
    hostname: "api.gettyimages.com", 
    port: 443, 
    path: '/v3/search/images',
    method: 'GET', 
    headers: {
        'Api-Key': process.env.GETTY_API_KEY
    }
}; 

function makeApiRequest(sendBackResponseToBrowser) {
    var apiResponse = ''; 
    
    https.get(options, function(response){
        response.setEncoding('utf8');
        response.on('data', function(chunk) {
            console.log("received data: "); 
            apiResponse += chunk; 
        }); 
        
        response.on('end', function() {
            console.log("status code: " + this.statusCode); 
            console.log("Complete response: " + apiResponse); 
            /*execute callback*/
            sendBackResponseToBrowser(apiResponse); 
            
        }); 
    }).on("error", function(e) {
        console.log("Got an error: " + e.message); 
    }); 
}





/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express', className: 'CST438' });
  makeApiRequest(function(jsonToSendBack){
      res.send(jsonToSendBack);
  });
   
});

module.exports = router;
