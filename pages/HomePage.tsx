
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessMapSection from '../components/ProcessMapSection';
import PackagesSection from '../components/PackagesSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessMapSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
