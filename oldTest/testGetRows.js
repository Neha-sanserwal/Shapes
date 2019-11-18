const assert = require('assert');
const getRows = require('../libs/rows.js');

const testIsEven = function() {
    console.log("testing isEven when number is even");
    assert.strictEqual(getRows.isEven(2),true);
    console.log("testing isEven when number is odd");
    assert.strictEqual(getRows.isEven(1),false);
};

const testGetFilledRow = function() {
    console.log("testing getFilledRow");
    assert.strictEqual(getRows.getFilledRow("x",3),"xxx");
};

const testGetHollowRow = function() {
    console.log("testing getHollowRow");
    assert.strictEqual(getRows.getHollowRow("x",4),"x  x");
    assert.strictEqual(getRows.getHollowRow("x",2),"xx");
};

const testGetAlternating = function() {
    console.log("testing getAlternating");
    assert.strictEqual(getRows.getAlternating(2,2),"++");
    assert.strictEqual(getRows.getAlternating(3,2),"--");
};

const testGetHollowOrFilled = function() {
    console.log("testing getHollowOrFilled");
    assert.strictEqual(getRows.getHollowOrFilled(1,3,4),"****");
    assert.strictEqual(getRows.getHollowOrFilled(2,3,4),"*  *");
    assert.strictEqual(getRows.getHollowOrFilled(1,4,1),"*");
};

const testGetRows = function() {
    testIsEven();
    testGetFilledRow();
    testGetHollowRow();
    testGetAlternating();
    testGetHollowOrFilled();
};

exports.testGetRows = testGetRows;
