import React from 'react';
import { Link } from 'react-router-dom'; // Assuming HashRouter context

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  to?: string; // For react-router Link behavior
  href?: string; // For external links
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group hover:scale-105 whitespace-nowrap'; // Added whitespace-nowrap

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-neon-blue text-white hover:bg-opacity-90 focus:ring-neon-blue border-2 border-neon-blue hover:shadow-[0_0_15px_theme(colors.neon-blue)]',
    secondary: 'bg-cyber-purple text-white hover:bg-opacity-90 focus:ring-cyber-purple border-2 border-cyber-purple hover:shadow-[0_0_15px_theme(colors.cyber-purple)]',
    outline: 'bg-transparent text-neon-blue border-2 border-neon-blue hover:bg-neon-blue hover:text-white focus:ring-neon-blue hover:shadow-[0_0_15px_theme(colors.neon-blue)]',
  };
  
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const target = event.currentTarget;
    // Check if the button is disabled
    if (target.hasAttribute('disabled') || target.classList.contains('disabled:opacity-50')) {
        return; // Do not proceed with ripple if disabled
    }

    const ripple = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - target.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - target.offsetTop - radius}px`;
    ripple.classList.add('absolute', 'rounded-full', 'bg-white', 'opacity-30', 'animate-button-ripple');
    
    const currentRipple = target.appendChild(ripple);
    setTimeout(() => {
        if (currentRipple.parentElement) {
            currentRipple.remove();
        }
    }, 600);


    if (onClick) {
      onClick(event);
    }
  };

  if (to) {
    return (
      <Link 
        to={to} 
        className={combinedClasses} 
        onClick={!disabled ? handleRipple : undefined}
        aria-disabled={disabled} // For accessibility
        tabIndex={disabled ? -1 : undefined} // For keyboard navigation
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={!disabled ? handleRipple : undefined}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={combinedClasses} 
      onClick={!disabled ? handleRipple : undefined} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};