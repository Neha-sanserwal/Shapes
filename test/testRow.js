const assert = require("assert");
const rows = require("../libs/rows.js");

describe("getFilledRow", function(){
    it("should not give row of pattern for 0",function(){
        assert.strictEqual(rows.getFilledRow("*",0),'');
        assert.strictEqual(rows.getFilledRow("-",0),'');
    });

    it("should give row of pattern for even numbers",function(){
        assert.strictEqual(rows.getFilledRow("*",2),"**");
        assert.strictEqual(rows.getFilledRow(".",4),"....");
    });

    it("should give row of pattern for odd numbers",function(){
        assert.strictEqual(rows.getFilledRow("*",1),"*");
        assert.strictEqual(rows.getFilledRow(".",3),"...");
    });
});

describe("getHollowRow", function(){
    it("should not give row of pattern for 0",function(){
        assert.strictEqual(rows.getHollowRow("*",0),"");
        assert.strictEqual(rows.getHollowRow("-",0),'');
    });

    it("should give row of pattern for even numbers",function(){
        assert.strictEqual(rows.getHollowRow("*",2),"**");
        assert.strictEqual(rows.getHollowRow(".",4),".  .");
    });

    it("should give row of pattern for odd numbers",function(){
        assert.strictEqual(rows.getHollowRow("*",1),"");
        assert.strictEqual(rows.getHollowRow(".",3),". .");
    });
});

describe("getAlternating", function(){
    it("should not give row of pattern for 0 width",function(){
        assert.strictEqual(rows.getAlternating(1,0),"");
        assert.strictEqual(rows.getAlternating(2,0),'');
    });

    it("should give row of '+' pattern for even row number",function(){
        assert.strictEqual(rows.getAlternating(0,2),"++");
        assert.strictEqual(rows.getAlternating(2,2),"++");
        assert.strictEqual(rows.getAlternating(4,4),"++++");
    });

    it("should give row of '-' pattern for odd row number",function(){
        assert.strictEqual(rows.getAlternating(1,1),"-");
        assert.strictEqual(rows.getAlternating(3,3),"---");
    });
});

describe("getHollowedOrFilled",function(){
    it("should give hollow row if row number is zero", function(){
        assert.strictEqual(rows.getHollowOrFilled(0,4,3),"* *");
    });

    it("should give filled row if row number is 1",function(){
        assert.strictEqual(rows.getHollowOrFilled(1,2,3),"***");
    });

    it("should give filled row if row number is equal to height",function(){
        assert.strictEqual(rows.getHollowOrFilled(3,3,4),"****");
    });

    it("should give hollow row for row not-equal to 1 or height",function(){
        assert.strictEqual(rows.getHollowOrFilled(3,4,3),"* *");
    });
});
