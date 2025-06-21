
import React, { useState } from 'react';
import { Button } from './common/Button';
import { CONTACT_EMAIL, SOCIAL_LINKS_DATA, COMPANY_NAME } from '../constants';
import { SocialLinkInfo } from '../types';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', projectDetails: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demonstration purposes:
    console.log('Form data submitted:', formData);
    setSubmitMessage(`Thank you, ${formData.name}! Your message has been sent. We'll be in touch soon.`);
    setFormData({ name: '', email: '', projectDetails: '' });
    setIsSubmitting(false);
    
    // In a real app, you would make an API call here:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setSubmitMessage('Message sent successfully!');
    //     setFormData({ name: '', email: '', projectDetails: '' });
    //   } else {
    //     setSubmitMessage('Failed to send message. Please try again.');
    //   }
    // } catch (error) {
    //   setSubmitMessage('An error occurred. Please try again.');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section id="contact" className="py-20 bg-brand-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-text-light mb-4 animate-fade-in">
            Let's Build <span className="text-neon-blue">Something Amazing</span>
          </h2>
          <p className="text-lg text-brand-text-medium max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Ready to start your project or have a question? We're here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-3 py-3 bg-brand-bg-dark border border-gray-700 rounded-md text-brand-text-light focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue peer floating-label-input placeholder-transparent"
                placeholder="Your Name"
                required
              />
              <label htmlFor="name" className="absolute left-3 -top-2.5 text-brand-text-medium text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-neon-blue peer-focus:text-sm">
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-3 py-3 bg-brand-bg-dark border border-gray-700 rounded-md text-brand-text-light focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue peer floating-label-input placeholder-transparent"
                placeholder="Your Email"
                required
              />
              <label htmlFor="email" className="absolute left-3 -top-2.5 text-brand-text-medium text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-neon-blue peer-focus:text-sm">
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                rows={5}
                className="block w-full px-3 py-3 bg-brand-bg-dark border border-gray-700 rounded-md text-brand-text-light focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-neon-blue peer floating-label-input placeholder-transparent"
                placeholder="Project Details"
                required
              />
              <label htmlFor="projectDetails" className="absolute left-3 -top-2.5 text-brand-text-medium text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-neon-blue peer-focus:text-sm">
                Project Details
              </label>
            </div>
            <div>
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
            {submitMessage && (
              <p className={`text-sm mt-4 text-center ${submitMessage.includes('Failed') || submitMessage.includes('error') ? 'text-red-500' : 'text-electric-green'}`}>
                {submitMessage}
              </p>
            )}
          </form>

          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div>
              <h4 className="text-xl font-semibold text-brand-text-light mb-2">Contact Information</h4>
              <p className="text-brand-text-medium">
                Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-neon-blue hover:underline">{CONTACT_EMAIL}</a>
              </p>
              {/* <p className="text-brand-text-medium">Phone: +1 (555) 123-4567 (Placeholder)</p> */}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-brand-text-light mb-3">Follow Us</h4>
              <div className="flex space-x-5">
                {SOCIAL_LINKS_DATA.filter(s => s.id !== 'email').map((social: SocialLinkInfo) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-brand-text-medium hover:text-neon-blue transition-transform duration-300 hover:scale-110"
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-brand-text-light mb-2">Why {COMPANY_NAME}?</h4>
              <p className="text-brand-text-medium text-sm">
                We're passionate about leveraging cutting-edge technology and creative design to deliver solutions that not only look stunning but also drive tangible results for your business. Let's collaborate and bring your vision to life.
              </p>
            </div>
             {/* Optional: Calendly or live chat widget placeholder */}
             {/* <div className="mt-6 p-4 border border-dashed border-gray-600 rounded-lg text-center">
                <p className="text-brand-text-medium">Live Chat / Calendly Widget Area</p>
             </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
