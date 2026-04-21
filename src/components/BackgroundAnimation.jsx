import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width, height;
    const mouse = { x: -2000, y: -2000, targetX: -2000, targetY: -2000 };
    let time = 0;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const animate = () => {
      // 1. Completely solid black background (Minimalist & Clean)
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      time += 0.003;

      // 2. Smooth physical mouse interpolation 
      // (The light glides behind the cursor smoothly)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 3. Draw subtle geometric architecture scanning lines 
      // Gives a very muted, professional tech aesthetic
      ctx.lineWidth = 1;
      const numLines = 8;
      
      for(let i = 0; i < numLines; i++) {
        // Horizontal sweeping lines
        let yPos = (height * (i / numLines) + time * 120) % height;
        ctx.beginPath();
        
        let grad = ctx.createLinearGradient(0, 0, width, 0);
        let alpha = Math.abs(Math.sin(time + i)) * 0.15; // Very faint (max 15% opacity)
        
        grad.addColorStop(0, 'rgba(16, 185, 129, 0)');
        grad.addColorStop(0.5, `rgba(16, 185, 129, ${alpha})`);
        grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
        
        ctx.strokeStyle = grad;
        ctx.moveTo(0, yPos);
        ctx.lineTo(width, yPos);
        ctx.stroke();

        // Vertical sweeping lines
        let xPos = (width * (i / numLines) + time * 80) % width;
        ctx.beginPath();
        let gradV = ctx.createLinearGradient(0, 0, 0, height);
        gradV.addColorStop(0, 'rgba(6, 214, 160, 0)');
        gradV.addColorStop(0.5, `rgba(6, 214, 160, ${alpha * 0.8})`);
        gradV.addColorStop(1, 'rgba(6, 214, 160, 0)');
        
        ctx.strokeStyle = gradV;
        ctx.moveTo(xPos, 0);
        ctx.lineTo(xPos, height);
        ctx.stroke();
      }

      // 4. Premium Mouse Spotlight
      // A huge, beautifully soft green radiant glow illuminating the space around the cursor
      if (mouse.x > -1000) {
        // Outer ambient glow
        ctx.beginPath();
        const glowRadius = 600;
        const spotlight = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, glowRadius
        );
        
        spotlight.addColorStop(0, 'rgba(16, 185, 129, 0.18)');   // Emerald center
        spotlight.addColorStop(0.3, 'rgba(6, 214, 160, 0.08)');  // Mint dropoff
        spotlight.addColorStop(1, 'rgba(0, 0, 0, 0)');           // Fade to pitch black
        
        ctx.fillStyle = spotlight;
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner intense tracking ring
        ctx.beginPath();
        const core = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 80
        );
        core.addColorStop(0, 'rgba(52, 211, 153, 0.15)');
        core.addColorStop(1, 'rgba(52, 211, 153, 0)');
        ctx.fillStyle = core;
        ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse.targetX = event.clientX;
      mouse.targetY = event.clientY;
      // Instantly jump to mouse if it was off screen
      if (mouse.x < -1000) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none',
        background: '#000000'
      }}
    />
  );
}
