import { ArrowDown, Eye, ExternalLink, Target, Infinity, BrainCircuit, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '-3s' }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Dipanjan Kuila</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground">
              <span className="text-primary">&gt;</span> AI Engineer{' '}
              <span className="text-primary">•</span> Generative AI Specialist
            </p>
            <p className="text-lg sm:text-xl mt-2 text-muted-foreground/80">
              Building enterprise AI products | Team Lead
            </p>
          </div>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            3.5+ years crafting intelligent solutions with LLMs, RAG architectures,
            and agentic workflows. Transforming complex problems into elegant AI-powered experiences.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow font-semibold px-8"
              asChild
            >
              <a href="#projects">
                View Projects <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-8"
              asChild
            >
              <a href="DipanjanKuila.cv.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 w-4 h-4" /> View Resume
              </a>
            </Button>
          </div>

          {/* ⭐ AI Value Statement (Replaces Tech Stack) */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-muted-foreground mb-4 font-mono">// What I Bring</p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: <Target size={16} />, text: 'AI solutions for real problems' },
                { icon: <Infinity size={16} />, text: 'Endless innovation with GenAI' },
                { icon: <BrainCircuit size={16} />, text: 'Multi-agent AI workflows' },
                { icon: <Rocket size={16} />, text: 'From idea → deployed product' },
              ].map((item) => (
                <span
                  key={item.text}
                  className="px-4 py-2 rounded-lg bg-secondary/50 text-foreground/80 text-sm font-mono border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
                >
                  {item.icon}
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
