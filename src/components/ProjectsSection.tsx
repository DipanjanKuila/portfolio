import { Github, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    tech: ['LangChain', 'Azure OpenAI', 'RAG', 'Wikipedia API'],
    github: 'https://github.com/DipanjanKuila/Multi_Ai_Agent',
    video: 'https://www.linkedin.com/posts/dipanjan-kuila_ai-multiagentsystems-documentai-activity-7258444117800599552-sUGg',
    featured: true,
  },
  {
    title: 'Automated Stock Report Analyzer',
    description: 'End-to-end automation system that reads financial PDFs from Google Drive, analyzes them using Azure OpenAI, and sends detailed reports via email.',
    tech: ['Azure OpenAI', 'Google Drive API', 'PDF Processing', 'Email Automation'],
    github: 'https://github.com/DipanjanKuila/Stock_analysis',
    video: 'https://www.linkedin.com/posts/dipanjan-kuila_ai-finance-azure-activity-7319749207840514049-XcYO',
    featured: true,
  },
  {
    title: 'Chatbot with Memory',
    description: 'ChatGPT-like conversational agent with SQLAlchemy for chat history. Features new conversations, message storage, history retrieval, and auto-generated titles.',
    tech: ['Azure OpenAI', 'SQLAlchemy', 'FastAPI', 'Chat Memory'],
    github: 'https://github.com/DipanjanKuila/Chatbot_with_memory',
    video: 'https://www.linkedin.com/posts/dipanjan-kuila_ai-chatbot-fastapi-activity-7288190409493606403-295d',
    featured: true,
  },
  {
    title: 'MCP Agent FastAPI',
    description: 'Modular AI-powered tool framework integrating FastAPI with MCP. REST APIs converted to LLM-consumable tools with dynamic schema handling and memory-based chat.',
    tech: ['FastAPI', 'MCP Protocol', 'LLM Tools', 'MCPAgent'],
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
