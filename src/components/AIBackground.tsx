import { useEffect, useRef } from 'react';

const AIBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += 0.02;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 1;
        const gradient = ctx!.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 3 * pulse
        );
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');

        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();
      }
    }

    class Connection {
      from: Particle;
      to: Particle;
      progress: number;
      active: boolean;
      duration: number;

      constructor(from: Particle, to: Particle) {
        this.from = from;
        this.to = to;
        this.progress = 0;
        this.active = true;
        this.duration = Math.random() * 100 + 50;
      }

      update() {
        this.progress += 1 / this.duration;
        if (this.progress >= 1) {
          this.active = false;
        }
      }

      draw() {
        const dx = this.to.x - this.from.x;
        const dy = this.to.y - this.from.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 200) return;

        const alpha = (1 - this.progress) * (1 - dist / 200) * 0.5;
        
        // Neural connection line
        ctx!.beginPath();
        ctx!.moveTo(this.from.x, this.from.y);
        
        // Curved connection
        const midX = (this.from.x + this.to.x) / 2 + (Math.random() - 0.5) * 20;
        const midY = (this.from.y + this.to.y) / 2 + (Math.random() - 0.5) * 20;
        ctx!.quadraticCurveTo(midX, midY, this.to.x, this.to.y);
        
        ctx!.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Data pulse traveling along the connection
        const pulseX = this.from.x + dx * this.progress;
        const pulseY = this.from.y + dy * this.progress;
        
        const pulseGradient = ctx!.createRadialGradient(
          pulseX, pulseY, 0,
          pulseX, pulseY, 6
        );
        pulseGradient.addColorStop(0, `rgba(0, 255, 200, ${alpha * 2})`);
        pulseGradient.addColorStop(1, 'rgba(0, 255, 200, 0)');
        
        ctx!.beginPath();
        ctx!.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
        ctx!.fillStyle = pulseGradient;
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const createRandomConnection = () => {
      if (particles.length < 2) return;
      const from = particles[Math.floor(Math.random() * particles.length)];
      const to = particles[Math.floor(Math.random() * particles.length)];
      if (from !== to) {
        connections.push(new Connection(from, to));
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 28, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw connections
      connections = connections.filter(conn => conn.active);
      connections.forEach(conn => {
        conn.update();
        conn.draw();
      });

      // Randomly create new connections
      if (Math.random() < 0.05) {
        createRandomConnection();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', () => {
      resize();
      init();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      {/* Floating AI symbols */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Neural network nodes */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 neural-node animate-float-slow" style={{ animationDelay: '0s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <circle cx="50" cy="50" r="8" fill="currentColor" className="text-primary" />
            <circle cx="20" cy="30" r="4" fill="currentColor" className="text-primary" />
            <circle cx="80" cy="30" r="4" fill="currentColor" className="text-primary" />
            <circle cx="20" cy="70" r="4" fill="currentColor" className="text-primary" />
            <circle cx="80" cy="70" r="4" fill="currentColor" className="text-primary" />
            <line x1="50" y1="50" x2="20" y2="30" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="50" y1="50" x2="20" y2="70" stroke="currentColor" className="text-primary" strokeWidth="1" />
            <line x1="50" y1="50" x2="80" y2="70" stroke="currentColor" className="text-primary" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute top-[60%] right-[15%] w-24 h-24 animate-float-slow" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" className="text-accent" strokeWidth="2" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" className="text-accent" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute top-[40%] left-[80%] w-20 h-20 animate-float-slow" style={{ animationDelay: '4s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
            <rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" />
            <text x="50" y="58" textAnchor="middle" fill="currentColor" className="text-primary" fontSize="24" fontFamily="monospace">AI</text>
          </svg>
        </div>

        {/* Binary rain effect */}
        <div className="absolute top-0 left-[5%] binary-rain opacity-5">
          <div className="font-mono text-primary text-xs leading-tight animate-scroll-down">
            01001010<br/>11010010<br/>00101101<br/>10110100<br/>01001011<br/>11010110
          </div>
        </div>
        <div className="absolute top-0 left-[25%] binary-rain opacity-5">
          <div className="font-mono text-accent text-xs leading-tight animate-scroll-down" style={{ animationDelay: '1s' }}>
            10110100<br/>01001011<br/>11010110<br/>01001010<br/>11010010<br/>00101101
          </div>
        </div>
        <div className="absolute top-0 right-[30%] binary-rain opacity-5">
          <div className="font-mono text-primary text-xs leading-tight animate-scroll-down" style={{ animationDelay: '3s' }}>
            00101101<br/>10110100<br/>01001011<br/>11010110<br/>01001010<br/>11010010
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBackground;
