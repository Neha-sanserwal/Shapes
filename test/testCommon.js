const assert = require("assert");
const common = require("../utils/common.js");

describe("isPositiveInteger",function(){
    it("should validate the whole number", function(){
        assert.ok(common.isPositiveInteger(1));
        assert.ok(common.isPositiveInteger(2));
        assert.ok(common.isPositiveInteger(3));
    });

    it("should invalidate the negative number", function(){
        assert.strictEqual(common.isPositiveInteger(-1),false);
        assert.strictEqual(common.isPositiveInteger(-2),false);
    });

    it("should invalidate zero",function(){
        assert.strictEqual(common.isPositiveInteger(0),false);
    });
});  

describe("isEven",function(){
    it("should validate the even positive number", function(){
        assert.ok(common.isEven(0));
        assert.ok(common.isEven(2));
        assert.ok(common.isEven(4));
    });

    it("should invalidate the odd positive number",function(){
        assert.strictEqual(common.isEven(1),false);
        assert.strictEqual(common.isEven(3),false);
        assert.strictEqual(common.isEven(5),false);
    });
});

describe("toNum",function(){
    it("should return integer for string of positive number",function(){
        assert.strictEqual(common.toNum("0"),0);
        assert.strictEqual(common.toNum("1"),1);
        assert.strictEqual(common.toNum("2"),2);
        assert.strictEqual(common.toNum("3"),3);
    });

    it("should return integer for string of negative number",function(){
        assert.strictEqual(common.toNum("-1"),-1);
        assert.strictEqual(common.toNum("-2"),-2);
        assert.strictEqual(common.toNum("-3"),-3);
    });

    it("should return zero for empty string",function(){
        assert.strictEqual(common.toNum(""),0);
    });
});

describe("mapToArray",function(){
    it("should return array of empty string for empty String",function(){
        assert.deepStrictEqual(common.mapToArray(""),[""]);
    });

    it("should return array for string including commas",function(){
        assert.deepStrictEqual(common.mapToArray("a,1"),['a','1']);
        assert.deepStrictEqual(common.mapToArray("a,"),['a','']);
    });

});

describe("findElement",function(){
    it("should find the element if key is matched",function(){
        assert.deepStrictEqual(common.findElement([[1],[2]],2)[2]);
        assert.deepStrictEqual(common.findElement([["a","1"]],"a"),["a","1"]);
    });
});

describe("updateValue",function(){
    it("should update the value in array if key is found",function(){
        let actual = common.updateValue([['a',1],['b',2]],'a',2);
        let expected = [['a',2],['b',2]]; 
        assert.deepStrictEqual(actual,expected);
    });

    it("should not update the value in array if key is not found",function(){
        let actual = common.updateValue([['a',1],['b',2]],'a',2);
        let expected = [['a',2],['b',2]]; 
        assert.deepStrictEqual(actual,expected);
    });
});
