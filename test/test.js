var expect = require("chai").expect; 
var twitter = require("../routes/helpers/twitter"); 


describe("Twitter api call", function() {
    it("should return without errors", function(done) {
        twitter.doAllTwitterRequests(function(error, tweets) {
            //console.log("tweets: " + tweets.length); 
            console.log("error: " + error); 
            
            expect(error).to.be.a('null'); 
            done(); 
        });
    }); 
    
    it("should return a list of tweets", function(done) {
        twitter.doAllTwitterRequests(function(error, tweets) {
            //console.log("tweets: " + tweets.length); 
            expect(tweets).to.be.a('array'); 
            expect(tweets.length).to.be.above(0); 
            done(); 
        });
    });
}); 