const handleInput = require("../libs/handleInput.js");
const assert = require("reqiure");

const testTransformDataFormat = function() {
    assert.strictEqual(handleInput.transformDataFormat([1,2,3,4]),[[1,2],[3,4]]);
};

const testHandle

