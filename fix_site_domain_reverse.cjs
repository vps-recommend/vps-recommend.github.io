const fs = require('fs');

const newDomain = 'https://vps-recommend.github.io';
const oldDomainRegex = /https:\/\/yourdomain\.com/g;

function replaceDomain(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    content = content.replace(oldDomainRegex, newDomain);
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + filePath);
    }
  }
}

replaceDomain('astro.config.mjs');
replaceDomain('public/robots.txt');
replaceDomain('src/pages/index.astro');
replaceDomain('src/pages/cheap-vps/index.astro');
replaceDomain('src/pages/foreign-trade-vps/index.astro');
