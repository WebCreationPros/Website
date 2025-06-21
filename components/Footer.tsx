
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, COMPANY_NAME, SOCIAL_LINKS_DATA } from '../constants';
import { SocialLinkInfo } from '../types';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg-light border-t border-gray-700/50 text-brand-text-medium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-brand-text-light mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm">Launch. Elevate. Dominate.</p>
            <p className="text-sm mt-2">Crafting digital experiences that transform businesses for the future.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-text-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0,4).map(link => ( // Show first 4 links
                <li key={link.id}>
                  <Link to={link.path} className="hover:text-neon-blue transition-colors duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-text-light mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              {SOCIAL_LINKS_DATA.map((social: SocialLinkInfo) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-brand-text-medium hover:text-neon-blue transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-sm">For inquiries, reach out to us!</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700/50 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <p className="mt-1">Designed with passion and precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
