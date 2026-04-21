import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Generate a burst of moving particles
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 120, // Spread widely left and right
      y: Math.random() * 300 + 100, // Travel very high upwards
      size: Math.random() * 6 + 2,
      color: Math.random() > 0.5 ? 'var(--accent-green)' : '#ffffff'
    }));
    
    setParticles(newParticles);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Clean up particles after they fade out
    setTimeout(() => {
      setParticles([]);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="scroll-to-top"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.5 } }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          onClick={scrollToTop}
        >
          <div className="scroll-btn">
            <FiArrowUp />
          </div>
          
          {/* Particle Burst Container */}
          <div className="particle-container">
            <AnimatePresence>
              {particles.map(p => (
                <motion.div
                  key={p.id}
                  className="scroll-particle"
                  initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  animate={{ 
                    opacity: 0, 
                    x: p.x, 
                    y: -p.y, 
                    scale: 0 
                  }}
                  transition={{ duration: 1 + Math.random() * 0.5, ease: "easeOut" }}
                  style={{
                    position: 'absolute',
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    boxShadow: `0 0 10px ${p.color}`,
                    top: '20px',
                    left: '20px',
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
