import { Github, Play, ExternalLink, Heart, Users, Shield, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Highlighted flagship project
const flagshipProject = {
  title: 'CareNexus AI',
  subtitle: 'Your Intelligent, Enterprise-Grade Healthcare Ecosystem',
  description: 'A revolutionary healthcare platform that seamlessly connects patients, doctors, and hospital systems through advanced AI technology. Experience the future of healthcare with intelligent patient management, predictive analytics, and streamlined care coordination.',
  features: [
  { icon: Heart, text: 'AI-Driven Patient Insights' },
  { icon: Users, text: 'Connected Care Ecosystem' },
  { icon: Shield, text: 'End-to-End Data Security' },
  { icon: Zap, text: 'Real-Time Smart Analytics' }
],

  tech: ['React', 'Node.js', 'python','Fastapi', 'LangChain','Langgraph', 'ollama'],
  status: 'Enterprise Ready',
  github: 'https://github.com/DipanjanKuila/carenexus_medical_chatbot',
  video: 'https://www.linkedin.com/posts/dipanjan-kuila_genai-healthcareinnovation-agenticai-activity-7404912634971471872-i_Eu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWSonQBs36RYLUgHku_cLrZVDisU_tZ6i0',
  //impact: '10,000+ Patients Connected'
};

const projects = [
  {
    title: 'Multi AI Agent LangGraph',
    description: 'Custom AI Agent integrated with Azure and Google APIs using Azure OpenAI and Google SERP API. Agentic architecture with LangGraph for automated decision-making and real-time data processing.',
    tech: ['LangGraph', 'Azure OpenAI', 'Google SERP', 'Python'],
    github: 'https://github.com/DipanjanKuila/Custom_Ai_Agent_Langgraph',
    video: 'https://www.linkedin.com/posts/dipanjan-kuila_langchain-langgraph-generativeai-activity-7268976660568317952-G0W_',
    featured: true,
  },
  {
    title: 'RAG Multi AI Agent',
    description: 'AI-based document QA system with LangChain and Azure OpenAI. Supports document uploads, advanced question routing, and integration with Wikipedia and Arxiv.',
    tech: ['LangChain','Langgraph', 'Azure OpenAI', 'RAG', 'Wikipedia API','axXiv API','python'],
    github: 'https://github.com/DipanjanKuila/Multi_Ai_Agent',
    video: 'https://www.linkedin.com/posts/dipanjan-kuila_ai-multiagentsystems-documentai-activity-7258444117800599552-sUGg',
    featured: true,
  },
  {
    title: 'Automated Stock Report Analyzer',
    description: 'End-to-end automation system that reads financial PDFs from Google Drive, analyzes them using Azure OpenAI, and sends detailed reports via email.',
    tech: ['Azure OpenAI', 'Google Drive API','LangChain','Langgraph', 'Email Automation',],
    github: 'https://github.com/DipanjanKuila/Stock_analysis',
    video: 'https://www.linkedin.com/posts/dipanjan-kuila_ai-finance-azure-activity-7319749207840514049-XcYO',
    featured: true,
  },
  {
    title: 'Chatbot with Memory',
    description: 'ChatGPT-like conversational agent with SQLAlchemy for chat history. Features new conversations, message storage, history retrieval, and auto-generated titles.',
    tech: ['Azure OpenAI', 'SQLAlchemy','python', 'FastAPI', 'LangChain','Langgraph'],
    github: 'https://github.com/DipanjanKuila/Chatbot_with_memory',
    video: 'https://www.linkedin.com/posts/dipanjan-kuila_ai-chatbot-fastapi-activity-7288190409493606403-295d',
    featured: true,
  },
  {
    title: 'MCP Agent FastAPI',
    description: 'Modular AI-powered tool framework integrating FastAPI with MCP. REST APIs converted to LLM-consumable tools with dynamic schema handling and memory-based chat.',
    tech: ['FastAPI', 'python','MCP Protocol', 'LangChain','Langgraph', 'MCPAgent'],
    github: 'https://github.com/DipanjanKuila/MCP_AGENT_FASTAPI',
    video: null,
    featured: true,
  },
  {
    title: 'CNN Image Classification',
    description: 'Convolutional Neural Network for image classification using TensorFlow and Keras. Trained to classify cats and dogs with high accuracy.',
    tech: ['TensorFlow', 'Keras', 'CNN', 'Image Classification'],
    github: 'https://github.com/DipanjanKuila/Convolutional-Neural-Network-',
    video: null,
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Featured Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="glow-line max-w-xs mx-auto" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of AI-powered applications and tools I've built to solve real-world problems
            </p>
          </div>

          {/* Flagship Project - CareNexus AI */}
          <div className="mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-700 group">
              {/* Enhanced edge glow */}
              <div className="absolute -inset-px rounded-3xl border border-primary/50 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute -inset-0.5 rounded-3xl border border-primary/30 blur-sm animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              <div className="absolute -inset-1 rounded-3xl border border-primary/20 blur-md animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
              <div className="absolute -inset-2 rounded-3xl border border-primary/10 blur-lg animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }} />
              
              {/* Blinking edge lights */}
              <div className="absolute inset-0 rounded-3xl">
                {/* Top edge */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" style={{ animationDuration: '2s' }} />
                {/* Bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '2s' }} />
                {/* Left edge */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
                {/* Right edge */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '2s' }} />
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-12 right-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
              <div className="absolute top-32 right-12 w-1 h-1 bg-accent/60 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

              <div className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left content */}
                  <div className="space-y-8">
                    {/* Flagship badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-medium backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                      FLAGSHIP PROJECT
                    </div>

                    {/* Title and subtitle */}
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-500">
                        {flagshipProject.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-primary font-medium mb-6">
                        {flagshipProject.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {flagshipProject.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3">
                      {flagshipProject.tech.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm rounded-full bg-slate-800/50 text-primary font-mono border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-2xl hover:shadow-primary/25 transition-all duration-300 group/btn px-8 py-4 text-lg font-semibold"
                        asChild
                      >
                        <a href={flagshipProject.video} target="_blank" rel="noopener noreferrer">
                          <Play className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                          Watch Demo
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-slate-600 hover:bg-slate-800/50 hover:border-primary transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm"
                        asChild
                      >
                        <a href={flagshipProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-3" />
                          Request Access
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right content - Feature Cards */}
                  <div className="grid grid-cols-2 gap-6">
                    {flagshipProject.features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={feature.text}
                          className="group/card relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:bg-card"
                          style={{ 
                            animationDelay: `${index * 0.2}s`,
                            transform: `translateY(${index % 2 === 0 ? '0' : '20px'})` 
                          }}
                        >
                          {/* Blinking edge lights */}
                          <div className="absolute inset-0 rounded-2xl">
                            {/* Top edge */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" style={{ animationDelay: `${index * 0.5}s`, animationDuration: '2s' }} />
                            {/* Bottom edge */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" style={{ animationDelay: `${index * 0.5 + 1}s`, animationDuration: '2s' }} />
                            {/* Left edge */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse" style={{ animationDelay: `${index * 0.5 + 0.5}s`, animationDuration: '2s' }} />
                            {/* Right edge */}
                            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse" style={{ animationDelay: `${index * 0.5 + 1.5}s`, animationDuration: '2s' }} />
                          </div>
                          
                          {/* Icon container */}
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-primary group-hover/card:text-white transition-colors duration-300" />
                          </div>
                          
                          {/* Content */}
                          <h4 className="relative text-lg font-bold text-white mb-2 group-hover/card:text-primary transition-colors duration-300">
                            {feature.text}
                          </h4>
                          <p className="relative text-slate-400 text-sm leading-relaxed">
                            {feature.text === 'AI-Powered Patient Care' && 'AI-powered health monitoring'}
                            {feature.text === 'Seamless Provider Network' && 'Intelligent scheduling & consultation'}
                            {feature.text === 'Enterprise Security' && 'Enterprise integration suite'}
                            {feature.text === 'Real-time Analytics' && 'HIPAA-compliant architecture'}
                          </p>
                          
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured projects */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6">
                  {/* Project number */}
                  <span className="absolute top-4 right-4 text-6xl font-bold text-border/30 font-mono">
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-secondary/50 text-primary font-mono border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                      {project.video && (
                        <Button
                          size="sm"
                          className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                          asChild
                        >
                          <a href={project.video} target="_blank" rel="noopener noreferrer">
                            <Play className="w-4 h-4 mr-2" />
                            Watch Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other projects */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.title}
                className="group p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-secondary/50 text-primary font-mono border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors border border-border/50"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Watch Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* More projects CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10" asChild>
              <a href="https://github.com/DipanjanKuila" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
