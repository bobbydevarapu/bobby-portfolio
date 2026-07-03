import { ArrowUpRight } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "May 2025 – July 2025",
      title: "Generative AI Intern",
      company: "SmartBridge Educational Services Pvt. Ltd",
      location: "Remote, Andhra Pradesh",
      technologies: [
        "Python",
        "IBM Cloud",
        "Machine Learning",
        "Data Validation",
      ],
      points: [
        "Built Python-based data pipelines on IBM Cloud to process and analyze 50K+ records efficiently.",
        "Improved baseline model performance by 18% through structured dataset validation and preprocessing.",
        "Designed reusable preprocessing workflows, reducing redundant data-cleaning effort by ~30%."
      ],
      link: "https://apsche.smartinternz.com/Student/externships",
    },

    {
      period: "June 2024 – June 2025",
      title: "AWS Development Intern",
      company: "Technical Hub Pvt Ltd",
      location: "Surampalem, Andhra Pradesh",
      technologies: [
        "AWS",
        "Python",
        "Bash",
        "Linux",
      ],
      points: [
        "Managed AWS infrastructure (EC2, S3, IAM, CloudWatch) supporting 5+ applications in test environments.",
        "Automated environment setup using Python and Bash scripts on Linux, cutting manual effort by 25%.",
        "Implemented monitoring and alerting via CloudWatch to track system performance and reliability."
      ],
      link: "https://drive.google.com/drive/u/0/folders/1E46QROvaO2GExNx-mfn5M6AFtcT_dRUr",
    },
  ];

  return (
    <section
      id="experience"
      className="
        relative
        py-20 md:py-28
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      {/* ORANGE GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[500px]
          h-[500px]

          bg-primary/10
          blur-[140px]

          rounded-full
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p
            className="
              text-primary
              uppercase
              tracking-[0.32em]
              text-[11px]
              mb-4
            "
          >
            Experience
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl

              font-bold
              text-white
            "
          >
            Internship
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div
            className="
              absolute
              left-[7px]
              sm:left-[8px]

              top-0
              bottom-0

              w-px

              bg-gradient-to-b
              from-primary/0
              via-primary/30
              to-primary/0

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-10">

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`
                  relative
                  flex
                  flex-col

                  md:flex-row
                  md:items-start

                  ${index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                  }
                `}
              >

                {/* DOT */}
                <div
                  className="
                    absolute
                    left-[-1px]
                    top-7

                    md:left-1/2
                    md:-translate-x-1/2

                    w-4
                    h-4

                    rounded-full
                    bg-primary

                    border-[5px]
                    border-[#050816]

                    shadow-[0_0_20px_rgba(255,122,24,0.6)]

                    z-10
                  "
                />

                {/* CARD */}
                <div
                  className="
                    relative

                    ml-8
                    sm:ml-10
                    md:ml-0

                    w-[calc(100%-2rem)]
                    sm:w-full
                    md:w-[46%]

                    rounded-3xl

                    p-6
                    sm:p-7

                    bg-[#0b1120]/80

                    border border-white/[0.06]

                    backdrop-blur-xl

                    shadow-[0_10px_40px_rgba(0,0,0,0.45)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-primary/20
                    hover:shadow-[0_0_30px_rgba(255,122,24,0.08)]
                  "
                >

                  {/* INNER GLOW */}
                  <div
                    className="
                      absolute
                      inset-0

                      rounded-3xl

                      bg-gradient-to-br
                      from-primary/[0.03]
                      to-transparent

                      pointer-events-none
                    "
                  />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* TOP */}
                    <div className="space-y-4">

                      <div>
                        <h3
                          className="
                            text-2xl
                            sm:text-[30px]

                            font-bold
                            text-white

                            leading-tight
                            tracking-[-0.03em]
                          "
                        >
                          {exp.title}
                        </h3>

                        <p
                          className="
                            text-primary
                            font-medium

                            mt-3

                            text-[15px]
                            leading-relaxed
                          "
                        >
                          {exp.company}
                        </p>

                        <p
                          className="
                            text-zinc-500
                            text-sm

                            mt-2
                          "
                        >
                          {exp.location}
                        </p>
                      </div>

                      {/* DATE */}
                      <div
                        className="
                          inline-flex
                          items-center

                          rounded-full

                          border border-white/10

                          bg-white/[0.03]

                          px-4 py-2

                          text-sm
                          text-zinc-300
                        "
                      >
                        {exp.period}
                      </div>
                    </div>

                    {/* POINTS */}
                    <ul
                      className="
                        mt-7
                        space-y-5

                        text-zinc-400
                        text-[15px]

                        leading-8
                      "
                    >
                      {exp.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="
                            flex
                            items-start
                            gap-4
                          "
                        >
                          <span
                            className="
                              mt-[12px]

                              w-2
                              h-2

                              rounded-full
                              bg-primary

                              shrink-0
                            "
                          />

                          <span className="break-words">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* TECHNOLOGIES */}
                    <div className="mt-7">
                      <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                        Technologies
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full
                              border border-primary/20

                              bg-primary/10

                              px-3 py-1

                              text-[12px]
                              font-medium
                              text-primary
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-8">

                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2

                          text-primary
                          text-sm
                          font-medium

                          transition-all
                          duration-300

                          hover:gap-3
                        "
                      >
                        <span>Visit Link</span>

                        <ArrowUpRight
                          size={16}
                          strokeWidth={2.2}
                        />
                      </a>

                    </div>
                  </div>
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