// src/lexer/lexer.js

function tokenize(sylhetiCode) {
    const lines = sylhetiCode.split('\n');
    const tokens = [];

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) return; 

        if (trimmed.startsWith('ফাজলামি') || trimmed.startsWith('//')) {
            tokens.push({ type: 'COMMENT', value: trimmed, line: index + 1 });
            return;
        }

        const words = trimmed.match(/"[^"]*"|\b\w+\b|[^\w\s]/g) || [];
        
        words.forEach(word => {
            tokens.push({
                type: 'TOKEN',
                value: word,
                line: index + 1
            });
        });
    });

    return tokens;
}

module.exports = { tokenize };