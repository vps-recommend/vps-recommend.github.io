const fs = require('fs');
const path = require('path');

const links = {
  "CloudCone": "https://zhujitanzhang.com/go/cloudcone/",
  "RackNerd": "https://zhujitanzhang.com/go/racknerd/",
  "Bandwagonhost": "https://zhujitanzhang.com/go/bandwagonhost/",
  "搬瓦工": "https://zhujitanzhang.com/go/bandwagonhost/",
  "Vultr": "https://zhujitanzhang.com/go/vultr/",
  "HostDare": "https://zhujitanzhang.com/go/hostdare/",
  "Linode": "https://zhujitanzhang.com/go/linode/",
  "DigitalOcean": "https://zhujitanzhang.com/go/digitalocean/",
  "Cloudways": "https://zhujitanzhang.com/go/cloudways/",
  "DMIT": "https://zhujitanzhang.com/go/dmit/",
  "阿里云": "https://zhujitanzhang.com/go/aliyun/",
  "Evoxt": "https://zhujitanzhang.com/go/evoxt/",
  "Hostwinds": "https://zhujitanzhang.com/go/hostwinds/",
  "Kamatera": "https://zhujitanzhang.com/go/kamatera/",
  "Lisahost": "https://zhujitanzhang.com/go/lisahost/",
  "丽莎主机": "https://zhujitanzhang.com/go/lisahost/"
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Replace hrefs in <a> tags
  for (const [name, url] of Object.entries(links)) {
    // Regex for: href="some_url" ... >...name...</a>
    // This is tricky because the tag could be spread over multiple lines.
    // Let's use a simpler approach. We can replace href inside <a> if it contains the name.
    
    const aTagRegex = new RegExp(`<a[^>]*href=["']([^"']*)["'][^>]*>(.*?)</a>`, 'gi');
    content = content.replace(aTagRegex, (match, currentUrl, innerText) => {
      // Check if innerText contains the name
      if (innerText.includes(name) && !currentUrl.startsWith('#') && !currentUrl.startsWith('mailto')) {
         return match.replace(currentUrl, url);
      }
      return match;
    });

    // Also replace in vpsTableData array objects
    // { text: "查看 Cloudways", url: "...", ... }
    const urlAttrRegex = new RegExp(`(text:\\s*["'][^"']*${name}[^"']*["']\\s*,\\s*url:\\s*["'])([^"']*)(["'])`, 'gi');
    content = content.replace(urlAttrRegex, (match, prefix, currentUrl, suffix) => {
       return prefix + url + suffix;
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else {
      if (fullPath.endsWith('.astro') || fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
        processFile(fullPath);
      }
    }
  }
}

walk('./src');
