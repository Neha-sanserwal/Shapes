const isArgValid = require("../libs/isValid.js");
const assert = require("assert");
describe("isShapeValid" ,function() {
    
    it("shouldn't validate if element has invalid predecessor and shape", function() {
        assert.ok(!isArgValid.isShapeValid(["-t","myshape"]));
        assert.ok(!isArgValid.isShapeValid("-l","rect"));
    });

    it("shouldn't validate if element has invalid shape", function() {
        assert.ok(!isArgValid.isShapeValid(["-t","rombus"]));
        assert.ok(!isArgValid.isShapeValid("-l","myshape"));
    });

    it("shouldn't validate if element has invalid predecessor", function() {
        assert.ok(!isArgValid.isShapeValid(["-t","triangle"]));
        assert.ok(!isArgValid.isShapeValid("-l","rectangle"));
    });

    it("should validate if element has valid shape preceded by -s",function() {
        
        assert.ok(isArgValid.isShapeValid(["-s","triangle"]));
        assert.ok(isArgValid.isShapeValid(["-s","rectangle"]));
    });
});

describe("isPropValid" ,function() {
    
    it("shouldn't validate if element has invalid predecessor and prop", function() {
        assert.ok(!isArgValid.isPropValid(["-t","myprop"]));
        assert.ok(!isArgValid.isPropValid("-l","fulled"));
    });

    it("shouldn't validate if element has invalid prop", function() {
        assert.ok(!isArgValid.isPropValid(["-p","solid"]));
        assert.ok(!isArgValid.isPropValid("-p","fulled"));
    });

    it("shouldn't validate if element has invalid predecessor", function() {
        assert.ok(!isArgValid.isPropValid(["-t","filled"]));
        assert.ok(!isArgValid.isPropValid("-l","alternating"));
    });

    it("should validate if element has valid prop preceded by -p",function() {
        
        assert.ok(isArgValid.isPropValid(["-p","filled"]));
        assert.ok(isArgValid.isPropValid(["-p","hollow"]));
    });
});

describe("isDimensionValid" ,function() {
    
    it("shouldn't validate if element has invalid predecessor and dimension", function() {
        assert.ok(!isArgValid.isDimensionValid(["-t","mydimension"]));
        assert.ok(!isArgValid.isDimensionValid(["-l","rect"]));
    });

    it("shouldn't validate if element has invalid dimensions", function() {
        assert.ok(!isArgValid.isDimensionValid(["-d","a,b"]));
        assert.ok(!isArgValid.isDimensionValid(["-d","1,"]));
        assert.ok(!isArgValid.isDimensionValid(["-d","1,,"]));
        assert.ok(!isArgValid.isDimensionValid(["-d","1,,,2"]));
    });

    it("shouldn't validate if element has invalid predecessor", function() {
        assert.ok(!isArgValid.isDimensionValid(["-t","1,2"]));
        assert.ok(!isArgValid.isDimensionValid(["-l","2"]));
    });

    it("should validate if element has valid dimensions preceded by -d",function() {
        
        assert.ok(isArgValid.isDimensionValid(["-d","1,2"]));
        assert.ok(isArgValid.isDimensionValid(["-d","1,2"]));
    });
});



