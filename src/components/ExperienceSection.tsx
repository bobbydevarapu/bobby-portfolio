const ExperienceSection = () => {
  const experiences = [
    {
      period: "May 2025 – July 2025",
      title: "AWS Development Intern",
      company: "Technical Hub Pvt. Ltd – AWS Developer",
      description: `Surampalem, Andhra Pradesh<br/><ul class="list-disc pl-5 mt-2"><li>Orchestrated and managed AWS services to construct a resilient cloud structure, supporting over 5 distinct applications.</li><li>Created unit tests covering 25% of cloud configurations using automation tools to ensure system stability, reliability, and compliance with <strong style="color: #ff6200;"> AWS standards</strong>, while optimizing processes to boost operational performance.</li><li>Achieved a 30% reduction in deployment times by refining cloud resource allocation with AWS best practices.</li></ul>`,
      link: "https://www.linkedin.com/posts/bobby-devarapu-43874a2ab_internship-offer-letter-activity-7329880043856273408-qSJC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEquzewB0i0Ku0eWriHw-vF6qpxVo9qVYTY"
    },
    {
      period: "June 2025 – July 2025",
      title: "Generative AI with IBM Cloud",
      company: "SmartBridge Educational Services Pvt. Ltd – Gen AI Intern",
      description: `Remote, Andhra Pradesh<br/><ul class="list-disc pl-5 mt-2"><li>Excelled in the Short-Term Virtual Internship Program focused on <strong style="color: #ff6200;">Generative AI</strong> with IBM Cloud, successfully completing 100% of assigned milestones ahead of schedule and earning top recognition among peers.</li><li>Spearheaded program success with unwavering dedication, achieving a 98% team performance rating, delivering a 90% accuracy rate in AI model outputs, and demonstrating exceptional teamwork and leadership.</li></ul>`,
      link: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-8">Internships</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 group"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <div className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary underline mt-2 inline-block">Link</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Turning complex problems into 
            <span className="text-gradient"> Efficient Prototypes</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">1+</div>
              <p className="text-muted-foreground">Years of experience</p>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Projects Done</p>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;