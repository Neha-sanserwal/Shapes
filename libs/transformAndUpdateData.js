const updateValue = require('../utils/common.js').updateValue;
const transformDataFormat = function(userInput) {

    let options = [];
    for(let i = 0; i < userInput.length; i += 2) {
        let option = userInput.slice(i,i+2);
        options.push(option);
    }
    return options;    
};


const updateData = function(defaultData,optionElement) {
    updateValue(defaultData,optionElement[0],optionElement[1]);
    return defaultData;
};

exports.transformDataFormat = transformDataFormat;
exports.updateData = updateData;

