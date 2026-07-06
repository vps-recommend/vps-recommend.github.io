const fs = require('fs');
const path = require('path');

const replacements = {
  "/go/cloudcone/": "https://zhujitanzhang.com/go/cloudcone/",
  "/go/racknerd/": "https://zhujitanzhang.com/go/racknerd/",
  "/go/bandwagonhost/": "https://zhujitanzhang.com/go/bandwagonhost/",
  "/go/vultr/": "https://zhujitanzhang.com/go/vultr/",
  "/go/hostdare/": "https://zhujitanzhang.com/go/hostdare/",
  "/go/linode/": "https://zhujitanzhang.com/go/linode/",
  "/go/digitalocean/": "https://zhujitanzhang.com/go/digitalocean/",
  "/go/cloudways/": "https://zhujitanzhang.com/go/cloudways/",
  "/go/dmit/": "https://zhujitanzhang.com/go/dmit/",
  "/go/aliyun/": "https://zhujitanzhang.com/go/aliyun/",
  "/go/evoxt/": "https://zhujitanzhang.com/go/evoxt/",
  "/go/hostwinds/": "https://zhujitanzhang.com/go/hostwinds/",
  "/go/kamatera/": "https://zhujitanzhang.com/go/kamatera/",
  "/go/lisahost/": "https://zhujitanzhang.com/go/lisahost/",
  "https://www.cloudways.com/en/pricing.php": "https://zhujitanzhang.com/go/cloudways/",
  "https://www.digitalocean.com/pricing/droplets": "https://zhujitanzhang.com/go/digitalocean/",
  "https://www.kamatera.com/pricing/": "https://zhujitanzhang.com/go/kamatera/",
  "https://bandwagonhost.com/cart.php": "https://zhujitanzhang.com/go/bandwagonhost/",
  "https://www.dmit.io/": "https://zhujitanzhang.com/go/dmit/",
  "https://www.racknerd.com/specials/": "https://zhujitanzhang.com/go/racknerd/",
  "https://evoxt.com/": "https://zhujitanzhang.com/go/evoxt/",
  "https://www.hostwinds.com/vps": "https://zhujitanzhang.com/go/hostwinds/",
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    // Replace exact occurrences
    content = content.split(oldUrl).join(newUrl);
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
      if (fullPath.endsWith('.astro') || fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx') || fullPath.endsWith('.ts')) {
        processFile(fullPath);
      }
    }
  }
}

walk('./src');
