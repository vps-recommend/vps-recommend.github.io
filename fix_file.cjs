const fs = require('fs');

let content = fs.readFileSync('src/pages/index.astro', 'utf-8');
content = content.replace(/^---import '\.\.\/pages\/VpsRecommend\.css';/, '---\nimport \'../pages/VpsRecommend.css\';');

fs.writeFileSync('src/pages/index.astro', content);
