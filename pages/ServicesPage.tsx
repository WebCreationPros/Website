
import React, { useEffect, useRef } from 'react';
// LottiePlayer import removed as we are reverting to icons for now
import { SERVICES_DATA, CheckCircleIcon, COMPANY_NAME } from '../constants';
import { ServiceInfo } from '../types';
import { Button } from '../components/common/Button';

// Define styles for decorative blobs (kept for overall page aesthetics)
const decorativeBlobStyles = [
  { top: '15%', left: '10%', size: 'w-24 h-24', color: 'bg-neon-blue/5', delay: '0.2s',
    driftX1: '10px', driftY1: '-15px', driftR1: '15deg', driftX2: '-10px', driftY2: '12px', driftR2: '-12deg'
  },
  { top: '60%', right: '5%', size: 'w-32 h-32', color: 'bg-cyber-purple/5', delay: '0.5s',
    driftX1: '-12px', driftY1: '10px', driftR1: '-10deg', driftX2: '15px', driftY2: '-8px', driftR2: '8deg'
  },
  { bottom: '10%', left: '20%', size: 'w-20 h-20', color: 'bg-electric-green/5', delay: '0.8s',
    driftX1: '8px', driftY1: '12px', driftR1: '8deg', driftX2: '-10px', driftY2: '-10px', driftR2: '-15deg'
  },
];


