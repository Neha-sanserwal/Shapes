const handleUserInput = require('./libs/handleInput.js').handleInput; 
const userInput = process.argv.slice(2);
console.log(handleUserInput(userInput));


