import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Stock Market Analytics Pipeline",
      description: "Architected a serverless real-time data pipeline using Kinesis, Lambda, and DynamoDB to ingest and process events.",
      technologies: ["AWS", "Python", "Kinesis"],
      demoLink: "https://github.com/bobbydevarapu/real-time-stock-analytics-aws",
      githubLink: "https://github.com/bobbydevarapu/real-time-stock-analytics-aws",
      image: "/image/stock-analytics.jpg"
    },
    {
      title: "Automated Receipt Processing System",
      description: "Designed a Textract-based OCR workflow with automated ingestion and structured DynamoDB storage.",
      technologies: ["AWS S3", "Textract", "Lambda"],
      demoLink: "https://github.com/bobbydevarapu/automated_receipt_processing",
      githubLink: "https://github.com/bobbydevarapu/automated_receipt_processing",
      image: "/image/automated-receipt.png"
    },
    {
      title: "Intelligent Incident Recovery System",
      description: "Engineered an automated log-classification pipeline processing 2,000+ events/day and automated incident triage workflows.",
      technologies: ["Python", "AWS Lambda", "DynamoDB"],
      demoLink: "#",
      githubLink: "#",
      image: "/image/Intelligent-Incident.jpg"
    }
    ,
    {
      title: "Box-Dome",
      description: "Movie management app with auth and watchlist.",
      technologies: ["React", "JavaScript", "Tailwind"],
      demoLink: "https://boxdome-app.onrender.com/",
      githubLink: "https://github.com/bobbydevarapu/boxdome-app",
      image: "/image/boxdome.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-effect rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-black/50 text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    onClick={() => window.open(project.demoLink, '_blank')}
                    disabled={project.demoLink === "#"}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex-1 hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    onClick={() => window.open(project.githubLink, '_blank')}
                    disabled={project.githubLink === "#"}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
      </div>
    </section>
  );
};

export default ProjectsSection;