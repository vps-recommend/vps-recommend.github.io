import React, { useEffect, useState } from 'react';

export default function SideNav({ items }: { items: { label: string; href: string }[] }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {items && items.length > 0 && (
        <div className="sticky top-16 z-40 w-full bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
          <div className="vpsrec-container overflow-x-auto no-scrollbar">
            <ul className="flex whitespace-nowrap gap-6 md:gap-10 text-sm font-medium py-4">
              {items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors block py-1">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <div className={`fixed right-6 bottom-8 z-50 transition-opacity duration-300 ${showTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={scrollToTop} 
          className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
          title="回到顶部"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
}
