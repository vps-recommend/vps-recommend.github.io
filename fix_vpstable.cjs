const fs = require('fs');
let c = fs.readFileSync('src/components/VpsTable.tsx', 'utf-8');

// The headers in VpsTable: 
// <th>直接建议</th>
// <th>推荐配置</th>
// <th>代表方向</th>

c = c.replace(/interface VpsTableProps {/g, 'interface VpsTableProps {\n  headers?: string[];');
c = c.replace(/export default function VpsTable\(\{ data \}: VpsTableProps\) {/g, 'export default function VpsTable({ data, headers }: VpsTableProps) {');
c = c.replace(/<th>直接建议<\/th>/g, '<th>{headers ? headers[1] : "直接建议"}</th>');
c = c.replace(/<th>推荐配置<\/th>/g, '<th>{headers ? headers[2] : "推荐配置"}</th>');
c = c.replace(/<th>代表方向<\/th>/g, '<th>{headers ? headers[3] : "代表方向"}</th>');

// The first th has onClick, so we only replace the text inside
c = c.replace(/你的需求/g, '{headers ? headers[0] : "你的需求"}');

fs.writeFileSync('src/components/VpsTable.tsx', c);
