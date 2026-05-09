import { Cloud, Code2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section
  id="about"
  className="
    section-divider
    relative
    py-16 md:py-24
    overflow-hidden
  "
>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* CENTER ABOUT TEXT */}
        <div className="flex justify-center mb-10">
          <p
            className="
              text-primary
              uppercase
              tracking-[0.28em]
              text-[11px]
            "
          >
            About
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-10 lg:gap-16
            items-start
          "
        >

          {/* LEFT CONTENT */}
          <div>

            <h2
                className="
  text-[20px]
  sm:text-[34px]
  md:text-[48px]
  lg:text-[64px]

  font-black
  leading-[1]

  tracking-[-0.04em]

  text-white

  max-w-[620px]
"
            >
              Backend-focused engineer building scalable digital systems.
            </h2>

          </div>

          {/* RIGHT CARDS */}
          <div
            className="
              flex
              flex-col
              gap-5

              w-full
              max-w-[560px]

              lg:ml-auto
            "
          >

            {/* CARD 1 */}
            <div
              className="
                glass-effect
                rounded-2xl
                p-5 sm:p-6

                border border-white/5
                hover:border-primary/20

                transition-all duration-300
              "
            >
              <div className="flex items-start gap-4">

                {/* ICON */}
                <div
                  className="
                    min-w-[52px]
                    h-[52px]

                    rounded-xl

                    bg-primary/10
                    border border-primary/20

                    flex items-center justify-center
                  "
                >
                  <Code2 className="w-6 h-6 text-primary" />
                </div>

                {/* TEXT */}
                <div>
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      mb-2
                    "
                  >
                    Backend Development
                  </h3>

                  <p
                    className="
                      text-zinc-400
                      text-sm
                      leading-relaxed
                    "
                  >
                    APIs, scalable systems, microservices,
                    and backend architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                glass-effect
                rounded-2xl
                p-5 sm:p-6

                border border-white/5
                hover:border-primary/20

                transition-all duration-300
              "
            >
              <div className="flex items-start gap-4">

                {/* ICON */}
                <div
                  className="
                    min-w-[52px]
                    h-[52px]

                    rounded-xl

                    bg-primary/10
                    border border-primary/20

                    flex items-center justify-center
                  "
                >
                  <Cloud className="w-6 h-6 text-primary" />
                </div>

                {/* TEXT */}
                <div>
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      mb-2
                    "
                  >
                    Cloud & DevOps
                  </h3>

                  <p
                    className="
                      text-zinc-400
                      text-sm
                      leading-relaxed
                    "
                  >
                    AWS infrastructure, deployments,
                    automation, and monitoring.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;