
import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number; // Initial delay before animation starts
  speed?: number; // Speed of typing in ms per character
  stagger?: number; // Animation delay for each char in style attribute
  style?: React.CSSProperties; // Allow passing inline styles
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 50,
  stagger = 0.05,
  style = {}, // Default to empty object
}) => {
  const [visibleText, setVisibleText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const startTimeout = setTimeout(() => setIsAnimating(true), delay);
      return () => clearTimeout(startTimeout);
    } else {
      setIsAnimating(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isAnimating) return;

    if (visibleText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setVisibleText(text.substring(0, visibleText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [visibleText, text, speed, isAnimating]);

  // Fallback for when JS is disabled or for a simpler reveal
  // This uses CSS animation defined in index.html for .typewriter-char
  // and applies a staggered delay.
  if (true) { // Set to false to use the JS-based typewriter above always
     return (
        <span className={className} style={style} aria-label={text}> {/* Apply passed style here */}
        {text.split('').map((char, index) => (
            <span
            key={`${char}-${index}`}
            className="typewriter-char"
            style={{ animationDelay: `${delay/1000 + index * stagger}s` }}
            aria-hidden="true"
            >
            {char}
            </span>
        ))}
        </span>
     );
  }

  // This is the JS-driven typewriter effect
  // return <span className={className} style={style}>{visibleText}</span>;
};

export default AnimatedText;
