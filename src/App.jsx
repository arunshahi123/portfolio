import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code, Database, Globe, Zap, Users, Coffee, Download, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText('');
            setIsTyping(true);
          }, 2000);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [displayText, isTyping]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'React', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'JavaScript', level: 95, icon: <Globe className="w-5 h-5" /> },
    { name: 'Python', level: 30, icon: <Zap className="w-5 h-5" /> },
   
    { name: 'UI/UX Design', level: 70, icon: <Users className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: "Demo Resturant platform",
      description: "A demo version of an resturant webpage which only include frontend only ",
      tech: ["HTML", "CSS","js"],
      image: "r.png",
      github: "https://github.com/arunshahi123/resturent",
      live: "https://arunshahi123.github.io/resturent/"
    },
    {
      title: "Demo food ordering platform",
      description: "A simple and intuitive online platform where users can browse menus, customize meals, and place orders from local restaurants — all in one place. Built for fast, secure, and delicious experiences.",
      tech: ["React", "Socket.io", "PostgreSQL", "TypeScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather app with location-based forecasts",
      tech: ["React", "Weather API", "Chart.js", "CSS3"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Arun Shahi
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <img 
              src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/462515695_561973029728845_5675695547073575097_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=7eXarS0kpGAQ7kNvwHyhGWn&_nc_oc=Adl8xTj32GAL80996JehT9RDcR4ABsv9_3bGHA9dPG4baP_SBDv-Z5qZsaAimk26LFbz45BvTxX2sib2AaKyJLQM&_nc_zt=24&_nc_ht=scontent.fktm8-1.fna&_nc_gid=hOIConHGU8vPGHU-X573PA&oh=00_AfQTSxLHvWUv7AfMYu7XEOvzess_hGCbUoRg8EowpzvpMg&oe=687BEF51" 
              alt="Arun Shahi" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500/50 shadow-xl"
            />
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Arun Shahi
            </h1>
            <div className="text-2xl md:text-3xl text-purple-300 mb-8 h-10">
              {displayText}<span className="animate-pulse">|</span>
            </div>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Crafting digital experiences with code, creativity, and passion. 
              Turning complex problems into elegant solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:scale-105 transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">
                    <Code className="inline mr-2" />
                    My Coding Journey
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Like debugging a complex algorithm, my journey began with curiosity and evolved through persistent problem-solving. Each project is a new function to optimize, every challenge a bug to resolve with elegance.
                  </p>
                  <p className="text-gray-300 mb-4">
                    I believe in writing clean, maintainable code that scales - much like building a robust architecture that can handle any load. My approach combines technical precision with creative innovation.
                  </p>
                  <div className="flex items-center gap-4 text-purple-300">
                    <Coffee className="w-5 h-5" />
                    <span>Fueled by coffee and driven by code</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold mb-3 text-pink-400">
                    <Database className="inline mr-2" />
                    Technical Philosophy
                  </h4>
                  <p className="text-gray-300 text-sm">
                    "Code is poetry in motion - every function tells a story, every variable holds meaning, and every algorithm solves a piece of the human puzzle."
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold mb-3 text-blue-400">
                    <Users className="inline mr-2" />
                    Collaboration Style
                  </h4>
                  <p className="text-gray-300 text-sm">
                    I thrive in collaborative environments where ideas merge like well-designed APIs - seamless, efficient, and creating something greater than the sum of their parts.
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold mb-3 text-green-400">
                    <Zap className="inline mr-2" />
                    Innovation Mindset
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Always exploring the latest technologies while maintaining backward compatibility with proven solutions. Innovation without stability is just chaos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">{skill.icon}</span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 px-4 py-2 rounded-lg transition-all text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-pink-500/40 hover:bg-pink-500/50 px-4 py-2 rounded-lg transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  Ready to collaborate on your next project? I'm always excited to work on new challenges and bring innovative ideas to life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-400">arunshahi677@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-400">+977 9765433429</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-400">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button className="w-12 h-12 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-all">
                    <Github className="w-6 h-6" />
                  </button>
                  <button className="w-12 h-12 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-all">
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button className="w-12 h-12 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-all">
                    <Twitter className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                    onClick={() => alert('Thank you for your message! I\'ll get back to you soon.')}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Arun Shahi. Crafted with <span className="text-purple-400">❤️</span> and React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
