import { Building2, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Sr. Software Developer | AI/ML',
    company: 'Sutherland Global',
    period: 'July 2025 – Present',
    type: 'current',
    description: 'Code Generation Assistant Product',
    highlights: [
      'Developed an intelligent assistant that converts requirement documents into user stories, then generates code creation, API testing, and test case generation',
      'Built the backend using FastAPI integrated with LangChain and LangGraph for orchestration',
      'Integrated Ollama open-source models for local LLM inference',
      'Designed end-to-end automation pipeline from requirements to deployable code',
    ],
  },

  {
    title: 'Associate IT Consultant | AI/ML',
    company: 'ITC Infotech',
    period: 'September 2022 – June 2025',
    type: 'past',
    description: 'AI/ML & GenAI Product Development',
    highlights: [
      // ---- Project 1 ----
      'PROJECT 1 — AI/ML: Synthetic Data Generation',
      '• Developed, maintained, and improved synthetic data generation models using GANs and VAEs.',
      '• Generated high-quality structured and unstructured datasets for advanced AI workflows.',

      // ---- Project 2 ----
      'PROJECT 2 — GenAI Product Development',
      '• Built and maintained an enterprise-grade GenAI application for ITC Infotech.',
      '• Leveraged GPT-3.5, GPT-4, GPT-4o, and GPT-4o Mini for advanced reasoning and automation.',
      '• Integrated Azure AI Search with LangChain for semantic knowledge retrieval.',
      '• Built backend using Python + FastAPI with a fully customized RAG pipeline.',
      '• Implemented vector databases (AstraDB, Azure AI Index) for optimized retrieval.',
      '• Added LangGraph multi-agent workflows for automation and decision orchestration.',
      '• Implemented robust chat memory for context-aware interactions.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Work Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <div className="glow-line max-w-xs mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? 'md:pr-8 md:text-right md:mr-auto md:ml-0 md:w-1/2'
                    : 'md:pl-8 md:ml-auto md:mr-0 md:w-1/2'
                } pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-auto ${
                    index % 2 === 0
                      ? 'md:right-0 md:translate-x-1/2'
                      : 'md:left-0 md:-translate-x-1/2'
                  } w-4 h-4 rounded-full ${
                    exp.type === 'current'
                      ? 'bg-primary shadow-glow'
                      : 'bg-secondary border-2 border-primary/50'
                  } -translate-x-1/2 md:translate-x-0`}
                />

                {/* Card */}
                <div
                  className={`glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  {/* "Current" Badge */}
                  {exp.type === 'current' && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Current
                    </span>
                  )}

                  {/* Title + Company */}
                  <div
                    className={`flex items-start gap-3 mb-3 ${
                      index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Timeline text */}
                  <div
                    className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  <p className="text-muted-foreground font-medium mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.highlights.map((highlight, i) => {
                      const isProjectTitle = highlight.startsWith('PROJECT');

                      return (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${
                            isProjectTitle
                              ? 'text-primary font-semibold mt-3 mb-1'
                              : 'text-muted-foreground'
                          }`}
                        >
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isProjectTitle ? 'text-primary' : 'text-primary'
                            }`}
                          />

                          <span>{isProjectTitle ? `📌 ${highlight}` : highlight}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
