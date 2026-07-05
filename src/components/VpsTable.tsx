import React, { useState } from 'react';

export interface VpsItem {
  id: string;
  useCase: string;
  advice: string;
  specs: string;
  brands: string;
  links: { text: string; url: string; solid?: boolean }[];
}

interface VpsTableProps {
  headers?: string[];
  data: VpsItem[];
}

export default function VpsTable({ data, headers }: VpsTableProps) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const sortedData = [...data].sort((a, b) => {
    if (!sortOrder) return 0;
    // Simple sort by useCase for demonstration
    const compare = a.useCase.localeCompare(b.useCase);
    return sortOrder === 'asc' ? compare : -compare;
  });

  const toggleSort = () => {
    if (sortOrder === null) setSortOrder('asc');
    else if (sortOrder === 'asc') setSortOrder('desc');
    else setSortOrder(null);
  };

  return (
    <div className="vpsrec-table-wrap">
      <table className="vpsrec-table w-full">
        <thead>
          <tr>
            <th onClick={toggleSort} className="cursor-pointer hover:bg-gray-50 flex items-center gap-1">
              {headers ? headers[0] : "你的需求"}
              <span className="text-gray-400 text-xs">
                {sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : '↕'}
              </span>
            </th>
            <th>{headers ? headers[1] : "直接建议"}</th>
            <th>{headers ? headers[2] : "推荐配置"}</th>
            <th>{headers ? headers[3] : "代表方向"}</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.useCase}</td>
              <td>{item.advice}</td>
              <td>{item.specs}</td>
              <td>
                {item.brands}
                <div className="vpsrec-table-actions mt-2">
                  {item.links.map((link, idx) => (
                    <a
                      key={idx}
                      className={`vpsrec-linkbtn ${link.solid ? 'vpsrec-linkbtn-solid' : ''}`}
                      href={link.url}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
