import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
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
          bottom-0
          left-1/2

          -translate-x-1/2

          w-[320px]
          h-[320px]

          bg-primary/10

          blur-[120px]

          rounded-full
          opacity-60

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">

          <p
            className="
              text-primary
              uppercase
              tracking-[0.28em]
              text-[11px]
              mb-4
            "
          >
            Contact
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
            Let’s Build Something
          </h2>

          <p
            className="
              mt-5

              text-zinc-400

              text-[15px]
              sm:text-[16px]

              leading-relaxed

              max-w-2xl
              mx-auto
            "
          >
            Open to internships, backend engineering roles,
            cloud projects, and collaborative opportunities.
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          className="
            mt-12

            glass-effect

            rounded-2xl

            border border-white/5

            p-6 sm:p-8 md:p-10
          "
        >

          {/* EMAIL */}
          <div className="flex flex-col items-center text-center">

            <div
              className="
                w-16
                h-16

                rounded-2xl

                bg-primary/10

                border border-primary/20

                flex items-center justify-center
              "
            >
              <Mail className="w-7 h-7 text-primary" />
            </div>

            <h3
              className="
                mt-6

                text-2xl
                font-bold

                text-white
              "
            >
              Get In Touch
            </h3>

            <a
              href="mailto:bobbyd9676@gmail.com"
              className="
                mt-4

                text-zinc-400

                hover:text-primary

                transition-colors duration-300
              "
            >
              bobbyd9676@gmail.com
            </a>

            {/* BUTTON */}
            <Button
              className="
                mt-8

                btn-primary
              "
              onClick={() =>
                window.open(
                  "mailto:bobbyd9676@gmail.com",
                  "_blank"
                )
              }
            >
              Send Message

              <ArrowUpRight
                className="ml-2"
                size={18}
              />
            </Button>
          </div>

          {/* SOCIAL + CODING LINKS */}
          <div
            className="
              mt-10
              pt-8

              border-t border-white/5

              flex
              flex-wrap
              items-center
              justify-center

              gap-4
            "
          >

            {/* GITHUB */}
            <a
              href="https://github.com/bobbydevarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <Github size={20} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/bobbydevarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <Linkedin size={20} />
            </a>

            {/* LEETCODE */}
            <a
              href="https://leetcode.com/u/BobbyDevarapu/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <img
                src="/image/leetcode.png"
                alt="LeetCode"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* CODECHEF */}
            <a
              href="https://www.codechef.com/users/bbydevarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <img
                src="/image/codechef.png"
                alt="CodeChef"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* GFG */}
            <a
              href="https://www.geeksforgeeks.org/user/bobbydz1hq/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <img
                src="/image/gfg.png"
                alt="GFG"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* HACKERRANK */}
            <a
              href="https://www.hackerrank.com/profile/bobbyd9676"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <img
                src="/image/hackerrank.png"
                alt="HackerRank"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* TUF */}
            <a
              href="https://takeuforward.org/profile/Devera"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <img
                src="/image/tuf.png"
                alt="TUF"
                className="w-5 h-5 object-contain"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;