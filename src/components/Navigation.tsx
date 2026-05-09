import { Button } from "@/components/ui/button";

import {
  Mail,
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Contact",
  ];

  const scrollToSection = (
    sectionId: string
  ) => {
    const element =
      document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  const handleConnectClick = () => {
    window.location.href =
      "mailto:bobbyd9676@gmail.com";
  };

  return (
    <>
      {/* TOP BORDER */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-50"></div>

      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500 ease-out

          ${
            scrolled
              ? "py-3"
              : "py-6"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* NAV CONTAINER */}
          <div
            className={`
              relative
              flex items-center justify-between

              rounded-2xl
              border border-white/10

              transition-all duration-500 ease-out

              ${
                scrolled
                  ? `
                    h-[64px]
                    bg-black/55
                    backdrop-blur-2xl
                    shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                    px-5 lg:px-7
                  `
                  : `
                    h-[84px]
                    bg-black/25
                    backdrop-blur-xl
                    shadow-[0_8px_40px_rgba(0,0,0,0.30)]
                    px-6 lg:px-8
                  `
              }
            `}
          >
            {/* INNER GLOW */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>

            {/* LOGO */}
            <button
              onClick={() =>
                scrollToSection("home")
              }
              className="relative z-10"
            >
              <h1
                className={`
                  font-black
                  tracking-tight
                  text-white

                  transition-all duration-500

                  ${
                    scrolled
                      ? "text-2xl"
                      : "text-3xl"
                  }
                `}
              >
                BD
                <span className="text-gradient">
                  .
                </span>
              </h1>
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10 relative z-10">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item.toLowerCase()
                    )
                  }
                  className={`
                    relative
                    font-medium
                    text-zinc-300
                    hover:text-white

                    transition-all duration-300
                    group

                    ${
                      scrolled
                        ? "text-sm"
                        : "text-[15px]"
                    }
                  `}
                >
                  {item}

                  {/* HOVER LINE */}
                  <span
                    className="
                      absolute left-0 -bottom-2
                      h-[2px] w-0

                      bg-gradient-to-r
                      from-primary to-orange-300

                      transition-all duration-300
                      group-hover:w-full
                    "
                  ></span>
                </button>
              ))}
            </div>

            {/* BUTTON */}
            <div className="hidden md:flex items-center relative z-10">
              <Button
                onClick={handleConnectClick}
                className={`
                  rounded-xl

                  bg-gradient-to-r
                  from-primary to-orange-400

                  text-white

                  border border-orange-300/20

                  hover:scale-[1.03]

                  transition-all duration-500

                  ${
                    scrolled
                      ? `
                        h-10
                        px-5
                        text-sm
                      `
                      : `
                        h-12
                        px-6
                        text-base
                      `
                  }
                `}
              >
                <Mail className="h-4 w-4 mr-2" />

                Email
              </Button>
            </div>

            {/* MOBILE */}
            <div className="md:hidden relative z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  setIsOpen(!isOpen)
                }
                className="
                  text-white
                  hover:bg-white/10
                "
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div
              className="
                md:hidden
                mt-4

                rounded-2xl
                border border-white/10

                bg-black/60
                backdrop-blur-2xl

                p-6

                shadow-[0_8px_40px_rgba(0,0,0,0.35)]
              "
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(
                        item.toLowerCase()
                      )
                    }
                    className="
                      text-left
                      text-zinc-300

                      hover:text-primary

                      transition-all duration-300
                    "
                  >
                    {item}
                  </button>
                ))}

                <Button
                  onClick={
                    handleConnectClick
                  }
                  className="
                    mt-2

                    bg-gradient-to-r
                    from-primary to-orange-400

                    text-white

                    rounded-xl
                  "
                >
                  <Mail className="h-4 w-4 mr-2" />

                  Let's Connect
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;