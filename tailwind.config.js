
// This file is for reference if using a build system.
// The actual configuration for CDN is embedded in index.html <script> tag.
// If using Vite/CRA, you would uncomment and use this file.

// module.exports = {
//   content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         'neon-blue': '#2C79FF',
//         'cyber-purple': '#8133FF',
//         'charcoal': '#111111',
//         'soft-white': '#FAFAFA',
//         'electric-green': '#33FF88',
//         'brand-primary': '#2C79FF', // Neon Blue
//         'brand-secondary': '#8133FF', // Cyber Purple
//         'brand-accent': '#33FF88', // Electric Green
//         'brand-bg-dark': '#111111', // Charcoal
//         'brand-bg-light': '#1A1A1A', // Slightly lighter dark for cards/contrast
//         'brand-text-light': '#FAFAFA', // Soft White
//         'brand-text-medium': '#A0A0A0', // For subtitles, less important text
//         'brand-text-dark': '#111111', // For light backgrounds if any
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//       animation: {
//         'bounce-slow': 'bounce 3s infinite',
//         'pulse-glow-border': 'pulse-glow-border 2.5s infinite ease-in-out',
//         'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
//         'fade-in': 'fade-in 0.8s ease-out forwards',
//         'button-ripple': 'button-ripple 0.6s linear',
//         'text-gradient-flow': 'text-gradient-flow 5s ease infinite',
//       },
//       keyframes: {
//         'pulse-glow-border': {
//           '0%, 100%': { borderColor: 'rgba(44, 121, 255, 0.7)', boxShadow: '0 0 5px rgba(44, 121, 255, 0.5), 0 0 10px rgba(44, 121, 255, 0.3)' },
//           '50%': { borderColor: 'rgba(129, 51, 255, 0.7)', boxShadow: '0 0 15px rgba(129, 51, 255, 0.5), 0 0 25px rgba(129, 51, 255, 0.3)' },
//         },
//         'fade-in-up': {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0px)' },
//         },
//         'fade-in': {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         'button-ripple': {
//           'to': { transform: 'scale(4)', opacity: '0' }
//         },
//         'text-gradient-flow': {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//       }
//     },
//   },
//   plugins: [],
// };

// The above is a typical tailwind.config.js. For CDN usage, this configuration
// is directly included in the <script> tag in index.html.
// This file is provided for completeness and if migrating to a build setup.
// No actual JS execution from this file in CDN mode.
console.log("Tailwind config (reference for build systems)");
