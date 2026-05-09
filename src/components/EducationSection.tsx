const EducationSection = () => {
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
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center mb-10 md:mb-14">
  <p
    className="
      text-primary
      uppercase
      tracking-[0.28em]
      text-[11px]
      mb-3
    "
  >
    Education
  </p>

  <h2
    className="
      text-[38px]
      sm:text-[52px]
      md:text-[60px]

      font-black
      tracking-[-0.04em]

      text-white
    "
  >
    Academic
  </h2>
</div>

        {/* EDUCATION CARD */}
        <div
          className="
            glass-effect

            rounded-3xl

            border border-white/5

            p-6
            sm:p-8
            md:p-10

            hover:border-primary/20
            hover:-translate-y-1

            transition-all duration-300
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row

              lg:items-start
              lg:justify-between

              gap-6
            "
          >

            {/* LEFT */}
            <div className="max-w-2xl">

              <h3
                className="
                  text-[28px]
                  sm:text-[34px]

                  leading-tight

                  font-bold
                  text-white
                "
              >
                B.Tech in Computer Science & Engineering
              </h3>

              <p
                className="
                  text-primary

                  text-lg
                  sm:text-xl

                  font-medium

                  mt-3
                "
              >
                Aditya College of Engineering and Technology
              </p>

              <p
                className="
                  mt-5

                  text-zinc-400

                  text-base
                  sm:text-lg

                  leading-relaxed
                "
              >
                Kakinada, Andhra Pradesh
              </p>

              <p
                className="
                  mt-2

                  text-zinc-500

                  text-base
                "
              >
                CGPA: 8.0 / 10
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="
                lg:text-right

                text-zinc-500

                text-base
                sm:text-lg

                font-medium

                lg:min-w-[140px]
              "
            >
              October 2022 — May 2026
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;