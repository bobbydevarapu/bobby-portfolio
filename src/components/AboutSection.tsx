import { Monitor, Server } from "lucide-react";

const AboutSection = () => {
  

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          {/* Left Side: About content */}
          <div className="flex flex-col">
            <div className="glass-effect p-4 md:p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <p className="text-foreground text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutText }}></p>
            </div>
          </div>

          {/* Right Side: Skills card */}
          <div className="flex flex-col justify-start gap-4 h-full">
            <div className="glass-effect p-6 md:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 h-full flex items-center">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl text-center">
                  <Monitor className="h-10 w-10 mx-auto text-primary mb-2" />
                  <p className="text-foreground">Web Development</p>
                </div>
                <div className="p-3 rounded-xl text-center">
                  <Server className="h-10 w-10 mx-auto text-primary mb-2" />
                  <p className="text-foreground">Cloud Solutions</p>
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