
import { ReactNode } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  icon: ReactNode;
}

const StatItem = ({ value, label, icon }: StatItemProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-eco-mint/20">
    <div className="text-eco-leaf mb-3">{icon}</div>
    <div className="text-3xl font-bold text-eco-forest mb-1">{value}</div>
    <div className="text-gray-600 text-sm text-center">{label}</div>
  </div>
);

const StatsSection = () => {
  return (
    <div className="py-16 bg-eco-mint/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-eco-forest mb-12">Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            value="500M+"
            label="Plastic packages replaced yearly"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            }
          />
          <StatItem 
            value="32%"
            label="Reduction in carbon footprint"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 22a10 10 1 0 1 20 0"></path>
                <path d="M16 8A7.93 7.93 0 0 0 12 6a8 8 0 0 0-8 8 8.5 8.5 0 0 0 .11 1.5"></path>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            }
          />
          <StatItem 
            value="100%"
            label="Biodegradable materials"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 9l9 7 9-7-9-7z" />
                <path d="M3 9v5l9 7 9-7V9" />
              </svg>
            }
          />
          <StatItem 
            value="75M"
            label="Trees saved annually"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 14v6m-3-3h6M7 21l2.6-2.6m-5-1.1l8.3-8.3" />
                <path d="M19.5 9.5L18 8l-1.5 1.5a2.5 2.5 0 01-3.5 0 2.5 2.5 0 01-.74-1.7c0-.48.23-.93.63-1.2l.11-.11V2" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
