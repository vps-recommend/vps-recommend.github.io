const fs = require('fs');
let c = fs.readFileSync('src/layouts/Layout.astro', 'utf-8');
c = c.replace(
  /<a href="\/cheap-vps\/" class="text-gray-600 hover:text-blue-600 font-medium">便宜 VPS<\/a>/,
  '<a href="/cheap-vps/" class="text-gray-600 hover:text-blue-600 font-medium">便宜 VPS</a>\n              <a href="/foreign-trade-vps/" class="text-gray-600 hover:text-blue-600 font-medium">外贸 VPS</a>'
);
fs.writeFileSync('src/layouts/Layout.astro', c);
