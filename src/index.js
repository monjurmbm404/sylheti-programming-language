// src/index.js

const { tokenize } = require('./lexer/lexer');
const { compileAndRun } = require('./transformer/transformer');

function run(sylhetiCode) {
    // Lexical tokens processing layer can be debugged here
    // const tokens = tokenize(sylhetiCode);
    
    // Process compilation and execute
    compileAndRun(sylhetiCode);
}

module.exports = { run };