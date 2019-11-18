const assert = require('assert');
const transformAndUpdateData = require('../libs/transformAndUpdateData.js');

describe("transformDataFormat",function() {
    it("should return empty array for empty array", function() {
        let actual = transformAndUpdateData.transformDataFormat([]);
        let expected =  [];
        assert.deepStrictEqual(actual, expected);
    });

    it("should pair consecutive elements of array of odd length", function() {
        let actual = transformAndUpdateData.transformDataFormat([1,2,3]);
        let expected =  [[1,2],[3]];
        assert.deepStrictEqual(actual, expected);
    });
    
    it("should pair consecutive elements of array of even length" , function(){
        let actual = transformAndUpdateData.transformDataFormat([1,2]);
        let expected =  [[1,2]];
        assert.deepStrictEqual(actual, expected);
    });
});

describe("updateData", function() {
    it("should update the data give if key is matched",function() {
        let actual = transformAndUpdateData.updateData([["a",1],["b",2]],["b",3]);
        let expected = [["a",1],["b",3]];
        assert.deepStrictEqual(actual,expected);
    })
})
