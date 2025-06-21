import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/common/Button';
import { CONTACT_EMAIL, SOCIAL_LINKS_DATA, COMPANY_NAME, MailIcon } from '../constants'; // Removed LinkedInIcon, InstagramIcon if not directly used
import { SocialLinkInfo } from '../types';

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

const parallaxBgElements: ParallaxElement[] = [
  {
    id: 'contact-px-1', top: '10%', left: '-10%', size: 'w-64 h-64 md:w-96 md:h-96', color: 'bg-electric-green/5',
    startX: '0px', startY: '0px', startR: '20deg', startS: '1', startO: '0.08',
    endX: '-30px', endY: '40px', endR: '-15deg', endS: '1.1', endO: '0.04',
    delay: '0s', duration: '35s'
  },
  {
    id: 'contact-px-2', bottom: '5%', right: '-15%', size: 'w-72 h-72 md:w-[450px] md:h-[450px]', color: 'bg-neon-blue/5',
    startX: '0px', startY: '0px', startR: '-10deg', startS: '1', startO: '0.1',
    endX: '40px', endY: '-25px', endR: '10deg', endS: '1.05', endO: '0.05',
    delay: '3s', duration: '30s'
  },
  { // Added a third, more central element for subtle depth
    id: 'contact-px-3', top: '40%', left: '30%', size: 'w-40 h-40 md:w-56 md:h-56', color: 'bg-cyber-purple/3',
    startX: '0px', startY: '0px', startR: '0deg', startS: '0.9', startO: '0.05',
    endX: '10px', endY: '10px', endR: '5deg', endS: '1', endO: '0.02',
    delay: '1.5s', duration: '40s'
  }
];

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const detailsContainerRef = useRef<HTMLDivElement>(null); // For the right column

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const elementsToObserve = [formRef.current, detailsContainerRef.current].filter(Boolean) as HTMLElement[];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'transform-none'); // Ensure transform-none to override initial translate
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsToObserve.forEach((el, idx) => {
        el.classList.add('opacity-0', 'translate-y-10'); // Initial state for animation
        (el as HTMLElement).style.transitionDelay = `${idx * 150 + 300}ms`; // Stagger entry
        observer.observe(el);
    });

    return () => elementsToObserve.forEach(el => el && observer.unobserve(el));
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact form submitted:', formData);
    setSubmitMessage(`Thank you, ${formData.name}! Your message regarding "${formData.subject}" has been received. We'll be in touch shortly.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-brand-bg-dark text-brand-text-light pt-10 relative overflow-hidden min-h-screen">
      {parallaxBgElements.map(el => (
        <div
          key={el.id}
          className={`absolute ${el.size} ${el.color || ''} rounded-full filter blur-3xl -z-[1] animate-parallax-bg-element-float`}
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
              Let's Connect
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-text-medium max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Have a project in mind, a question, or just want to say hello? {COMPANY_NAME} is here to listen and collaborate.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Contact Form with enhanced styling */}
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="space-y-8 bg-brand-bg-light p-8 md:p-10 rounded-xl shadow-2xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-500 ease-out group"
            >
              <h3 className="text-3xl font-semibold text-neon-blue mb-8 text-center md:text-left">Send Us a Message</h3>
              
              {['name', 'email', 'subject'].map((field) => (
                <div className="relative group" key={field}>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field} name={field} value={formData[field as keyof typeof formData]} onChange={handleChange}
                    className="block w-full px-4 py-3.5 bg-brand-bg-dark border border-gray-700 rounded-lg text-brand-text-light focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue peer floating-label-input placeholder-transparent shadow-inner group-hover:border-neon-blue/70 transition-colors"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)} required
                  />
                  <label htmlFor={field} className="absolute left-4 -top-2.5 text-brand-text-medium text-xs bg-brand-bg-light px-1 transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-brand-bg-light peer-focus:text-neon-blue peer-focus:text-xs">
                    {field === 'name' ? 'Your Name' : field === 'email' ? 'Your Email' : 'Subject'}
                  </label>
                </div>
              ))}
              
              <div className="relative group">
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
                  className="block w-full px-4 py-3.5 bg-brand-bg-dark border border-gray-700 rounded-lg text-brand-text-light focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue peer floating-label-input placeholder-transparent shadow-inner group-hover:border-neon-blue/70 transition-colors"
                  placeholder="Your Message" required
                />
                <label htmlFor="message" className="absolute left-4 -top-2.5 text-brand-text-medium text-xs bg-brand-bg-light px-1 transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-brand-bg-light peer-focus:text-neon-blue peer-focus:text-xs">Your Message</label>
              </div>
              <div>
                <Button type="submit" variant="primary" size="lg" className="w-full !py-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                </Button>
              </div>
              {submitMessage && (
                <p className={`text-sm mt-4 text-center ${submitMessage.includes('Failed') || submitMessage.includes('error') ? 'text-red-400' : 'text-electric-green'}`}>
                  {submitMessage}
                </p>
              )}
            </form>

            {/* Contact Details Section with enhanced styling */}
            <div ref={detailsContainerRef} className="space-y-12 transition-all duration-500 ease-out mt-8 md:mt-0">
              <div className="p-6 bg-brand-bg-light rounded-xl shadow-xl border border-cyber-purple/20 hover:border-cyber-purple/50 transition-colors duration-300 group">
                <h3 className="text-2xl font-semibold text-cyber-purple mb-5 flex items-center">
                  <MailIcon className="w-7 h-7 mr-3 transition-transform duration-300 group-hover:scale-110" /> Direct Line
                </h3>
                <p className="text-brand-text-medium mb-1 text-lg">
                  Email us for project inquiries, support, or collaborations:
                </p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-neon-blue text-lg hover:text-electric-green hover:underline transition-colors duration-300 font-medium break-all">
                  {CONTACT_EMAIL}
                </a>
                <p className="text-sm text-brand-text-medium mt-3">We typically respond within 24-48 business hours.</p>
              </div>
              
              <div className="p-6 bg-brand-bg-light rounded-xl shadow-xl border border-electric-green/20 hover:border-electric-green/50 transition-colors duration-300 group">
                <h3 className="text-2xl font-semibold text-electric-green mb-5">Join Our Digital Orbit</h3>
                <p className="text-brand-text-medium mb-4">Follow our journey and stay updated with the latest in tech and design:</p>
                <div className="flex space-x-6">
                  {SOCIAL_LINKS_DATA.filter(s => s.id !== 'email').map((social: SocialLinkInfo) => {
                    const SocialIcon = social.icon; // Assign to a capitalized variable for JSX
                    return (
                        <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="text-brand-text-medium hover:text-electric-green transition-all duration-300 transform hover:scale-125 group/socialicon"
                        >
                        <SocialIcon className="w-10 h-10 transition-colors group-hover/socialicon:fill-electric-green" />
                        </a>
                    );
                  })}
                </div>
              </div>
              
              <div className="p-6 bg-brand-bg-light rounded-xl shadow-xl border border-neon-blue/10">
                <h3 className="text-2xl font-semibold text-neon-blue mb-3">Our Commitment</h3>
                 <p className="text-brand-text-medium leading-relaxed">
                    {COMPANY_NAME} is a fully virtual agency, allowing us to collaborate with talent and clients globally. We are dedicated to providing innovative and high-impact digital solutions, irrespective of geographical boundaries. Your vision is our blueprint for success.
                 </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;