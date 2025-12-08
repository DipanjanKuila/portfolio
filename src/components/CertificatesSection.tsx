import { Award, ExternalLink, Plus, X } from 'lucide-react';
import { useState } from 'react';

const certificates = [
  {
    title: 'Sutherland Global',
    issuer: 'Professional Certificate',
    description: 'Professional certification for AI/ML contributions at Sutherland Global',
    status: 'earned',
    placeholder: false,
    image: 'Dipanjan Kulia_page-0001.jpg',
  },
  {
    title: 'ITC Infotech',
    issuer: 'Professional Certificate',
    description: 'Recognition for contributions to AI product development from ITC Infotech',
    status: 'earned',
    placeholder: false,
    image: 'certificate_page-0001.jpg',
  },
  {
    title: 'Udemy Course Completion on Machine Learning A-Z™',
    issuer: 'Online Learning',
    description: 'Course completion certificate from Udemy',
    status: 'earned',
    placeholder: false,
    image: 'udemy_certificate-1.jpeg',
  },
  {
    title: 'Udemy Course Completion on Deep Learning A-Z™',
    issuer: 'Online Learning',
    description: 'Course completion certificate from Udemy',
    status: 'earned',
    placeholder: false,
    image: 'udemy_certificate-2.jpeg',
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Certifications</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-gradient">Certificates</span>
            </h2>
            <div className="glow-line max-w-xs mx-auto" />
            <p className="text-muted-foreground mt-4">
              Credentials and achievements validating my expertise
            </p>
          </div>

          {/* Certificates grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-xl border transition-all duration-300 ${
                  cert.status === 'coming'
                    ? 'bg-card/30 border-border/30 border-dashed'
                    : 'bg-card border-border/50 hover:border-primary/50 hover:shadow-glow'
                }`}
              >
                {cert.status === 'coming' ? (
                  <>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/30 mb-4">
                      <Plus className="w-6 h-6 text-muted-foreground/50" />
                    </div>
                    <h3 className="text-lg font-semibold text-muted-foreground/70 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/50">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground/40 mt-2 italic">
                      {cert.description}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {cert.description}
                    </p>
                    {!cert.placeholder && cert.image && (
                      <button
                        onClick={() => setSelectedCert(cert.image!)}
                        className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline"
                      >
                        View Certificate <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Note about upcoming certificates */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              // More certificates will be added soon
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedCert}
            alt="Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
