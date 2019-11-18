const handleInput = require("../libs/handleInput.js");
const assert = require("assert");

const testTransformDataFormat = function() {
    assert.deepStrictEqual(handleInput.transformDataFormat([1,2,3,4]),[[1,2],[3,4]]);
};

const testToNum = function() {
    assert.strictEqual(handleInput.toNum("2"),2);
};

const testMapToArray = function() {
    assert.deepStrictEqual(handleInput.mapToArray("2,3,4"),[2,3,4]);
};

const testUpdateData = function() {
    assert.deepStrictEqual(handleInput.updateData(["rectangle"],["-s","triangle"]),["triangle"]);
    
    assert.deepStrictEqual(handleInput.updateData(["rectangle","filled"],["-p","hollow"]),["rectangle","hollow"]);
    
    assert.deepStrictEqual(handleInput.updateData(["triangle","filled","3,4"],["-d","5,5"]),["triangle","filled",[5,5]]);
    
    assert.deepStrictEqual(handleInput.updateData(["rectangle"],["-t","triangle"]),["rectangle"]);
};

const testAreDimensionProper = function() {

    let updatedData = ["rectangle", "filled",[5,5]];
    let errMessage = [false, "Wrong Input"];
    assert.deepStrictEqual(handleInput.areDimensionProper(updatedData,errMessage),[false, "Wrong Input"]);

    updatedData = ["rectangle", "filled",[5]];
    errMessage = [false, "Wrong Input"];
    assert.deepStrictEqual(handleInput.areDimensionProper(updatedData,errMessage),[true, "Wrong Input"]);
    
    updatedData = ["triangle", "filled",[5]];
    errMessage = [false, "Wrong Input"];
    assert.deepStrictEqual(handleInput.areDimensionProper(updatedData,errMessage),[false, "Wrong Input"]);
};

const testHandleUserOption = function() {
    testTransformDataFormat();
    testToNum();
    testMapToArray();
    testUpdateData();
    testAreDimensionProper();
}

exports.testHandleUserOption = testHandleUserOption;
