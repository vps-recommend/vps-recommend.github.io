const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/ xl:pr-56/g, '');
  
  const sideNavRegex = /<SideNav[^>]*\/>/;
  const sideNavMatch = content.match(sideNavRegex);
  
  if (sideNavMatch) {
    content = content.replace(sideNavMatch[0], '');
    
    // Find the end of the first section (which is the hero section)
    const heroEndStr = '</section>';
    const heroEndIdx = content.indexOf(heroEndStr);
    
    if (heroEndIdx !== -1) {
       content = content.substring(0, heroEndIdx + heroEndStr.length) + '\n    ' + sideNavMatch[0] + content.substring(heroEndIdx + heroEndStr.length);
    }
  }
  
  // Also fix the padding for any other containers that might have xl:pr-56
  // (handled by the regex above)
  
  fs.writeFileSync(filePath, content);
}

fixFile('src/pages/cheap-vps/index.astro');
fixFile('src/pages/foreign-trade-vps/index.astro');
