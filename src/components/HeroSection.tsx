import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const toRotate = ["AWS Developer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let timer = setInterval(() => {
      type();
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const type = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, typedText.length - 1)
      : fullText.substring(0, typedText.length + 1);

    setTypedText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(100);
    } else {
      setTypingSpeed(100);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    const link = document.createElement("a");
  link.href = "/Bobby Resume.pdf"; // Simulated resume file
  link.download = "Bobby Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-primary/25 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
              <span className="text-foreground">Hello</span>
              <span className="text-primary">.</span>
            </h1>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-primary"></div>
                <p className="text-xl lg:text-2xl text-foreground">I'm Bobby Devarapu</p>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground flex items-center">
                <span className="inline-block min-h-[1.5em] mr-2">{typedText}</span>
                <span className="text-primary animate-blink">|</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              Got a project?
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={handleResumeClick}
            >
              My Resume
            </Button>
          </div>

          <div className="flex space-x-6 pt-8">
            <a
              href="https://github.com/bobbydevarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/bobby-devarapu-43874a2ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://www.instagram.com/bobby_devarapu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
            >
              <Instagram className="h-5 w-5 text-foreground group-hover:text-primary" />
            </a>
          </div>
        </div>

        <div className="relative lg:order-last order-first">
          <div className="relative w-full max-w-xs h-auto mx-auto aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3 hover:-rotate-3 transition-transform duration-500"></div>
            <div
              className="relative glass-effect rounded-2xl overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="/image/profile.jpg"
                alt="BD"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div 
              className="absolute -bottom-4 -right-4 w-12 h-12 glass-effect rounded-lg flex items-center justify-center smooth-bounce hover:text-white"
              style={{ animationDelay: isHovered ? "0s" : "0.5s" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="text-xl">⚡</span>
              <span className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 w-max px-2 py-1 text-xs bg-primary text-white rounded opacity-0 hover:opacity-100 transition-opacity duration-300">Hire Me</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer" onClick={() => scrollToSection("about")}>
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;