import { motion } from 'framer-motion';

export default function Logo() {
  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.3, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay: i * 0.3, duration: 0.2 }
      }
    })
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, scale: 1,
      transition: { delay: 1.5, duration: 1, ease: 'easeOut' }
    }
  };

  return (
    <motion.svg 
      width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id="logo-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Abstract Glowing Tech Hexagon */}
      <motion.polygon 
        points="50,15 80,32 80,68 50,85 20,68 20,32" 
        fill="none" stroke="url(#logo-glow)" strokeWidth="6" 
        filter="url(#neon-glow)" strokeLinejoin="round" 
        variants={drawLine} initial="hidden" animate="visible" custom={0}
      />
      
      <motion.polygon 
        points="50,15 80,32 80,68 50,85 20,68 20,32" 
        fill="none" stroke="#10b981" strokeWidth="4" strokeLinejoin="round" 
        variants={drawLine} initial="hidden" animate="visible" custom={0.5}
      />
      
      {/* Central Inner Core */}
      <motion.circle 
        cx="50" cy="50" r="14" fill="none" stroke="#34d399" strokeWidth="4" 
        variants={drawLine} initial="hidden" animate="visible" custom={1}
      />
      
      <motion.circle 
        cx="50" cy="50" r="6" fill="#34d399" filter="url(#neon-glow)" 
        variants={fadeIn} initial="hidden" animate="visible"
      />
      
      {/* Node connecting lines */}
      <motion.line x1="50" y1="15" x2="50" y2="36" stroke="#34d399" strokeWidth="3" variants={drawLine} initial="hidden" animate="visible" custom={1.2} />
      <motion.line x1="20" y1="68" x2="38" y2="57" stroke="#34d399" strokeWidth="3" variants={drawLine} initial="hidden" animate="visible" custom={1.4} />
      <motion.line x1="80" y1="68" x2="62" y2="57" stroke="#34d399" strokeWidth="3" variants={drawLine} initial="hidden" animate="visible" custom={1.6} />
    </motion.svg>
  );
}
