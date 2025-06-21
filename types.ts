import React from 'react';

export interface NavLinkInfo {
  id: string;
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface ServiceInfo {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string; // Short description for homepage cards
  learnMorePath: string;
  detailedDescription: string[]; // For ServicesPage: array of paragraphs
  keyFeatures: string[]; // For ServicesPage: list of key features/benefits
}

export interface ProcessStepInfo {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface PackagePlanInfo {
  id: string;
  name: string;
  subtitle: string;
  detailedDescription: string[]; // Added for PackagesPage
  features: string[];
  ctaText: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Optional icon for the package itself
  accentColorClass: string; // e.g., 'border-neon-blue', 'text-neon-blue'
  glowColorClass: string; // e.g., 'hover:shadow-[0_0_20px_theme(colors.neon-blue)]'
  isPopular?: boolean;
}

export interface SocialLinkInfo {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
  name: string;
}