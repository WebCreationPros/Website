
import React from 'react';
import LottiePlayer from 'react-lottie-player';
// import AnimatedText from './common/AnimatedText'; // Temporarily removed for direct span test
import { Button } from './common/Button';
import { TAGLINE, ChevronDownIcon, BrandComponentsIcon, GearIcon, BotHeadIcon } from '../constants'; // Updated BrushIcon to BrandComponentsIcon

// Using a Lottie file URL directly
const lottieAnimationUrl = 'https://lottie.host/80b57e49-dfda-46f3-8b32-e092100a071d/l2UqPRVlhs.json';


const HeroSection: React.FC = () => {
  const particleStyles = [
    { top: '10%', left: '15%', size: 'w-2 h-2', delay: '0s', driftX: '8px', driftY: '-12px', color: 'bg-neon-blue/40' },
    { top: '20%', left: '80%', size: 'w-3 h-3', delay: '1s', driftX: '-10px', driftY: '10px', color: 'bg-cyber-purple/40' },
    { top: '50%', left: '5%', size: 'w-2 h-2', delay: '2s', driftX: '12px', driftY: '8px', color: 'bg-electric-green/40' },
    { top: '70%', left: '90%', size: 'w-4 h-4', delay: '0.5s', driftX: '-8px', driftY: '-8px', color: 'bg-neon-blue/30' },
    { top: '85%', left: '40%', size: 'w-3 h-3', delay: '1.5s', driftX: '10px', driftY: '10px', color: 'bg-cyber-purple/50' },
    { top: '30%', left: '30%', size: 'w-2 h-2', delay: '2.5s', driftX: '-12px', driftY: '-5px', color: 'bg-electric-green/30' },
  ];

  const techLineStyles = [
    { top: '15%', left: '0%', width: 'w-32 sm:w-48', delay: '0s', duration: '5s', color: 'bg-neon-blue/30' },
    { top: '35%', left: '0%', width: 'w-24 sm:w-40', delay: '1.5s', duration: '6s', color: 'bg-cyber-purple/30', transform: 'rotate(15deg) translateX(-150%)', animationName: 'shooting-line-alt' }, // Custom animation if needed
    { top: '65%', left: '0%', width: 'w-40 sm:w-56', delay: '0.8s', duration: '4.5s', color: 'bg-electric-green/30', transform: 'rotate(-45deg) translateX(-150%)' },
    { top: '80%', left: '0%', width: 'w-32 sm:w-48', delay: '2.2s', duration: '5.5s', color: 'bg-neon-blue/20', transform: 'rotate(30deg) translateX(-150%)' },
  ];


  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-brand-bg-dark"
    >
      {/* Deep Background Elements (Z-0) */}
      <div className="absolute inset-0 z-0 opacity-60"> {/* Slightly increased opacity for grid */}
        {/* Fading Grid */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(44, 121, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(44, 121, 255, 0.09) 1px, transparent 1px)', // Slightly more visible grid
            backgroundSize: '30px 30px',
            animation: 'fadeInOut 12s infinite alternate', 
          }}
        />
        {/* Large Faint Pulsing Circles */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-neon-blue/10 rounded-full animate-pulse-glow-border opacity-50" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2/5 h-2/5 border-2 border-cyber-purple/10 rounded-full animate-pulse-glow-border opacity-50" style={{animationDuration: '7s', animationDelay: '1s'}}></div>
      </div>

      {/* Dynamic Graphic Animations Layer (Z-[1]) */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Shooting Tech Lines */}
        {techLineStyles.map((style, index) => (
          <div
            key={`line-${index}`}
            className={`absolute h-0.5 sm:h-1 ${style.width} ${style.color} rounded-full animate-shooting-line opacity-0`}
            style={{ 
              top: style.top, 
              left: style.left, 
              animationDelay: style.delay, 
              animationDuration: style.duration,
              transform: style.transform || 'rotate(-30deg) translateX(-150%)' // Default transform for shooting-line keyframes
            }}
          />
        ))}

        {/* Pulsing/Drifting Particles */}
        {particleStyles.map((p, index) => (
          <div
            key={`particle-${index}`}
            className={`absolute ${p.size} ${p.color} rounded-full animate-particle-drift`}
            style={{ 
              top: p.top, 
              left: p.left, 
              animationDelay: p.delay,
              '--drift-x': p.driftX, 
              '--drift-y': p.driftY 
            } as React.CSSProperties}
          />
        ))}

        {/* Existing Holographic Shapes - Enhanced */}
         <div
          className="absolute top-[20%] right-[15%] w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-electric-green/30 to-neon-blue/30 rounded-full animate-float animate-graphic-pulse" // Added animate-graphic-pulse
          style={{ animationDuration: '7s, 3s', animationDelay: '0.5s, 0s' }} // duration for float, pulse; delay for float, pulse
        />
        <div
          className="absolute bottom-[25%] left-[12%] w-12 h-20 sm:w-20 sm:h-32 bg-gradient-to-tl from-cyber-purple/30 to-neon-blue/30 transform skew-y-12 animate-float animate-graphic-pulse" // Added animate-graphic-pulse
          style={{ animationDuration: '8s, 3.5s', animationDelay: '1s, 0.2s' }}
        />
      </div>


      {/* Lottie Animation (Z-5) */}
      <div 
        id="hero-visual-story" 
        data-testid="lottie-container"
        className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        {lottieAnimationUrl && (
          <LottiePlayer
            loop
            path={lottieAnimationUrl} 
            play={true} 
            style={{ width: '100%', height: '100%', maxWidth: '600px', maxHeight: '500px', opacity: 0.6 }}
          />
        )}
      </div>
      
      {/* Floating Service Icons (Z-10) */}
      <div className="absolute top-[15%] left-[10%] opacity-40 animate-fade-in animate-float z-10 hidden lg:block" style={{animationDelay: '1.2s', animationDuration: '5s'}}>
        <BrandComponentsIcon className="w-12 h-12 sm:w-16 sm:h-16 text-neon-blue/70 transform -rotate-12" />
      </div>
      <div className="absolute bottom-[15%] right-[10%] opacity-40 animate-fade-in animate-float z-10 hidden lg:block" style={{animationDelay: '1.5s', animationDuration: '6s'}}>
        <GearIcon className="w-12 h-12 sm:w-16 sm:h-16 text-cyber-purple/70 transform rotate-12" />
      </div>
      <div className="absolute top-1/2 left-[20%] opacity-30 animate-fade-in animate-float z-10 hidden lg:block" style={{animationDelay: '1.8s', animationDuration: '4.5s'}}>
        <BotHeadIcon className="w-10 h-10 sm:w-12 sm:h-12 text-electric-green/70 transform -translate-y-1/2 rotate-6" />
      </div>

      {/* Main Content (Z-20) */}
      <div className="relative z-20 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-cyber-purple to-electric-green animate-text-gradient-flow"
            style={{ backgroundSize: '200% auto', display: 'inline-block' }} 
          >
            {TAGLINE}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-brand-text-medium max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          We don’t just build websites — we craft digital experiences.
          From web design and branding to AI integration and SEO, we transform your business for the digital future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '1.7s' }}>
          <Button to="/contact" variant="primary" size="lg">
            Get a Free Consultation
          </Button>
          <Button to="/process" variant="outline" size="lg">
            Explore Our Process
          </Button>
        </div>
      </div>

      {/* Scroll Down Cue (Z-10) */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '2.2s' }}>
        <a href="#services" aria-label="Scroll to services" className="text-brand-text-medium hover:text-neon-blue transition-colors duration-300 animate-bounce-slow flex flex-col items-center group">
          <span className="text-xs mb-1 group-hover:text-neon-blue transition-colors">See what we do</span>
          <ChevronDownIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
