
import { ReactNode } from 'react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const SolutionCard = ({ title, description, icon, className = '' }: SolutionCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-eco-mint/20 ${className}`}>
      <div className="mb-4 text-eco-leaf">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-eco-forest mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SolutionCard;
