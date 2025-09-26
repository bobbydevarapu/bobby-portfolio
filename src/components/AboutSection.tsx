import { Monitor, Server, Smartphone } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "10", label: "Projects", suffix: "+" },
    { number: "95", label: "Client satisfaction", suffix: "%" },
    { number: "1", label: "Years of experience", suffix: "+" }
  ];

  const aboutText = "I am a passionate developer with a strong foundation in <strong style=\"color: #ff6200;\">AWS</strong> and web technologies. I enjoy solving <strong style=\"color: #ff6200;\">complex</strong> problems and creating innovative solutions with a keen eye for detail. Dedicated to <strong style=\"color: #ff6200;\">learning</strong> and teamwork, I thrive in dynamic environments to deliver <strong style=\"color: #ff6200;\">quality</strong> results.";

  return (
    <section id="about" className="py-20 bg-[url('/portfolio-background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side: About Matter Card and Metrics */}
          <div className="space-y-6 min-h-[400px] flex flex-col justify-between">
            <div className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 flex-1">
              <p className="text-foreground text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutText }}></p>
            </div>
            {/* Metrics Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                  <p className="text-2xl font-bold text-foreground">{stat.number}{stat.suffix}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Education Card and Skill Boxes */}
          <div className="space-y-6 min-h-[400px] flex flex-col justify-between">
            <div className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Education - </h3>
                  <h4 className="text-xl font-semibold text-foreground">B.Tech in Computer Science</h4>
                  <p className="text-primary font-medium">Aditya College of Engineering and Technology</p>
                  <p className="text-muted-foreground">CGPA: 8.0</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">2022-2026</span>
              </div>
            </div>
            {/* Skill Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-effect p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                <Monitor className="h-12 w-12 mx-auto text-primary mb-2" />
                <p className="text-foreground">Web Development</p>
              </div>
              <div className="glass-effect p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                <Smartphone className="h-12 w-12 mx-auto text-primary mb-2" />
                <p className="text-foreground">Mobile Apps</p>
              </div>
              <div className="glass-effect p-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                <Server className="h-12 w-12 mx-auto text-primary mb-2" />
                <p className="text-foreground">Cloud Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;