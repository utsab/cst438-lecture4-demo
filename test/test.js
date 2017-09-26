var should = require("should"); 
var request = require("request"); 
var expect = require("chai").expect; 
var  util = require("util"); 

describe("hello world", function() {
    it("checks that 1 is equal to 1", function(done) {
        var x = 1; 
        expect(x).to.equal(1); 
        done(); 
    }); 
}); 