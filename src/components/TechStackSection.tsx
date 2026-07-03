
const TechStackSection = () => {
  const techGroups = [
    {
      title: "Languages",
      items: ["Java", "Python", "C++", "JavaScript"],
    },
    {
      title: "Backend",
      items: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "Microservices"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB", "Redis"],
    },
    {
      title: "Cloud",
      items: ["AWS", "Lambda", "S3", "EC2", "IAM", "CloudWatch", "Textract", "DynamoDB"],
    },
    {
      title: "Tools",
      items: ["Docker", "Git", "GitHub", "Linux", "Postman", "VS Code", "IntelliJ"],
    },
  ];

  return (
    <section
      id="techstack"
      className="
        section-divider
        relative
        py-16 md:py-24
        overflow-hidden
      "
    >
      {/* GRID */}
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      {/* SUBTLE GLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[320px]
          h-[320px]

          bg-primary/10

          blur-[120px]

          rounded-full
          opacity-60

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
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
            Tech Stack
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
            Technologies & Tools
          </h2>
        </div>

        {/* GROUPED SKILLS */}
        <div className="grid gap-4 md:gap-5">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="
                group

                relative

                overflow-hidden
                rounded-3xl

                border border-white/[0.06]
                bg-[#0b1120]/70
                backdrop-blur-xl

                p-5 sm:p-6

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-[0_0_30px_rgba(255,122,24,0.08)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="shrink-0 sm:w-40">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
                    {group.title}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    Core tools and technologies I use regularly in projects and internships.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/[0.04]

                        px-4 py-2

                        text-sm
                        font-medium
                        text-white

                        transition-colors
                        duration-300

                        group-hover:border-primary/20
                        group-hover:text-primary
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;