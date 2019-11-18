const handleInput = require("./handleInput.js");
const common = require('../utils/common.js');
const constants = require("../utils/constants.js");
const isShapeValid = function(shape) {
    return shape[0]=="-s" && constants.SHAPES.includes(shape[1]);
};

const isPropValid = function(prop) {
    return prop[0] == "-p" && constants.PROPS.includes(prop[1]);
};

const isDimensionValid = function(dimension) {
    if(dimension[0]=="-d" && dimension[1]) {
        let splited = common.mapToArray(dimension[1]);
        splited = splited.map(common.toNum);
        return splited.every(common.isPositiveInteger);
    }
    return dimension[0] == "-d" && dimension[1];
};

const isValid = function(option) {
    return isShapeValid(option) || isPropValid(option) || isDimensionValid(option);
};

exports.isShapeValid = isShapeValid;
exports.isPropValid = isPropValid;
exports.isDimensionValid = isDimensionValid;
exports.isValid = isValid;
