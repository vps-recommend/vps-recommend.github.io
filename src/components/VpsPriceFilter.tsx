import React, { useState } from 'react';

interface VpsPriceFilterProps {
  children: React.ReactNode;
}

export default function VpsPriceFilter({ children }: VpsPriceFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const filters = [
    { id: 'all', label: '全部预算' },
    { id: 'tier1', label: '$10/年以内' },
    { id: 'tier2', label: '$10–30/年' },
    { id: 'tier3', label: '$5–10/月' },
    { id: 'tier4', label: '$10–30/月' },
    { id: 'tier5', label: '$30/月以上' }
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeFilter === filter.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="vpsrec-price-ladder">
        {React.Children.map(children, (child: any) => {
          if (!React.isValidElement(child)) return child;
          const tier = child.props['data-tier'];
          if (activeFilter === 'all' || activeFilter === tier) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
}
