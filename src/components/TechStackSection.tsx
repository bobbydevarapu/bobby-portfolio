import { publicUrl } from "@/lib/utils";

const TechStackSection = () => {
  const technologies = [
    { name: "C", icon: publicUrl("images/c-icon.png") },
    { name: "C++", icon: publicUrl("images/cpp-icon.png") },
    { name: "Java", icon: publicUrl("images/java-icon.png") },
    { name: "Python", icon: publicUrl("images/python-icon.png") },
    { name: "ReactJS", icon: publicUrl("images/react-icon.png") },
    { name: "NodeJS", icon: publicUrl("images/node-icon.png") },
    { name: "MongoDB", icon: publicUrl("images/mongo-icon.png") },
    { name: "HTML5", icon: publicUrl("images/html-icon.png") },
    { name: "CSS3", icon: publicUrl("images/css-icon.png") },
    { name: "Git", icon: publicUrl("images/git-icon.png") },
    { name: "GitHub", icon: publicUrl("images/github-icon.png") },
    { name: "JavaScript", icon: publicUrl("images/js-icon.png") },
    { name: "REST API", icon: publicUrl("images/api-icon.png") },
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

        {/* GRID */}
        <div
          className="
            grid

            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5

            gap-4
            sm:gap-5
          "
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="
                group

                relative

                rounded-2xl

                border border-white/[0.06]

                bg-[#0b1120]/70

                backdrop-blur-xl

                p-5

                overflow-hidden

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-primary/20
              "
            >

              {/* INNER LIGHT */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity
                  duration-300

                  bg-gradient-to-br
                  from-primary/[0.04]
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div
                className="
                  relative
                  z-10

                  flex
                  flex-col
                  items-center
                  justify-center

                  text-center
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-16
                    h-16

                    rounded-xl

                    bg-white/[0.03]

                    border border-white/[0.05]

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    group-hover:border-primary/20
                  "
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="
                      w-9
                      h-9

                      object-contain
                    "
                  />
                </div>

                {/* NAME */}
                <h3
                  className="
                    mt-4

                    text-white

                    text-[13px]
                    sm:text-[14px]

                    font-medium
                  "
                >
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;