const POSSIBLE_PATTERNS = require('../utils/constants.js').POSSIBLE_PATTERNS;

const getMatchingPattern = function(indexShape,pattern,index) {
    if(pattern.includes(indexShape[0])) {
        indexShape[1] = pattern[1];
    };
    return indexShape ; 
};
const getPattern = function(shapeAndProp,height,row) {

    let possiblePatterns = POSSIBLE_PATTERNS;
  
    let pattern = possiblePatterns.reduce(getMatchingPattern,[shapeAndProp]);
    if(pattern[1]){
       return pattern[1](height,row);
    }
};

exports.getMatchingPattern = getMatchingPattern;
exports.getPattern = getPattern;
