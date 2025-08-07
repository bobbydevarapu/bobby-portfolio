import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleConnectClick = () => {
    window.location.href = "mailto:bobby4976@gmail.com";
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled ? "glass-effect shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div 
            className="text-xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            BD
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground relative group transition-all duration-500"
                style={{ color: scrolled ? "#ffffff" : "inherit" }}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              variant="hero" 
              size="sm"
              onClick={handleConnectClick}
              className="nav-btn flex items-center bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Let's Connect
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/90 glass-effect shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-lg font-medium hover:text-primary transition-colors duration-300 py-2 bg-white/20 rounded-lg"
                  style={{ color: scrolled ? "#ffffff" : "#000000" }}
                >
                  {item}
                </button>
              ))}
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full nav-btn"
                onClick={handleConnectClick}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;