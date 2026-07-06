const fs = require('fs');

let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

// Fix frontmatter start
if (content.startsWith('---import')) {
  content = content.replace('---import', '---\nimport');
}
content = content.replace(/import /g, '\nimport ');
content = content.replace(/const vpsTableData = \[/, '\nconst vpsTableData = [\n');

// Find the closing ---
const closeIdx = content.indexOf('---', 10);
if (closeIdx !== -1) {
  content = content.substring(0, closeIdx) + '\n---\n' + content.substring(closeIdx + 3);
}

// Clean up double newlines if any
content = content.replace(/\n\n+/g, '\n\n');

fs.writeFileSync('src/pages/index.astro', content);
