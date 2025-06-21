import React, { useState, useEffect, useRef } from 'react';
import { PACKAGES_DATA, CheckCircleIcon, COMPANY_NAME, StarterPlanIcon, GrowthPlanIcon, PremiumPlanIcon } from '../constants';
import { PackagePlanInfo } from '../types';
import { Button } from '../components/common/Button';

// Define an interface for the parallax background elements
interface ParallaxElement {
  id: string;
  top?: string; 
  left?: string; 
  right?: string; 
  bottom?: string; 
  size: string;
  color?: string; 
  style?: React.CSSProperties; 
  startX: string;
  startY: string;
  startR: string;
  startS: string;
  startO: string;
  endX: string;
  endY: string;
  endR: string;
  endS: string;
  endO: string;
  delay: string;
  duration: string;
}

const parallaxBgElements: ParallaxElement[] = [
  {
    id: 'pkg-px-1', top: '15%', left: '5%', size: 'w-48 h-48 md:w-64 md:h-64', color: 'bg-neon-blue/5',
    startX: '0px', startY: '0px', startR: '-10deg', startS: '1', startO: '0.1',
    endX: '20px', endY: '-30px', endR: '10deg', endS: '1.1', endO: '0.05',
    delay: '0s', duration: '30s'
  },
  {
    id: 'pkg-px-2', top: '60%', right: '8%', size: 'w-56 h-56 md:w-80 md:h-80', color: 'bg-cyber-purple/5',
    startX: '0px', startY: '0px', startR: '5deg', startS: '1', startO: '0.08',
    endX: '-25px', endY: '15px', endR: '-5deg', endS: '1.05', endO: '0.04',
    delay: '3s', duration: '28s'
  },
];

interface PackageCardProps {
  plan: PackagePlanInfo;
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ plan, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const featuresToShowInitially = 5;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            
            // Animate only the initially visible features via observer
            const initialFeatureItems = Array.from(entry.target.querySelectorAll('.feature-item-initial')) as HTMLElement[];
            initialFeatureItems.forEach((item, i) => {
              item.style.animationDelay = `${i * 70 + 200}ms`; // Staggered delay for initial features
              item.classList.add('animate-slide-in-left-fade');
              item.classList.remove('opacity-0');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      cardRef.current.classList.add('opacity-0', 'translate-y-10');
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  const IconComponent = plan.icon || CheckCircleIcon; 

  return (
    <div
      ref={cardRef}
      className={`relative bg-brand-bg-light p-8 rounded-2xl shadow-2xl 
                  transition-all duration-300 ease-out transform hover:scale-[1.03] 
                  ${plan.glowColorClass} border-2 border-transparent 
                  hover:border-${plan.accentColorClass}/70 flex flex-col group`}
    >
      {plan.isPopular && (
        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 bg-${plan.accentColorClass} text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg z-10`}>
          POPULAR CHOICE
        </div>
      )}
      <div className="flex flex-col items-center mb-6 pt-4">
        <IconComponent className={`w-16 h-16 mb-4 text-${plan.accentColorClass} transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_var(--tw-shadow-color)] shadow-${plan.accentColorClass}/50`} />
        <h3 className={`text-3xl font-bold text-center text-${plan.accentColorClass}`}>{plan.name}</h3>
        <p className="text-brand-text-medium text-center text-sm mt-1">{plan.subtitle}</p>
      </div>

      <div className="mb-6 text-sm text-brand-text-medium leading-relaxed min-h-[60px]">
        {plan.detailedDescription.map((desc, i) => <p key={`${plan.id}-desc-${i}`} className="mb-2">{desc}</p>)}
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, i) => {
          const isInitiallyVisible = i < featuresToShowInitially;
          const isVisibleWhenExpanded = isExpanded && i >= featuresToShowInitially;

          let featureClasses = "flex items-start";
          
          if (isInitiallyVisible) {
            featureClasses += " feature-item-initial opacity-0"; // Observer handles animation for these
          } else if (isVisibleWhenExpanded) {
            featureClasses += " animate-slide-in-left-fade"; // Animate newly shown items
          } else {
            featureClasses += " hidden"; // Hide if not initial and not expanded
          }

          return (
            <li 
              key={`${plan.id}-feature-${i}`}
              className={featureClasses}
              style={{ 
                // Apply delay for expanded items based on their position after the initial ones
                animationDelay: isVisibleWhenExpanded ? `${(i - featuresToShowInitially) * 70 + 50}ms` : (isInitiallyVisible ? '0ms' : undefined)
              }} 
            >
              <CheckCircleIcon className={`w-5 h-5 text-${plan.accentColorClass} mr-3 flex-shrink-0 mt-0.5`} />
              <span className="text-brand-text-light text-sm">{feature}</span>
            </li>
          );
        })}
      </ul>

      {plan.features.length > featuresToShowInitially && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className={`text-sm text-${plan.accentColorClass} hover:underline mb-8 self-start transition-opacity duration-300 group-hover:opacity-100 opacity-70`}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show Less Features' : `Show All ${plan.features.length} Features`}
        </button>
      )}
      
      <div className="mt-auto">
        <Button 
          to="/contact"
          variant={plan.isPopular ? 'primary' : 'outline'} 
          className={`w-full ${plan.isPopular ? `bg-${plan.accentColorClass} border-${plan.accentColorClass} hover:bg-opacity-90 text-white` : `text-${plan.accentColorClass} border-${plan.accentColorClass} hover:bg-${plan.accentColorClass} hover:text-white`}`}
          size="lg"
        >
          {plan.ctaText}
        </Button>
      </div>
    </div>
  );
};

const PackagesPage: React.FC = () => {
  return (
    <div className="bg-brand-bg-dark text-brand-text-light pt-10 relative overflow-hidden">
      {parallaxBgElements.map(el => (
        <div
          key={el.id}
          className={`absolute ${el.size} ${el.color || ''} rounded-full filter blur-3xl -z-[1] animate-parallax-bg-element-float`}
          style={{
            top: el.top, left: el.left, right: el.right, bottom: el.bottom,
            animationDelay: el.delay, animationDuration: el.duration,
            ...(el.style || {}),
            '--px-start-x': el.startX, '--px-start-y': el.startY, '--px-start-r': el.startR, '--px-start-s': el.startS, '--px-start-o': el.startO,
            '--px-end-x': el.endX, '--px-end-y': el.endY, '--px-end-r': el.endR, '--px-end-s': el.endS, '--px-end-o': el.endO,
          } as React.CSSProperties}
        />
      ))}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-cyber-purple to-electric-green animate-text-gradient-flow" style={{ backgroundSize: '200% auto' }}>
              Flexible Packages for Every Ambition
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-text-medium max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Discover the perfect plan to launch, elevate, or dominate your digital space. Each package is a starting point, fully customizable to your unique business needs and aspirations.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12 items-stretch">
            {PACKAGES_DATA.map((plan, index) => (
              <PackageCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 mt-12 bg-brand-bg-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-light mb-6 animate-fade-in">
            Don't See the Perfect Fit?
          </h2>
          <p className="text-lg text-brand-text-medium max-w-xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We thrive on custom solutions. If our standard packages don't quite match your vision, let's talk. We'll craft a bespoke plan tailored precisely to your project requirements and goals.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button to="/contact" variant="primary" size="lg">
              Request a Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;