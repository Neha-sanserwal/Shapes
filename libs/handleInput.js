const isValid = require("./isValid.js").isValid;
const getPattern = require("./getPattern.js").getPattern;
const common = require('../utils/common.js');
const transformAndUpdateData = require('./transformAndUpdateData.js');
const DEFAULT_DATA = require('../utils/constants.js').DEFAULT_DATA;
const ERR_MESSAGE = require('../utils/constants.js').ERR_MESSAGE;

const getSecondElement = function(resultantData,element) {
    resultantData.push(element[1]);
    return resultantData;
};

const areDimensionPropsValid = function(updatedData,errMessage) {

    let areRectDimensionInvalid = (updatedData[0] == "rectangle") && (updatedData[2].length < 2 );
    if(areRectDimensionInvalid) {
        errMessage[0] = true;
    }
    return errMessage;
};

const handleInput = function(userInput) {

    let transformedData = transformAndUpdateData.transformDataFormat(userInput);
    let isValidated = transformedData.every(isValid);
    let resulted_pattern = "";
    let errMessage = ERR_MESSAGE;
    if(isValidated){
        let updatedData = transformedData.reduce(transformAndUpdateData.updateData,DEFAULT_DATA);
        updatedData = updatedData.reduce(getSecondElement,[]);
        updatedData[2] = common.mapToArray(updatedData[2]); 
        updatedData[2] = updatedData[2].map(common.toNum);
        let ShapeAndProp = updatedData.slice(0,2).join("_");
        let height = updatedData[2][0];
        let width = updatedData[2][1];
        errMessage = areDimensionPropsValid(updatedData,errMessage); 
        resulted_pattern = getPattern(ShapeAndProp,height,width).join("\n");
    };
    if((!isValidated) || errMessage[0]) {
        return errMessage[1];
    }
    return resulted_pattern;

};

exports.handleInput = handleInput;
exports.areDimensionProper = areDimensionPropsValid;