const ServiceSectionCard: React.FC<{ service: ServiceInfo; index: number }> = ({ service, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const graphicContainerRef = useRef<HTMLDivElement>(null); // Still used for the icon container
  const textContentRef = useRef<HTMLDivElement>(null);
  const IconComponent = service.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');

            if (graphicContainerRef.current) {
              graphicContainerRef.current.classList.add('translate-y-0', 'opacity-100');
              graphicContainerRef.current.classList.remove('translate-y-8', 'opacity-0');
            }
            if (textContentRef.current) {
              textContentRef.current.classList.add('translate-y-0', 'opacity-100');
              textContentRef.current.classList.remove('translate-y-12', 'opacity-0');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={sectionRef}
      id={service.learnMorePath.split('#')[1] || service.id}
      className={`group relative overflow-hidden py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700 ease-out`} // group added here for hover effects
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {decorativeBlobStyles.slice(0, 2).map((blob, bIndex) => (
            <div
                key={`blob-${index}-${bIndex}`}
                className={`absolute ${blob.size} ${blob.color} rounded-full filter blur-xl animate-subtle-drift-rotate -z-[1]`}
                style={{
                    top: blob.top,
                    left: blob.left,
                    right: blob.right,
                    bottom: blob.bottom,
                    animationDelay: `calc(${index * 0.2}s + ${blob.delay})`,
                    animationDuration: `${15 + bIndex * 3}s`,
                    '--drift-blob-x1': blob.driftX1, '--drift-blob-y1': blob.driftY1, '--drift-blob-r1': blob.driftR1,
                    '--drift-blob-x2': blob.driftX2, '--drift-blob-y2': blob.driftY2, '--drift-blob-r2': blob.driftR2,
                } as React.CSSProperties}
            />
        ))}

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center`}>
          {/* Icon Column */}
          <div
            ref={graphicContainerRef}
            className={`flex items-center justify-center ${isEven ? 'md:order-1' : 'md:order-2'} opacity-0 translate-y-8 transition-all duration-1000 ease-out`}
            style={{transitionDelay: `${index * 100 + 200}ms`}}
          >
            <div 
                className="bg-brand-bg-light/10 backdrop-blur-sm rounded-xl w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 
                           flex items-center justify-center animate-breathing-glow relative 
                           transition-all duration-300 group-hover:bg-brand-bg-light/20"
            >
              <IconComponent 
                className="w-20 h-20 md:w-24 md:h-24 text-neon-blue 
                           transition-all duration-300 ease-out 
                           group-hover:text-electric-green group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_theme(colors.electric-green)]" 
              />
              {/* Animated decorative elements around the icon */}
              <div 
                className="absolute top-1/2 left-1/2 w-32 h-32 md:w-40 md:h-40 border-2 border-neon-blue/20 rounded-full 
                           animate-orbiting-element opacity-50 transform -translate-x-1/2 -translate-y-1/2 
                           transition-all duration-300 group-hover:border-electric-green/40 group-hover:opacity-80"
                style={{ animationDuration: '12s', '--orbit-radius': '60px' } as React.CSSProperties}
              ></div>
              <div 
                className="absolute top-1/2 left-1/2 w-40 h-40 md:w-52 md:h-52 border border-dashed border-cyber-purple/20 rounded-full 
                           animate-orbiting-element opacity-30 transform -translate-x-1/2 -translate-y-1/2 
                           transition-all duration-300 group-hover:border-neon-blue/40 group-hover:opacity-60"
                style={{ animationDuration: '18s', animationDirection: 'reverse', '--orbit-radius': '75px' } as React.CSSProperties}
              ></div>
              <div 
                className="absolute top-[20%] left-[20%] w-2.5 h-2.5 bg-electric-green/70 rounded-full 
                           animate-icon-particle-pulse opacity-70 
                           transition-all duration-300 group-hover:opacity-100 group-hover:bg-electric-green group-hover:scale-125"
                style={{animationDelay: '0.2s'}}
              ></div>
              <div 
                className="absolute bottom-[15%] right-[25%] w-3 h-3 bg-neon-blue/70 rounded-full 
                           animate-icon-particle-pulse opacity-70 
                           transition-all duration-300 group-hover:opacity-100 group-hover:bg-neon-blue group-hover:scale-125"
                style={{animationDelay: '0.5s'}}
              ></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div
            ref={textContentRef}
            className={`flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'} opacity-0 translate-y-12 transition-all duration-1000 ease-out`}
            style={{transitionDelay: `${index * 100 + 300}ms`}}
          >
            <h3 className="text-3xl lg:text-4xl font-extrabold text-brand-text-light mb-6">
              {service.title}
            </h3>
            {service.detailedDescription.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-brand-text-medium text-base lg:text-lg leading-relaxed mb-4" >
                {paragraph}
              </p>
            ))}
            <div className="mt-8 mb-6">
              <h4 className="text-xl font-semibold text-neon-blue mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {service.keyFeatures.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start opacity-0 animate-slide-in-left-fade" style={{animationDelay: `${index * 150 + 500 + fIndex * 100}ms`}}>
                    <CheckCircleIcon className="w-6 h-6 text-electric-green mr-3 mt-0.5 flex-shrink-0 animate-fade-in" style={{animationDelay: `${index * 150 + 550 + fIndex * 100}ms`}}/>
                    <span className="text-brand-text-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Button to="/contact" variant="secondary" size="md" className="group">
                Strategize Your {service.title.split(' ')[0]} Project
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedSectionDivider: React.FC<{ index: number }> = ({ index }) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-4 md:my-0 opacity-0 animate-fade-in" style={{animationDelay: `${index * 150 + 800}ms`}}>
    <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent animate-scanner-line bg-[length:300%_100%]"></div>
  </div>
);


const ServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-bg-dark text-brand-text-light pt-10">
      <section className="py-16 md:py-24 text-center bg-gradient-to-b from-brand-bg-dark to-brand-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-cyber-purple to-electric-green animate-text-gradient-flow" style={{ backgroundSize: '200% auto' }}>
              Our Arsenal of Digital Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-text-medium max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            At {COMPANY_NAME}, we fuse cutting-edge technology with creative ingenuity to deliver bespoke digital solutions that drive growth, enhance engagement, and set you apart from the competition.
          </p>
        </div>
      </section>

      {SERVICES_DATA.map((service, index) => (
        <React.Fragment key={service.id}>
          <ServiceSectionCard service={service} index={index} />
          {index < SERVICES_DATA.length - 1 && <AnimatedSectionDivider index={index} />}
        </React.Fragment>
      ))}

      <section className="py-16 md:py-24 bg-brand-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-light mb-6 animate-fade-in">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-lg text-brand-text-medium max-w-xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Let's discuss how our expertise can translate into your success.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button to="/contact" variant="primary" size="lg">
              Get Your Free Consultation Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
