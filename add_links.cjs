const fs = require('fs');

function addLinks(file, searchStr, injectionHTML) {
  let content = fs.readFileSync(file, 'utf-8');
  if (content.includes(injectionHTML)) return; // already added

  // We want to insert injectionHTML after the matched searchStr
  const idx = content.indexOf(searchStr);
  if (idx !== -1) {
    const endIdx = idx + searchStr.length;
    const newContent = content.slice(0, endIdx) + injectionHTML + content.slice(endIdx);
    fs.writeFileSync(file, newContent);
    console.log('Updated ' + file);
  }
}

// 1. index.astro
const indexSearch = `<p>买 VPS，先看用途，再看配置和线路。学习测试可以买低价年付，个人 WordPress 建议 1核2G 起步，正式业务站更适合 2核2G，国内访问和免备案中文站可以重点看搬瓦工、DMIT 这类优化线路 VPS。</p>`;
const indexHtml = `\n              <p class="mt-4" style="font-size: 16px; color: #4b5563;">如果您更在意预算，可以看看<a href="/cheap-vps/" class="text-blue-600 hover:underline">便宜 VPS 推荐</a>；如果您是做外贸 B2B 或独立站的，可以看看这篇<a href="/foreign-trade-vps/" class="text-blue-600 hover:underline">外贸 VPS 推荐</a>。</p>`;
addLinks('src/pages/index.astro', indexSearch, indexHtml);

// 2. cheap-vps/index.astro
const cheapSearch = `<p>国外便宜 VPS 可以买，但要按用途买。学 Linux、练 SSH、跑脚本、临时测试，低价年付 VPS 很合适；建 WordPress、长期博客、资源站，就要把内存、硬盘、续费和备份一起算进去；如果网站主要给中国大陆用户访问，线路和晚高峰体验比 CPU 核心数更重要。便宜 VPS 的关键，是让机器刚好匹配你的用途。</p>`;
const cheapHtml = `\n          <p class="mt-4" style="font-size: 16px; color: #4b5563;">想了解更多建站主机选择思路，可以参考这篇<a href="/" class="text-blue-600 hover:underline">VPS 新手推荐指南</a>；如果是外贸建站需求，建议阅读<a href="/foreign-trade-vps/" class="text-blue-600 hover:underline">外贸 VPS 推荐</a>。</p>`;
addLinks('src/pages/cheap-vps/index.astro', cheapSearch, cheapHtml);

// 3. foreign-trade-vps/index.astro
const foreignSearch = `<p class="mt-4">本篇外贸 VPS 推荐指南聚焦实际购买决策：<strong>客户在哪里、网站是什么类型、团队有没有运维能力、预算大概多少、后期能否稳定升级</strong>。</p>`;
const foreignHtml = `\n        <p class="mt-4 text-gray-700">如果是个人学习测试或更低预算，可以参考<a href="/cheap-vps/" class="text-blue-600 hover:underline">便宜 VPS 推荐</a>；如果是想了解更多基础建站主机，可以看<a href="/" class="text-blue-600 hover:underline">VPS 新手推荐指南</a>。</p>`;
addLinks('src/pages/foreign-trade-vps/index.astro', foreignSearch, foreignHtml);

