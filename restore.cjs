const fs = require('fs');
let c = fs.readFileSync('src/pages/index.astro', 'utf-8');

c = c.replace(/---([\s\S]*?)const vpsTableData/, `---\nimport '../pages/VpsRecommend.css';\nimport Layout from '../layouts/Layout.astro';\nimport VpsTable from '../components/VpsTable.tsx';\nimport PromoCode from '../components/PromoCode.tsx';\nimport VpsPriceFilter from '../components/VpsPriceFilter.tsx';\n\nconst vpsTableData`);

fs.writeFileSync('src/pages/index.astro', c);
