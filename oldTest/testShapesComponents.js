const assert = require('assert');
const shapesComponents = require('../libs/shapes.js')


const testRectangle = function() {
    assert.deepStrictEqual(shapesComponents.rectangle_filled(3,4),["****", "****", "****"]);
    assert.deepStrictEqual(shapesComponents.rectangle_hollow(3,4),["****","*  *","****"]);
    assert.deepStrictEqual(shapesComponents.rectangle_alternating(3,4),["----","++++","----"]);
    
};

const testTriangle = function() {
    assert.deepStrictEqual(shapesComponents.triangle_filled(4,2),["*","**","***","****"]);
    
    assert.deepStrictEqual(shapesComponents.triangle_hollow(4,2),["*","**","* *","****",]);
    assert.deepStrictEqual(shapesComponents.triangle_alternating(4,2),["-","++","---","++++"]);
};

const testShapesComponents = function() {
    console.log("Testing Rectangle .....");
    testRectangle();
    console.log("Testing Traingle .....");
    testTriangle();
};



exports.testShapesComponents = testShapesComponents;
