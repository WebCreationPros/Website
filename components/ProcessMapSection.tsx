
import React from 'react';
import { PROCESS_STEPS_DATA } from '../constants';
import { ProcessStepInfo } from '../types';

interface ProcessStepCardProps {
  step: ProcessStepInfo;
  index: number;
  isLast: boolean;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, index, isLast }) => {
  const IconComponent = step.icon;
  return (
    <div 
      className="group relative flex flex-col items-center md:flex-shrink-0 md:max-w-[170px] lg:max-w-[190px] xl:max-w-[220px] w-full animate-fade-in-up transition-all duration-300 ease-out hover:z-30 hover:scale-105"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Icon Circle */}
      <div 
        className="relative w-24 h-24 rounded-full flex items-center justify-center 
                   bg-gradient-to-br from-neon-blue via-cyber-purple to-electric-green 
                   shadow-lg border-4 border-brand-bg-light z-20 
                   transition-all duration-300 
                   group-hover:from-electric-green group-hover:to-neon-blue group-hover:scale-110 group-hover:shadow-[0_0_20px_theme(colors.electric-green/60)]"
      >
        <IconComponent className="w-12 h-12 text-white transition-transform duration-300 group-hover:rotate-6" />
      </div>

      {/* Text Box */}
      <div 
        className="relative bg-brand-bg-dark shadow-xl rounded-lg p-6 w-full text-center 
                   mt-[-30px] pt-[45px] z-10 
                   transition-all duration-300 group-hover:shadow-[0_0_30px_theme(colors.neon-blue/40)]"
      >
        <h4 className="text-xl font-semibold text-brand-text-light mb-2 transition-colors duration-300 group-hover:text-neon-blue">{step.title}</h4>
        <p className="text-brand-text-medium text-sm min-h-[60px] lg:min-h-[75px] transition-colors duration-300 group-hover:text-brand-text-light">{step.description}</p>
      </div>

      {/* Mobile Connector - Placed *inside* the card's main div for mobile layout */}
      {!isLast && (
        <div className="md:hidden mt-8 w-1 h-12 bg-gradient-to-b from-neon-blue/50 via-cyber-purple/50 to-electric-green/30 mx-auto relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-electric-green rounded-full animate-pulse opacity-90 group-hover:bg-neon-blue"></div>
        </div>
      )}
    </div>
  );
};

const ProcessMapSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-brand-bg-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-text-light mb-4 animate-fade-in">
            Our <span className="text-cyber-purple">Proven Process</span>
          </h2>
          <p className="text-lg text-brand-text-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            A streamlined journey from concept to launch, ensuring clarity, collaboration, and exceptional results.
          </p>
        </div>

        {/* Added md:px-6 for horizontal space for glows within scrollable area */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-start w-full md:space-y-0 space-y-10 md:space-x-0 md:overflow-x-auto md:pt-6 md:pb-6 md:px-6">
          {PROCESS_STEPS_DATA.map((step, index) => (
            <React.Fragment key={step.id}>
              <ProcessStepCard
                step={step}
                index={index}
                isLast={index === PROCESS_STEPS_DATA.length - 1}
              />
              {/* Desktop Connector */}
              {index < PROCESS_STEPS_DATA.length - 1 && (
                <div 
                    className="hidden md:flex flex-col items-center justify-start 
                               md:flex-grow min-w-[35px] lg:min-w-[50px] xl:min-w-[70px] h-24  
                               pt-[2.875rem] relative group" /* Replaced calc with static value */
                > 
                  <div className="w-full h-1 bg-gradient-to-r from-neon-blue/50 via-cyber-purple/50 to-electric-green/30 relative transition-all duration-300 group-hover:from-neon-blue group-hover:via-cyber-purple group-hover:to-electric-green">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-electric-green rounded-full animate-pulse opacity-90 transition-colors duration-300 group-hover:bg-neon-blue"></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessMapSection;
