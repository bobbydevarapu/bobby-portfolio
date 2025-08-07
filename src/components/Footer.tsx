import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground">Follow me</h3>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://www.linkedin.com/in/bobby-devarapu-43874a2ab/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary" />
          </a>
          <a 
            href="https://github.com/bobbydevarapu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
          >
            <Github className="h-5 w-5 text-foreground group-hover:text-primary" />
          </a>
          <a 
            href="https://www.instagram.com/bobby_devarapu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
          >
            <Instagram className="h-5 w-5 text-foreground group-hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;