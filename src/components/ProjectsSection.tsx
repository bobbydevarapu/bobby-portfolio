import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    // ======================================================
    // MAJOR PROJECTS
    // ======================================================

    {
      category: "Major Project",

      title: "Assignment Integrity Analyzer",

      description:
        "Embedding-based plagiarism detection platform for identifying copied and paraphrased assignments.",

      technologies: [
        "Python",
        "FastAPI",
        "MongoDB",
        "Sentence Transformers",
      ],

      point:
        "Built semantic similarity pipelines for automated plagiarism detection and violation analysis.",

      githubLink:
        "https://github.com/bobbydevarapu/Analyzer-101",

      demoLink:
        "https://aia-101.up.railway.app/",

      image: "/image/aia.png",
    },

    {
      category: "Major Project",

      title:
        "Multi-Modal AI Summarization System",

      description:
        "AI-powered platform for summarizing documents, speech, images, and videos.",

      technologies: [
        "Python",
        "Whisper",
        "OCR",
        "Transformers",
        "NLP",
      ],

      point:
        "Integrated speech-to-text, OCR, and NLP pipelines for intelligent multi-format summarization.",

      githubLink: "#",

      demoLink: "#",

      image: "/image/multimodal-ai.png",
    },

    // ======================================================
    // MINI PROJECTS
    // ======================================================

    {
      category: "Mini Project",

      title:
        "Automated Expense Processing System",

      description:
        "Serverless OCR workflow for automated receipt extraction and reporting.",

      technologies: [
        "AWS Textract",
        "Lambda",
        "S3",
        "DynamoDB",
      ],

      point:
        "Automated expense extraction workflows using AWS Textract and Lambda services.",

      githubLink:
        "https://github.com/bobbydevarapu/automated_receipt_processing",

      demoLink: "#",

      image: "/image/automated-receipt.png",
    },

    {
      category: "Mini Project",

      title: "Box Dome",

      description:
        "Full-stack movie tracking platform with authentication and watchlist management.",

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind",
      ],

      point:
        "Built responsive movie dashboards with backend integration and user authentication.",

      githubLink:
        "https://github.com/bobbydevarapu/boxdome-app",

      demoLink:
        "https://boxdome-app.onrender.com",

      image: "/image/boxdome.png",
    },

    // ======================================================
    // BACKEND SYSTEM PROJECTS
    // ======================================================

    {
      category: "Backend System Project",

      title: "Feature Flag Engine",

      description:
        "Runtime feature management system supporting controlled rollouts.",

      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "Redis",
      ],

      point:
        "Implemented scalable runtime feature toggling with Redis-based optimization.",

      githubLink:
        "https://github.com/bobbydevarapu/featureengine",

      demoLink: "#",

      image: "/image/feature-engine.png",
    },

    {
      category: "Backend System Project",

      title:
        "Real-Time Stock Market Analytics",

      description:
        "Event-driven stock analytics platform with live market tracking.",

      technologies: [
        "AWS",
        "Spring Boot",
        "REST APIs",
        "React",
      ],

      point:
        "Designed backend analytics workflows for processing real-time stock events.",

      githubLink:
        "https://github.com/bobbydevarapu/real-time-stock-analytics-aws",

      demoLink:
        "https://github.com/bobbydevarapu/real-time-stock-analytics-aws",

      image: "/image/stock-analytics.png",
    },
  ];

  return (
    <section
      id="projects"
      className="
        section-divider
        relative
        py-16 md:py-24
        overflow-hidden
      "
    >
      {/* GRID */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-14">
          <p
            className="
              text-primary
              uppercase
              tracking-[0.28em]
              text-[11px]
              mb-4
            "
          >
            Projects
          </p>

          <h2
            className="
              text-[34px]
              sm:text-[46px]
              md:text-[54px]

              font-black
              tracking-[-0.04em]

              text-white
            "
          >
            Selected Work
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                glass-effect

                rounded-2xl
                overflow-hidden

                border border-white/5

                hover:border-primary/20
                hover:-translate-y-1

                transition-all duration-300
              "
            >

              {/* IMAGE */}
              <div className="relative h-[220px] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover

                    transition-transform duration-500

                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute inset-0

                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                {/* CATEGORY */}
                <div
                  className="
                    absolute
                    top-4
                    left-4
                  "
                >
                  <span
                    className="
                      px-3 py-1

                      rounded-full

                      text-[10px]
                      font-semibold

                      tracking-[0.2em]
                      uppercase

                      bg-primary/90

                      text-white
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* TECH STACK */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4

                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1

                        rounded-full

                        text-[11px]
                        font-medium

                        bg-black/50
                        backdrop-blur-md

                        border border-white/10

                        text-white
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <h3
                  className="
                    text-[22px]
                    font-bold
                    text-white

                    leading-tight
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4

                    text-zinc-400

                    text-[14px]

                    leading-relaxed
                  "
                >
                  {project.description}
                </p>

                {/* SINGLE POINT */}
                <p
                  className="
                    mt-5

                    text-zinc-500

                    text-[13px]

                    leading-relaxed
                  "
                >
                  {project.point}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-6">

                  <Button
                    variant="outline"
                    size="sm"
                    className="
                      flex-1

                      border-white/10
                      bg-white/[0.02]

                      hover:bg-primary
                      hover:text-white

                      transition-all duration-300
                    "
                    onClick={() =>
                      window.open(project.demoLink, "_blank")
                    }
                    disabled={project.demoLink === "#"}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="
                      flex-1

                      hover:bg-white/10

                      transition-all duration-300
                    "
                    onClick={() =>
                      window.open(project.githubLink, "_blank")
                    }
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
      </div>
    </section>
  );
};

export default ProjectsSection;