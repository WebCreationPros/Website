
import React, { useState } from 'react';
import { PACKAGES_DATA, CheckCircleIcon } from '../constants';
import { PackagePlanInfo } from '../types';
import { Button } from './common/Button';

interface PackageCardProps {
  plan: PackagePlanInfo;
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ plan, index }) => {
  const [isExpanded, setIsExpanded] = useState(false); // For optional toggle

  const popularBadge = plan.isPopular ? (
    <div className={`absolute -top-4 right-4 bg-${plan.accentColorClass} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md transform rotate-6`}>
      POPULAR
    </div>
  ) : null;

  return (
    <div 
      className={`relative bg-brand-bg-light p-8 rounded-xl shadow-2xl transition-all duration-300 ease-out transform hover:scale-105 ${plan.glowColorClass} border-2 border-transparent hover:border-${plan.accentColorClass} animate-fade-in-up flex flex-col`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {popularBadge}
      {plan.icon && <plan.icon className={`w-16 h-16 mx-auto mb-6 text-${plan.accentColorClass}`} />}
      <h3 className={`text-3xl font-bold text-center mb-2 text-${plan.accentColorClass}`}>{plan.name}</h3>
      <p className="text-brand-text-medium text-center mb-6 text-sm">{plan.subtitle}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.slice(0, isExpanded ? plan.features.length : 4).map((feature, i) => ( // Show 4 features, then expand
          <li key={i} className="flex items-start animate-fade-in" style={{ animationDelay: `${(index * 150) + (i * 50)}ms` }}>
            <CheckCircleIcon className={`w-5 h-5 text-${plan.accentColorClass} mr-3 flex-shrink-0 mt-1`} />
            <span className="text-brand-text-light text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {plan.features.length > 4 && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className={`text-sm text-${plan.accentColorClass} hover:underline mb-6`}
        >
          {isExpanded ? 'Show Less' : `Show More (${plan.features.length - 4} more)`}
        </button>
      )}
      
      <div className="mt-auto">
        <Button to="/contact" variant={plan.isPopular ? 'primary' : 'outline'} className={`w-full ${plan.isPopular ? `bg-${plan.accentColorClass} border-${plan.accentColorClass} hover:bg-opacity-90` : `text-${plan.accentColorClass} border-${plan.accentColorClass} hover:bg-${plan.accentColorClass} hover:text-white`}`}>
          {plan.ctaText}
        </Button>
      </div>
    </div>
  );
};

const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-brand-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-text-light mb-4 animate-fade-in">
            Choose Your <span className="text-electric-green">Starting Point</span>
          </h2>
          <p className="text-lg text-brand-text-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            All packages are customizable. Contact us to build a plan that fits your unique vision and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {PACKAGES_DATA.map((plan, index) => (
            <PackageCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
