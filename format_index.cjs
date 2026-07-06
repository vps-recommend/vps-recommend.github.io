const fs = require('fs');

let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

// Try to format it with Prettier if it's available, otherwise format manually
// The entire file has lost newlines, meaning it's one huge line!
console.log('Total lines before:', content.split('\n').length);

