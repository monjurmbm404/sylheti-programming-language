// src/keywords.js

const keywords = [
    // 💬 Comments
    { regex: /পরে_দেখুম/g, replacement: '// TODO:' },
    { regex: /এইডা_ঠিক_কর/g, replacement: '// FIXME:' },
    { regex: /মনে_রাখ/g, replacement: '// NOTE:' },
    { regex: /ফাজলামি/g, replacement: '//' },

    // ⚡ Async
    { regex: /অপেক্ষা_কর/g, replacement: 'await' },
    { regex: /কথা_দিলাম/g, replacement: 'Promise' },
    { regex: /পরে_কর/g, replacement: 'async' },

    // 🔀 Condition & Match
    { regex: /নাঅইলে_যদি/g, replacement: 'else if' },
    { regex: /যা_অউক/g, replacement: 'default' },
    { regex: /নাঅইলে/g, replacement: 'else' },
    { regex: /যদি/g, replacement: 'if' },
    { regex: /বাছ/g, replacement: 'switch' },
    { regex: /দফা/g, replacement: 'case' },
    { regex: /میلاؤ/g, replacement: 'match' },

    // 🔁 Loops
    { regex: /একএক_ঘুর/g, replacement: 'for...of' },
    { regex: /যতোদিন_না/g, replacement: 'until' },
    { regex: /যতক্ষণ/g, replacement: 'while' },
    { regex: /ঘুর/g, replacement: 'for' },
    { regex: /কর/g, replacement: 'do' },
    { regex: /ثام/g, replacement: 'break' },
    { regex: /থাম/g, replacement: 'break' },
    { regex: /আগাও/g, replacement: 'continue' },
    { regex: /আবার/g, replacement: 'repeat' },

    // 🧠 Functions
    { regex: /ফিরা_দে/g, replacement: 'return' },
    { regex: /ছোট_কাম/g, replacement: '=>' }, 
    { regex: /একটু_দে/g, replacement: 'yield' },
    { regex: /কাম/g, replacement: 'function' },
    { regex: /ডাক/g, replacement: 'call' },

    // 📤 Input / Output
    { regex: /চিল্লাইয়া_কও/g, replacement: 'console.log' },
    { regex: /কও/g, replacement: 'console.log' },
    { regex: /হুন/g, replacement: 'prompt' },
    { regex: /পড়/g, replacement: 'read' },
    { regex: /লেখ/g, replacement: 'write' },
    { regex: /দেখ/g, replacement: 'scan' },

    // 🏛️ OOP
    { regex: /বড়_আব্বা/g, replacement: 'super' },
    { regex: /বন্ধ_কর/g, replacement: 'close' }, 
    { regex: /জমা_রাখ/g, replacement: 'save' },
    { regex: /জাত/g, replacement: 'class' },
    { regex: /জিনিস/g, replacement: 'object' },
    { regex: /নয়া/g, replacement: 'new' },
    { regex: /নিজর/g, replacement: 'this' },
    { regex: /টান/g, replacement: 'extends' },
    { regex: /নিয়ম/g, replacement: 'interface' },
    { regex: /খোলা/g, replacement: 'public' },
    { regex: /নিজের/g, replacement: 'private' },

    // ⚠️ Error Handling
    { regex: /ছুইড়া_মার/g, replacement: 'throw' },
    { regex: /এইডা_কি_অইল/g, replacement: 'Exception' },
    { regex: /চেष्टा/g, replacement: 'try' },
    { regex: /আটকাইও/g, replacement: 'catch' }, 
    { regex: /শেষমেশ/g, replacement: 'finally' },
    { regex: /গণ্ডগোল/g, replacement: 'Error' },

    // 🖥️ Flow / Types
    { regex: /পাক্কা/g, replacement: 'const' },
    { regex: /হাছা/g, replacement: 'true' },
    { regex: /মিছা/g, replacement: 'false' },
    { regex: /ধর/g, replacement: 'let' },
    { regex: /খতম/g, replacement: '}' }, 
    { regex: /বাইর_অ/g, replacement: 'process.exit' },

    // 🔏 Operators 
    { regex: /আর/g, replacement: '&&' },
    { regex: /নয়লে/g, replacement: '||' },
    { regex: /না/g, replacement: '!' },
    { regex: /অইছে/g, replacement: '===' },
    { regex: /সমান/g, replacement: '==' },

    // 📚 Collections / Utility
    { regex: /আল্লার_ভরসা/g, replacement: 'Math.random' },
    { regex: /লম্বা/g, replacement: '.length' }
];

module.exports = keywords;