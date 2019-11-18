const testGetRows = require("./testGetRows.js").testGetRows;  
const testShapesComponents = require("./testShapesComponents.js").testShapesComponents;
const testIsArgValidComponents = require("./testIsArgValid.js").testIsArgValidComponents;

const testHandleUserOption = require("./testHandleUserOption").testHandleUserOption;

const runTests = function() {
    console.log(">>>> Running Tests....");
    console.log("testing Get Rows");
    testGetRows();
    console.log("testing Shape Components");
    testShapesComponents();
    console.log("testing IsArgValid Components");
    testIsArgValidComponents();
    console.log("testing HandleUserOption");
    testHandleUserOption();
    console.log(">>>> Done.");
};

runTests();
