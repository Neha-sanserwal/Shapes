const isArgValid = require("../libs/isValid");
const assert = require("assert");
const testIsPositiveInteger = function() {
    assert.strictEqual(isArgValid.isPositiveInteger(2), true);
    assert.strictEqual(isArgValid.isPositiveInteger(-2),false);
    assert.strictEqual(isArgValid.isPositiveInteger(2.3),false);
};

const testIsShapeValid = function(shape) {
    assert.strictEqual(isArgValid.isShapeValid(["-s","triangle"]), true);
    assert.strictEqual(isArgValid.isPositiveInteger(["-t","triangle"]),false);
    assert.strictEqual(isArgValid.isPositiveInteger("-s","rombus"),false);
};

const testIsPropValid = function(prop){
    
    assert.strictEqual(isArgValid.isPropValid(["-p","filled"]), true);
    assert.strictEqual(isArgValid.isPositiveInteger(["-p","semiFilled"]),false);
    assert.strictEqual(isArgValid.isPositiveInteger(["-l","filled"]),false);
};

const testIsDimensionValid = function(prop) {

    assert.strictEqual(isArgValid.isDimensionValid(["-d","3,2"]), true);
    assert.strictEqual(isArgValid.isPositiveInteger(["-t","2,2"]),false);
    assert.strictEqual(isArgValid.isPositiveInteger(["-d","22,"]),false);
};

const testIsArgValidComponents = function() {
    testIsPositiveInteger();
    testIsShapeValid();
    testIsPropValid();
    testIsDimensionValid();
};

exports.testIsArgValidComponents = testIsArgValidComponents;
