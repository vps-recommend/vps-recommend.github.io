const fs = require('fs');
let c = fs.readFileSync('src/pages/index.astro', 'utf-8');

if (c.startsWith('---import')) {
  c = c.replace('---import', '---\nimport');
}

fs.writeFileSync('src/pages/index.astro', c);
