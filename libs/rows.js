const isEven = require('../utils/common.js').isEven;

const getFilledRow = function(character,times) {
    return character.repeat(times);
};

const getHollowRow = function(character,times){
    let spaces = " ";
    if(times >= 2){
        return character+(spaces.repeat(times-2))+character;
    }
    return "";
};

const getAlternating = function(idx,width) {
    
    let minusRow = ''; 
    let plusRow ='';
    
    if(isEven(idx)){
        return plusRow = getFilledRow("+",width);
    }else{
        return minusRow = getFilledRow("-",width);
    }
};

const getHollowOrFilled = function(idx,height,width){
    let islastOrFirst = (idx == 1) || (idx == height);
    let hollowRow = (!islastOrFirst) && getHollowRow("*",width);
    let filledRow = islastOrFirst && getFilledRow("*",width);
    return filledRow || hollowRow;       
};

exports.getFilledRow = getFilledRow;
exports.getHollowRow = getHollowRow;
exports.getAlternating = getAlternating;
exports.getHollowOrFilled = getHollowOrFilled;
