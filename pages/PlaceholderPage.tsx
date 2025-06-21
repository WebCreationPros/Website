
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/common/Button';

const PlaceholderPage: React.FC = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg-dark text-brand-text-light px-4 pt-20">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-cyber-purple to-electric-green animate-text-gradient-flow background-size-200">
          {pageName || 'Page'} Under Construction
        </h1>
        <p className="text-xl text-brand-text-medium mb-8">
          We're working hard to bring you an amazing {pageName.toLowerCase()} experience. This section is currently under development.
        </p>
        <img 
          src={`https://picsum.photos/seed/${pageName}/600/300`} 
          alt="Futuristic construction placeholder" 
          className="rounded-lg shadow-xl mb-8 mx-auto opacity-70"
        />
        <p className="text-lg text-brand-text-medium mb-8">
          In the meantime, feel free to explore other parts of our site or get in touch with us directly.
        </p>
        <div className="space-x-4">
          <Button to="/" variant="primary">
            Go to Homepage
          </Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
