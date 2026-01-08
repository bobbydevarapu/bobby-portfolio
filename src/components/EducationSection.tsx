const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">B.Tech in Computer Science and Engineering</h3>
                <p className="text-primary font-medium mt-1">Aditya College of Engineering and Technology</p>
                <p className="text-muted-foreground mt-2">Kakinada, Andhra Pradesh</p>
                <p className="text-muted-foreground mt-1">CGPA: 8.33 / 10</p>
              </div>
              <div className="mt-4 md:mt-0 text-sm text-muted-foreground">2022 - 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
