var expect = require("chai").expect; 


var add = require("../simple-function").add; 

describe("Add function", function() {
    it("should return the sum of 2 numbers", function(done) {
       expect(add(2,4)).to.equal(6); 
       expect(add(2,4)).to.equal(3); 
       done(); 
    }); 

}); 



//console.log(add(3, 4)); 