const fs = require('fs');

let content = fs.readFileSync('src/pages/foreign-trade-vps/index.astro', 'utf-8');

// Replace title
content = content.replace(/2026 外贸建站 VPS 推荐：WordPress独立站和跨境商城怎么选？/g, '2026 外贸建站 VPS 推荐');

fs.writeFileSync('src/pages/foreign-trade-vps/index.astro', content);
