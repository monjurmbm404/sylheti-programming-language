// src/transformer/transformer.js

const keywords = require('../keywords');

function compileAndRun(sylhetiCode) {
    // 1. Convert Bengali numerals to English digits safely
    const numMap = {'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'};
    let processedCode = sylhetiCode.replace(/[০-৯]/g, d => numMap[d]);

    // 2. Sort keywords by length descending (longest words first)
    const sortedKeywords = [...keywords].sort((a, b) => {
        const lenA = a.regex.source ? a.regex.source.length : a.regex.toString().length;
        const lenB = b.regex.source ? b.regex.source.length : b.regex.toString().length;
        return lenB - lenA;
    });

    // 3. Clean Unicode Word Boundary Replacement
    // Instead of raw matching, we ensure keywords are standalone words
    sortedKeywords.forEach(item => {
        const cleanSource = item.regex.source || item.regex.toString().replace(/^\/|\/g$/g, '');

        // This regex ensures the Bengali keyword is NOT surrounded by other Bengali letters or underscores
        const unicodeBoundaryRegex = new RegExp(`(?<![\\u0980-\\u09FF_])${cleanSource}(?![\\u0980-\\u09FF_])`, 'g');

        processedCode = processedCode.replace(unicodeBoundaryRegex, item.replacement);
    });

    // 4. Wrap console.log arguments with parentheses automatically
    // Turns: console.log পরীক্ষা(50)  ->  console.log(পরীক্ষা(50));
    // (uses Unicode-safe matching to end of line, since \w doesn't match Bengali letters)
    processedCode = processedCode.replace(
        /console\.log[^\S\r\n]+([^\r\n;]+)/g,
        (_, value) => `console.log(${value.trim()});`
    );

    // 5. Try executing the final JavaScript code
    try {
        new Function(processedCode)();
    } catch (err) {
        console.error("\x1b[31m%s\x1b[0m", "Fatal Encounter: Runtime Error!");
        console.error("\x1b[31m%s\x1b[0m", "Error Details: " + err.message);
        console.log("\n--- Generated Output for Debugging ---");
        console.log(processedCode);
        console.log("---------------------------------------");
    }
}

module.exports = { compileAndRun };