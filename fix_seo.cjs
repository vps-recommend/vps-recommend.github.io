const fs = require('fs');

const domain = 'https://vps-recommend.github.io';

function fixSEO(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/https:\/\/yourdomain\.com/g, domain);
  fs.writeFileSync(filePath, content);
}

fixSEO('src/pages/index.astro');
fixSEO('src/pages/cheap-vps/index.astro');
fixSEO('src/pages/foreign-trade-vps/index.astro');
