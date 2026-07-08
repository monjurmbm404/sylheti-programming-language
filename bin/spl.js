#!/usr/bin/env node

// bin/spl.js
const fs = require('fs');
const path = require('path');
const spl = require('../src/index');

const filePath = process.argv[2];

if (!filePath) {
    console.log("Error: Target file pathway parameter missing from argument array input.");
    process.exit(1);
}

if (path.extname(filePath) !== '.sylheti') {
    console.log("Error: Unsupported target extension format type. SPL context requires a valid `.sylheti` script entry.");
    process.exit(1);
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Critical: Target data pipeline streaming read failed context scope mapping error:", err);
        return;
    }
    spl.run(data);
});