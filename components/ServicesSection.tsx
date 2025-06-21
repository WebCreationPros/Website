
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import { ServiceInfo } from '../types';
import { Button } from './common/Button';

interface ServiceCardProps {
  service: ServiceInfo;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = service.icon;
  return (
    <div 
      className="bg-brand-bg-light p-8 rounded-xl shadow-2xl transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_30px_theme(colors.neon-blue/30)] group animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-center mb-6">
        <IconComponent className="w-16 h-16 text-neon-blue group-hover:text-electric-green transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-bold text-brand-text-light mb-4 text-center">{service.title}</h3>
      <p className="text-brand-text-medium text-center mb-6 text-sm leading-relaxed min-h-[80px]">{service.description}</p>
      <div className="text-center">
        <Button to={service.learnMorePath} variant="outline" size="sm">
            Learn More
        </Button>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-text-light mb-4 animate-fade-in">
            Our <span className="text-neon-blue">Digital Solutions</span>
          </h2>
          <p className="text-lg text-brand-text-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            We provide a comprehensive suite of services to elevate your brand and dominate the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
