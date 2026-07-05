const fs = require('fs');

let content = fs.readFileSync('src/pages/cheap-vps/index.astro', 'utf-8');

// Insert SideNav import
content = content.replace(
  "import PromoCode from '../../components/PromoCode.tsx';",
  "import PromoCode from '../../components/PromoCode.tsx';\nimport SideNav from '../../components/SideNav.tsx';"
);

// Define navItems before ---
const navItemsDef = `
const navItems = [
  { label: '一、选购速览', href: '#table' },
  { label: '二、什么样的值得买', href: '#tips' },
  { label: '三、推荐清单', href: '#list' },
  { label: '四、购买前检查', href: '#checklist' },
  { label: '五、新手下单建议', href: '#steps' },
  { label: '六、常见问题', href: '#faq' }
];
---`;
content = content.replace('---', '---').replace('];\n---', '];\n' + navItemsDef);

// Insert SideNav below Layout head
content = content.replace(
  '</Fragment>',
  '</Fragment>\n\n  <SideNav items={navItems} client:load />'
);

// Add padding to containers
content = content.replace(/class="vpsrec-container"/g, 'class="vpsrec-container xl:pr-56"');

fs.writeFileSync('src/pages/cheap-vps/index.astro', content);
