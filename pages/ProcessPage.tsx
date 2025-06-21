import React, { useEffect, useRef } from 'react';
import { PROCESS_STEPS_DATA, COMPANY_NAME } from '../constants';
import { ProcessStepInfo } from '../types';
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

// Styles for large, subtle parallax background elements
const parallaxBgElements: ParallaxElement[] = [
  {
    id: 'px-blob-1', top: '10%', left: '5%', size: 'w-64 h-64 md:w-96 md:h-96', color: 'bg-neon-blue/5',
    startX: '0px', startY: '0px', startR: '0deg', startS: '1', startO: '0.08',
    endX: '30px', endY: '-40px', endR: '20deg', endS: '1.1', endO: '0.03',
    delay: '0s', duration: '30s'
  },
  {
    id: 'px-blob-2', top: '50%', right: '-10%', size: 'w-72 h-72 md:w-[450px] md:h-[450px]', color: 'bg-cyber-purple/5',
    startX: '0px', startY: '0px', startR: '0deg', startS: '1', startO: '0.07',
    endX: '-40px', endY: '25px', endR: '-15deg', endS: '1.05', endO: '0.04',
    delay: '5s', duration: '25s'
  },
   {
    id: 'px-grid-1', top: '20%', right: '10%', size: 'w-1/2 h-1/2',
    style: {
        backgroundImage: 'linear-gradient(rgba(129, 51, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(129, 51, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
    },
    startX: '0px', startY: '0px', startR: '5deg', startS: '1', startO: '0.5',
    endX: '10px', endY: '-10px', endR: '-5deg', endS: '1', endO: '0.3',
    delay: '2s', duration: '35s'
  }
];


// Internal component for displaying each process step
const ProcessStepDisplay: React.FC<{ step: ProcessStepInfo; index: number; totalSteps: number }> = ({ step, index, totalSteps }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const IconComponent = step.icon;

  const isFirstStep = index === 0;
  const isLastStep = index === totalSteps - 1;

  useEffect(() => {
    const elementsToObserve: Element[] = [];
    if (sectionRef.current) elementsToObserve.push(sectionRef.current);
    if (lineRef.current) elementsToObserve.push(lineRef.current);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            } else if (entry.target === lineRef.current) {
                entry.target.classList.add('line-draw-animate');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    elementsToObserve.forEach(el => {
        if (el === sectionRef.current) el.classList.add('opacity-0', 'translate-y-10');
        observer.observe(el);
    });
    
    return () => {
        elementsToObserve.forEach(el => observer.unobserve(el));
    };
  }, []);


  return (
    <div ref={sectionRef} className="group relative flex flex-col items-center py-8 transition-all duration-700 ease-out">
      {/* Top Dot (not for first step) */}
      {!isFirstStep && (
        <div className="w-3 h-3 rounded-full bg-neon-blue animate-timeline-pulse shadow-md mb-4 group-hover:bg-electric-green"></div>
      )}

      {/* Main Content: Icon, Title, Description */}
      <div className="relative flex flex-col items-center text-center max-w-lg mx-auto p-6 bg-brand-bg-light/30 rounded-xl shadow-xl hover:shadow-[0_0_30px_theme(colors.neon-blue/40)] transition-shadow duration-300 w-full">
        <div className="relative mb-6">
          <span 
            className="absolute -top-3 -left-3 text-5xl md:-top-4 md:-left-4 lg:text-6xl font-extrabold text-transparent group-hover:text-neon-blue/10 transition-colors duration-300 z-10"
            style={{ WebkitTextStroke: `1px var(--color-neon-blue)`}}
          >
            0{index + 1}
          </span>
          <div 
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center 
                       bg-gradient-to-br from-neon-blue/20 via-cyber-purple/20 to-electric-green/10 
                       p-1 shadow-lg animate-subtle-icon-bob group-hover:scale-105 transition-transform duration-300 z-0"
          >
            <div className="w-full h-full bg-brand-bg-dark/80 rounded-full flex items-center justify-center p-3">
              <IconComponent className="w-14 h-14 md:w-16 md:h-16 text-neon-blue group-hover:text-electric-green transition-colors duration-300" />
            </div>
          </div>
        </div>
        <h3 className={`text-2xl lg:text-3xl font-bold text-brand-text-light group-hover:text-neon-blue transition-colors duration-300 mb-3`}>
          {step.title}
        </h3>
        <p className={`text-brand-text-medium text-sm lg:text-base leading-relaxed`}>
          {step.description}
        </p>
      </div>
      
      {/* Bottom Dot (not for last step) */}
      {!isLastStep && (
        <div className="w-3 h-3 rounded-full bg-neon-blue animate-timeline-pulse shadow-md mt-4 group-hover:bg-electric-green"></div>
      )}

      {/* Vertical Connecting Line (not for last step) */}
      {!isLastStep && (
        <div 
            ref={lineRef}
            className="timeline-line-segment w-1 bg-gradient-to-b from-neon-blue via-cyber-purple to-electric-green mx-auto my-0"
            style={{ height: '6rem' }} // Adjust height as needed, or make dynamic
        ></div>
      )}
    </div>
  );
};

const ProcessPage: React.FC = () => {
  return (
    <div className="bg-brand-bg-dark text-brand-text-light pt-10 relative overflow-hidden">
      {parallaxBgElements.map(el => (
        <div
          key={el.id}
          className={`absolute ${el.size} ${el.color || ''} rounded-full filter blur-2xl -z-[1] animate-parallax-bg-element-float`}
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
              Our Blueprint for Digital Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-text-medium max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            At {COMPANY_NAME}, we follow a meticulously crafted, transparent process to transform your vision into impactful digital reality, ensuring quality and collaboration every step of the way.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {PROCESS_STEPS_DATA.map((step, index) => (
              <ProcessStepDisplay 
                key={step.id} 
                step={step} 
                index={index}
                totalSteps={PROCESS_STEPS_DATA.length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-bg-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-light mb-6 animate-fade-in">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-lg text-brand-text-medium max-w-xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Our process is designed for your success. Let's discuss how we can apply it to your unique project.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button to="/contact" variant="primary" size="lg">
              Start Your Project Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;