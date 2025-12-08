const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Vector Databases',
    skills: ['AstraDB', 'Azure AI Index'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'ML & Deep Learning',
    skills: [
      'Scikit-Learn',
      'TensorFlow',
      'Keras',
      'Deep Learning',
      'Machine Learning',
      'Time Series Analysis',
      'Regression',
      'Forecasting',
      'Classification',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Generative AI & NLP',
    skills: [
      'Generative AI Tools',
      'GANs',
      'LLM',
      'RAG',
      'Multimodal',
      'NLP',
      'Agentic Workflow',
      'Transformers',
      'BERT',
      'MCP',
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['LangChain', 'LangGraph', 'LlamaIndex', 'Langflow', 'Phidata', 'FastAPI', 'Flask'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Cloud & AI Services',
    skills: ['Azure', 'AWS Bedrock', 'Ollama', 'Hugging Face'],
    color: 'from-blue-500 to-indigo-500',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Technical Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Tech Arsenal</span>
            </h2>
            <div className="glow-line max-w-xs mx-auto" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity`}
                />
                
                <h3 className="text-lg font-semibold mb-4 text-foreground font-mono">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-md bg-secondary/50 text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-foreground transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
