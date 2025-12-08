import { Brain, Code2, Database, Sparkles, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Generative AI Specialist',
    description: '3.5 years of expertise in LLM models, Ollama, Hugingface, vector databases, Azure AI Search.',
  },
  {
    icon: Code2,
    title: 'AI Frameworks Expert',
    description: 'Proficient in LangChain, LlamaIndex, LangGraph, PhiData, Autogen and GAN models for synthetic data.',
  },
  {
    icon: Database,
    title: 'Backend Developer',
    description: 'Strong hands-on experience with Python, FastAPI, and scalable REST APIs.',
  },
  {
    icon: Sparkles,
    title: 'ML & Data Science',
    description: 'Expert in ML algorithms with NumPy, Pandas, Scikit-learn, and TensorFlow.',
  },
  {
    icon: Users,
    title: 'AI Product Builder',
    description: 'Key contributor to GenAI products at ITC Infotech and Sutherland Global.',
  },
  {
    icon: Zap,
    title: 'Passionate Innovator',
    description: 'Eager to tackle challenges and push the boundaries of AI technology.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Crafting the Future with <span className="text-gradient">AI</span>
            </h2>
            <div className="glow-line max-w-xs mx-auto" />
          </div>

          {/* About content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an AI Engineer specializing in Generative AI with over 3.8 years of experience 
                building enterprise-grade AI products from the ground up. My expertise spans the 
                entire AI development lifecycle—from architecting RAG pipelines and agentic workflows 
                to deploying production-ready LLM applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="font-semibold text-foreground">ITC Infotech</span> and 
                <span className="font-semibold text-foreground"> Sutherland Global</span>, I’ve engineered and led 
                high-impact GenAI initiatives—leveraging commercial LLM APIs, open-source local LLMs, 
                and compact SLM models for on-device and cost-efficient deployments. 
                With deep expertise in Azure AI, LangChain, vector databases, and multi-agent systems, 
                I specialize in turning complex business challenges into production-ready AI solutions.
              </p>


              <div className="flex items-center gap-4 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">3.8+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">10+</p>
                  <p className="text-sm text-muted-foreground">AI Projects</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">2</p>
                  <p className="text-sm text-muted-foreground">Enterprise Products</p>
                </div>
              </div>
            </div>

            {/* Code block aesthetic */}
            <div className="glass rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-muted-foreground">profile.py</span>
              </div>
              <pre className="text-muted-foreground overflow-x-auto">
                <code>{`class AIEngineer:
    def __init__(self):
        self.name = "Dipanjan Kuila"
        self.role = "AI Engineer"
        self.specialization = [
            "Generative AI",
            "LLM Applications",
            "RAG Architectures"
        ]
        self.current_focus = "Agentic AI"
        
    def build(self, problem):
        solution = self.think(problem)
        return self.implement(solution)`}</code>
              </pre>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
