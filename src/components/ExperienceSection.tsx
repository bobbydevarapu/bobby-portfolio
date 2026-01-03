const ExperienceSection = () => {
  const experiences = [
    {
      period: "May 2025 – July 2025",
      title: "AWS Development Intern",
      company: "Technical Hub Pvt. Ltd – AWS Developer",
      description: `Surampalem, Andhra Pradesh<br/><ul class="list-disc pl-5 mt-2"><li>Deployed and monitored AWS infrastructure (EC2, S3, IAM, CloudWatch) for 5+ applications in test environments.</li><li>Created Python/Bash automation scripts that streamlined cloud configuration tasks by 25%.</li><li>Monitored system metrics and streamlined performance checks, enhancing stability while lowering repetitive interventions by 15%.</li><li>Connected backend services to cloud resources via REST APIs and tracked application-level behavior.</li></ul>`,
      link: "https://www.linkedin.com/posts/bobby-devarapu-43874a2ab_internship-offer-letter-activity-7329880043856273408-qSJC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEquzewB0i0Ku0eWriHw-vF6qpxVo9qVYTY"
    },
    {
      period: "June 2025 – July 2025",
      title: "Generative AI with IBM Cloud",
      company: "SmartBridge Educational Services Pvt. Ltd – Gen AI Intern",
      description: `Remote, Andhra Pradesh<br/><ul class="list-disc pl-5 mt-2"><li>Completed a Generative AI internship on IBM Cloud, delivering 100% of milestones on schedule.</li><li>Processed and evaluated 12+ datasets to support preprocessing and improve baseline model testing accuracy by 18%.</li><li>Constructed optimized data-preprocessing pipelines using Python, boosting stability and minimizing manual effort.</li></ul>`,
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
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
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