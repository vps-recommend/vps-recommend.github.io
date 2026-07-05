const fs = require('fs');

let content = fs.readFileSync('src/pages/VpsRecommend.tsx', 'utf-8');

// Remove Helmet import and component
content = content.replace(/import \{ Helmet \} from 'react-helmet-async';/, '');

// Extract Helmet content
const helmetMatch = content.match(/<Helmet>([\s\S]*?)<\/Helmet>/);
let headContent = '';
if (helmetMatch) {
  headContent = helmetMatch[1];
}

// Remove Helmet block from main content
content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');

// Convert className to class
content = content.replace(/className=/g, 'class=');

// Fix style props (Astro also supports objects for style, but string is better, or we can just leave it if Astro handles it)
content = content.replace(/style=\{\{ marginTop: '24px' \}\}/g, 'style="margin-top: 24px;"');
content = content.replace(/style=\{\{ marginTop: '22px' \}\}/g, 'style="margin-top: 22px;"');
content = content.replace(/style=\{\{ marginTop: '26px' \}\}/g, 'style="margin-top: 26px;"');
content = content.replace(/style=\{\{ padding: '0.4rem 1rem', fontSize: '0.875rem' \}\}/g, 'style="padding: 0.4rem 1rem; font-size: 0.875rem;"');
content = content.replace(/style=\{\{ justifyContent: 'center' \}\}/g, 'style="justify-content: center;"');

// Remove export default function and return
content = content.replace(/export default function VpsRecommend\(\) \{\s*return \(\s*<>\s*/, '');
content = content.replace(/\s*<\/>\s*\);\s*\}\s*$/, '');

const astroContent = `---
import '../pages/VpsRecommend.css';
import Layout from '../layouts/Layout.astro';
import VpsTable from '../components/VpsTable.tsx';
import PromoCode from '../components/PromoCode.tsx';
---

<Layout title="VPS推荐：新手建站、外贸网站主机怎么选？">
  <Fragment slot="head">
${headContent}
  </Fragment>

${content}
</Layout>
`;

fs.writeFileSync('src/pages/index.astro', astroContent);
console.log("Created index.astro");
