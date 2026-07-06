const fs = require('fs');
const path = require('path');

const replacements = {
  "/go/cloudcone/": "https://vps-recommend.github.io/go/cloudcone/",
  "/go/racknerd/": "https://vps-recommend.github.io/go/racknerd/",
  "/go/bandwagonhost/": "https://vps-recommend.github.io/go/bandwagonhost/",
  "/go/vultr/": "https://vps-recommend.github.io/go/vultr/",
  "/go/hostdare/": "https://vps-recommend.github.io/go/hostdare/",
  "/go/linode/": "https://vps-recommend.github.io/go/linode/",
  "/go/digitalocean/": "https://vps-recommend.github.io/go/digitalocean/",
  "/go/cloudways/": "https://vps-recommend.github.io/go/cloudways/",
  "/go/dmit/": "https://vps-recommend.github.io/go/dmit/",
  "/go/aliyun/": "https://vps-recommend.github.io/go/aliyun/",
  "/go/evoxt/": "https://vps-recommend.github.io/go/evoxt/",
  "/go/hostwinds/": "https://vps-recommend.github.io/go/hostwinds/",
  "/go/kamatera/": "https://vps-recommend.github.io/go/kamatera/",
  "/go/lisahost/": "https://vps-recommend.github.io/go/lisahost/",
  "https://www.cloudways.com/en/pricing.php": "https://vps-recommend.github.io/go/cloudways/",
  "https://www.digitalocean.com/pricing/droplets": "https://vps-recommend.github.io/go/digitalocean/",
  "https://www.kamatera.com/pricing/": "https://vps-recommend.github.io/go/kamatera/",
  "https://bandwagonhost.com/cart.php": "https://vps-recommend.github.io/go/bandwagonhost/",
  "https://www.dmit.io/": "https://vps-recommend.github.io/go/dmit/",
  "https://www.racknerd.com/specials/": "https://vps-recommend.github.io/go/racknerd/",
  "https://evoxt.com/": "https://vps-recommend.github.io/go/evoxt/",
  "https://www.hostwinds.com/vps": "https://vps-recommend.github.io/go/hostwinds/",
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
