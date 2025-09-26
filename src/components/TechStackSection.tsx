const TechStackSection = () => {
  const technologies = [
    { name: "C", color: "from-blue-400 to-blue-600", bgColor: "bg-slate-800", icon: "/images/c-icon.png" },
    { name: "C++", color: "from-blue-400 to-blue-600", bgColor: "bg-slate-800", icon: "/images/cpp-icon.png" },
    { name: "Java", color: "from-blue-400 to-blue-600", bgColor: "bg-slate-800", icon: "/images/java-icon.png" },
    { name: "Python", color: "from-yellow-400 to-yellow-600", bgColor: "bg-slate-800", icon: "/images/python-icon.png" },
    { name: "ReactJS", color: "from-cyan-400 to-cyan-600", bgColor: "bg-slate-800", icon: "/images/react-icon.png" },
    { name: "NodeJS", color: "from-green-400 to-green-600", bgColor: "bg-slate-800", icon: "/images/node-icon.png" },
    { name: "MongoDB", color: "from-green-500 to-green-700", bgColor: "bg-slate-800", icon: "/images/mongo-icon.png" },
    { name: "HTML5", color: "from-orange-400 to-orange-600", bgColor: "bg-slate-800", icon: "/images/html-icon.png" },
    { name: "CSS3", color: "from-blue-400 to-blue-600", bgColor: "bg-slate-800", icon: "/images/css-icon.png" },
    { name: "Git", color: "from-orange-400 to-orange-600", bgColor: "bg-slate-800", icon: "/images/git-icon.png" },
    { name: "GitHub", color: "from-gray-400 to-gray-600", bgColor: "bg-slate-800", icon: "/images/github-icon.png" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600", bgColor: "bg-slate-800", icon: "/images/js-icon.png" },
    { name: "Rest API", color: "from-indigo-400 to-indigo-600", bgColor: "bg-slate-800", icon: "/images/api-icon.png" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden text-center"
            >
              <div className={`${tech.bgColor} p-6 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 flex items-center justify-center h-24`}>
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="mt-2 text-foreground text-sm font-medium transition-opacity duration-300 group-hover:opacity-100">
                {tech.name}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;