const assert = require("assert");
const getPattern = require("../libs/getPattern.js");
describe("getPattern",function(){

    it("should return the pattern if the pattern is found ",function(){
        let expected = ["*****","*   *","*****"];
        let actual = getPattern.getPattern("rectangle_hollow",3,5);
        assert.deepStrictEqual(actual,expected);
    });

    it("shouldn't return pattern if pattern isn't found",function() {
        let expected = undefined;
        let actual = getPattern.getPattern("rectangle_hol",3,5);
        assert.deepStrictEqual(actual,expected);
    });
});

