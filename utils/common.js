const isPositiveInteger = function(num) {
    return num > 0 && Number.isInteger(num);
};

const isEven = function(num) {
    return num%2 == 0;
};

const toNum = function(dimension) {
    return +(dimension);
};

const mapToArray = function(dimension) {
    let splited = dimension.split(",");
    return splited;
};

const findElement = function(defaultData,key){
    return defaultData.find(function(element){
        return element[0] == key;
    }
    );
};

const updateValue = function(defaultData,key,value){
    let element = findElement(defaultData,key);
    if(element){
        element[1] = value;
    }
    return defaultData;
};


exports.isPositiveInteger = isPositiveInteger;
exports.isEven = isEven;
exports.mapToArray = mapToArray;
exports.findElement = findElement;
exports.updateValue = updateValue;
exports.toNum = toNum;
