import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

import { useEffect, useState } from "react";

const HeroSection = () => {
  const [typedText, setTypedText] =
    useState("");

  const [isDeleting, setIsDeleting] =
    useState(false);

  const [loopNum, setLoopNum] =
    useState(0);

  const roles = [
    "AWS Developer",
    "Backend Engineer",
    "Web Developer",
    "Cloud Engineer",
  ];

  useEffect(() => {
    const current =
      loopNum % roles.length;

    const fullText = roles[current];

    const timeout = setTimeout(() => {
      setTypedText(
        isDeleting
          ? fullText.substring(
              0,
              typedText.length - 1
            )
          : fullText.substring(
              0,
              typedText.length + 1
            )
      );

      if (
        !isDeleting &&
        typedText === fullText
      ) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      }

      if (
        isDeleting &&
        typedText === ""
      ) {
        setLoopNum(
          (prev) => prev + 1
        );

        setIsDeleting(false);
      }
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [
    typedText,
    isDeleting,
    loopNum,
  ]);

  const scrollToSection = (
    id: string
  ) => {
    const element =
      document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleResumeClick = async () => {
    // Try known resume filenames in public/ and download the first one that exists
    const candidates = [
      "/Bobby_Devarapu.pdf",
      "/Bobby_SDE.pdf",
      "/Bobby.pdf",
    ];

    let found: string | null = null;

    for (const path of candidates) {
      try {
        const res = await fetch(path, { method: "HEAD" });
        if (res.ok) {
          found = path;
          break;
        }
      } catch (e) {
        // ignore network errors and try next
      }
    }

    if (!found) {
      // If the resume file isn't present in public/, notify the user
      alert("Resume file not found in public/. Please place your PDF in the project's public folder and retry.");
      return;
    }

    const link = document.createElement("a");
    link.href = found;
    // Use the filename portion for download attribute
    link.download = found.split("/").pop() || "resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        hero-gradient
        flex items-center
      "
    >
      {/* GRID */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* GLOW */}
      <div className="hero-glow"></div>

      {/* CIRCLES */}
      <div className="absolute top-24 left-[-180px] w-[360px] h-[360px] border border-primary/10 rounded-full"></div>

      <div className="absolute bottom-10 right-[-150px] w-[300px] h-[300px] border border-primary/10 rounded-full"></div>

      {/* MAIN */}
      <div
        className="
          relative z-10

          max-w-7xl
          mx-auto

          px-5 sm:px-6 lg:px-8

          pt-28 sm:pt-32
          pb-16

          w-full
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2

            gap-14 lg:gap-20

            items-center
          "
        >
          {/* IMAGE FIRST MOBILE */}
          <div
            className="
              relative

              flex justify-center

              order-1 lg:order-2

              fade-in-up
            "
          >
            {/* BG SHAPE */}
            <div
              className="
                absolute

                w-[240px]
                sm:w-[320px]
                lg:w-[420px]

                h-[300px]
                sm:h-[420px]
                lg:h-[520px]

                bg-gradient-to-br
                from-primary/20
                to-transparent

                rounded-[40px]

                rotate-6

                blur-sm
              "
            ></div>

            {/* IMAGE CARD */}
            <div
              className="
                relative

                premium-card

                p-3 sm:p-5

                rounded-[28px]
                sm:rounded-[40px]

                overflow-hidden
              "
            >
              <img
                src="/image/profile.jpg"
                alt="Bobby"
                className="
                  w-[220px]
                  sm:w-[320px]
                  lg:w-[380px]

                  h-[280px]
                  sm:h-[420px]
                  lg:h-[480px]

                  object-cover

                  rounded-[24px]
                  sm:rounded-[32px]
                "
              />
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              order-2 lg:order-1

              space-y-8

              fade-in-up
            "
          >
            {/* NAME */}
            <div className="space-y-4">
              <h1
                className="
                  hero-title

                  text-5xl
                  sm:text-6xl
                  md:text-[5.2rem]
                  lg:text-[5.8rem]

                  leading-none

                  text-white
                "
              >
                Bobby
                <span className="text-gradient">
                  .
                </span>
              </h1>

              {/* TYPING */}
             <div className="min-h-[50px] sm:min-h-[70px]">
  <h2
    className="
      text-[1.9rem]
      sm:text-[2.6rem]
      lg:text-[3.2rem]

      font-semibold

      leading-tight
      tracking-[-0.03em]
    "
  >
    <span
      className="
        typing-cursor

        bg-gradient-to-r
        from-[#ffb347]
        via-[#ff7a18]
        to-[#ff8c42]

        bg-clip-text
        text-transparent

        inline-block
      "
    >
      {typedText}
    </span>
  </h2>
</div>
            </div>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row

                gap-4
              "
            >
              <Button
                onClick={() =>
                  scrollToSection(
                    "contact"
                  )
                }
                className="
                  btn-primary

                  h-14

                  px-8

                  text-base
                "
              >
                Let's Connect

                <div className="ml-3">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Button>

              <Button
                onClick={
                  handleResumeClick
                }
                variant="outline"
                className="
                  h-14

                  px-8

                  text-base

                  border-white/10
                  bg-white/5

                  hover:bg-white/10

                  text-white

                  rounded-2xl
                "
              >
                Resume

                <Download className="ml-3 h-4 w-4" />
              </Button>
            </div>

            {/* SOCIALS */}
<div
  className="
    flex items-center

    gap-3

    pt-1
  "
>
  {[
    {
      icon: Github,
      link: "https://github.com/bobbydevarapu",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/bobbydevarapu/",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/bobby_devarapu/",
    },
  ].map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-12 h-12

        rounded-xl

        border border-white/8

        bg-white/[0.03]

        backdrop-blur-xl

        flex items-center justify-center

        hover:border-primary/30
        hover:bg-primary/10
        hover:-translate-y-1

        transition-all duration-300
      "
    >
      <social.icon className="h-5 w-5 text-zinc-300" />
    </a>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;