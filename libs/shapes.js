xports.triangle_alternating = triangle_alternating;
const getCharacterRow = function(character,times) {
    return character.repeat(times);
};

const getHollowRow = function(character,times){
    return character +" ".repeat(times-2)+character;
};

const hollow = function(width,index,height) {
    if(index == 1 || index == height){
        return getCharacterRow("*",width);
    }else{
        return getHollowRow("*",width);
    }
};

const filled = function(width) {
    return getCharacterRow("*",width);
};

const alternating = function(width,index){
    if(index%2 == 0){
        return getCharacterRow("+",width);
    }else{
        return getCharacterRow("-",width);
    }
};
const rectangle = function(property,height,width){
    let result = [];
    for(let i = 1; i <= height; i++){
        let row = eval(property)( width,i,height);
        result.push(row);
    }
    console.log(result.join("\n"));
}
const triangle = function(property, height){
    let result = [];
    for(let i = 1; i <= height; i++){
        let row = eval(property)(i,i,height);
        result.push(row);
    }
    console.log(result.join("\n"))
}

const diamond = function(property, height){
    let result = [];
    let odd = true;
    for(let i = 1; i <= height; i+=2){
        let spaces = getCharacterRow(' ',(height-i+1)/2);        
        let middleRow = eval(property)(i,odd,height*2);
        if(property == "hollow"){
           middleRow = eval(property)(i,i,height*2);
        }
        odd = !odd;
        result.push(spaces+middleRow);
    }
    let topPart = result.concat();
    let bottomPart = result.slice(0, (result.length)-1);
    bottomPart = bottomPart.reverse();
    console.log( topPart.concat(bottomPart).join("\n"));
};
exports.diamond_filled = diamond_filled;
