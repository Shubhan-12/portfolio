import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  Award,
  BookOpen,
  Briefcase,
  User,
  Code2,
  Send,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  CheckCircle2,
  Layers,
  Search,
  Terminal
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  PROJECTS, 
  INTERNSHIP, 
  CERTIFICATES, 
  EDUCATION,
  ACHIEVEMENTS
} from './constants';
import { cn } from './lib/utils';

// --- Components ---

const SectionHeading = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      {Icon && <Icon className="text-emerald-500" size={24} />}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="text-zinc-400 max-w-2xl">{subtitle}</p>}
    <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full" />
  </div>
);

const SkillCard = ({ category, items, icon: Icon, proficiency }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl glass hover:border-emerald-500/50 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-zinc-100">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {items.map((item: string) => (
        <span key={item} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full border border-white/5">
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ project }: { project: any, key?: any }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10 }}
    className="group relative rounded-2xl overflow-hidden glass flex flex-col h-full dark:bg-zinc-900/50 bg-white/50 border border-black/5 dark:border-white/10"
  >
    <div className="aspect-video bg-zinc-800 overflow-hidden relative">
      <img 
        src={project.image || `https://picsum.photos/seed/${project.title}/600/400`} 
        alt={project.title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 flex gap-2">
        {project.tech.slice(0, 2).map((t: string) => (
          <span key={t} className="px-2 py-1 bg-zinc-950/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded border border-white/10">
            {t}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
      <p className="text-zinc-400 text-sm mb-6 line-clamp-3">{project.description}</p>
      
      <div className="mt-auto flex items-center gap-4">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-emerald-400 transition-colors"
        >
          <Github size={14} /> Code
        </a>
        {project.demo && (
          <a 
            href={project.demo} 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const CertificateCard = ({ cert }: { cert: any, key?: any }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass rounded-2xl p-4 flex flex-col gap-4 dark:bg-zinc-900/50 bg-white/50 border border-black/5 dark:border-white/10"
  >
    <div className="aspect-video rounded-xl overflow-hidden bg-zinc-800">
      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
    </div>
    <div>
      <h3 className="font-bold text-zinc-100 mb-1">{cert.title}</h3>
      <p className="text-xs text-zinc-500 mb-4">{cert.issuer} • {cert.date}</p>
      <a 
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 rounded-lg text-xs font-bold transition-all duration-300"
      >
        <ExternalLink size={14} /> View Certificate
      </a>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categories = ['All', 'Mobile', 'Desktop', 'CLI'];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={cn("min-h-screen transition-colors duration-500", isDark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900")}>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className={cn(
              "fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300",
              isDark ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400" : "bg-zinc-900 text-white hover:bg-zinc-800"
            )}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isDark ? "bg-zinc-950/80 backdrop-blur-lg border-b border-white/5" : "bg-white/80 backdrop-blur-lg border-b border-black/5"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-zinc-950 font-black">S</span>
            <span className={cn("hidden sm:block uppercase tracking-widest text-xs font-semibold opacity-80", isDark ? "text-zinc-100" : "text-zinc-900")}>Shubhan Sriram</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn("text-sm font-medium transition-colors", isDark ? "text-zinc-400 hover:text-emerald-400" : "text-zinc-600 hover:text-emerald-600")}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsDark(!isDark)}
              className={cn("p-2 rounded-full transition-colors", isDark ? "hover:bg-white/5 text-zinc-100" : "hover:bg-black/5 text-zinc-900")}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className={cn("p-2 rounded-full transition-colors", isDark ? "text-zinc-100" : "text-zinc-900")}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("p-2", isDark ? "text-zinc-100" : "text-zinc-900")}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn("absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-4 md:hidden", isDark ? "bg-zinc-900 border-white/10" : "bg-white border-black/10")}
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn("text-lg font-medium", isDark ? "text-zinc-300 hover:text-emerald-400" : "text-zinc-700 hover:text-emerald-600")}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/20">
              Available for Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-none">
              SHUBHAN <br />
              <span className="text-gradient">SRIRAM</span>
            </h1>
            <p className={cn("text-xl md:text-2xl font-medium mb-8 max-w-2xl leading-relaxed", isDark ? "text-zinc-400" : "text-zinc-600")}>
              {PERSONAL_INFO.intro}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                View Projects <ChevronRight size={18} />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn("px-8 py-4 font-bold rounded-xl transition-all duration-300 flex items-center gap-2", isDark ? "bg-zinc-900 border border-white/10 text-zinc-100 hover:bg-zinc-800" : "bg-white border border-black/10 text-zinc-900 hover:bg-zinc-50")}
              >
                <Download size={18} /> Download Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-6 text-zinc-500">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    {/* About Section */}
      <section id="about" className={cn("section-padding", isDark ? "bg-zinc-900/30" : "bg-zinc-100")}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="About Me" 
                subtitle="A brief look into my background and passion for software development."
                icon={User}
              />
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                {PERSONAL_INFO.about}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-zinc-900 border border-white/5">
                  <h4 className="text-emerald-500 font-bold text-2xl mb-1">7.38</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Current CGPA</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-white/5">
                  <h4 className="text-emerald-500 font-bold text-2xl mb-1">100+</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">DSA Solved</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 glass rounded-2xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-950">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Coimbatore</h4>
                    <p className="text-xs text-zinc-500">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Technical Arsenal" 
            subtitle="The technologies and tools I use to bring ideas to life."
            icon={Code2}
          />
          
          <div className="grid lg:grid-cols-1 gap-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((skill, idx) => (
                <SkillCard key={idx} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading 
              title="Featured Projects" 
              subtitle="A selection of my recent work across different platforms."
              icon={Terminal}
            />
            
            <div className="flex items-center gap-2 p-1 bg-zinc-900 rounded-xl border border-white/5">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300",
                    activeFilter === cat ? "bg-emerald-500 text-zinc-950" : "text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Experience" 
                subtitle="My professional journey and internships."
                icon={Briefcase}
              />
              
              <div className="relative pl-8 border-l-2 border-zinc-800 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-emerald-500 rounded-full border-4 border-zinc-950" />
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 block">
                    {INTERNSHIP.period}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{INTERNSHIP.title}</h3>
                  <p className="text-zinc-400 font-medium mb-4">{INTERNSHIP.company}</p>
                  <p className="text-zinc-500 leading-relaxed">
                    {INTERNSHIP.description}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading 
                title="Achievements" 
                subtitle="Recognition and milestones in my coding journey."
                icon={Award}
              />
              <div className="space-y-6">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-2xl glass flex gap-4"
                  >
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{ach.title}</h4>
                      <p className="text-zinc-500 text-sm">{ach.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section-padding bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Certifications" 
            subtitle="Professional validations of my skills and knowledge."
            icon={Award}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert) => (
              <CertificateCard key={cert.title} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Education" 
            subtitle="My academic background and qualifications."
            icon={BookOpen}
          />
          
          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-8 rounded-2xl glass flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{edu.school}</h3>
                  <p className="text-emerald-500 font-medium mb-2">{edu.degree}</p>
                  <div className="flex items-center gap-4 text-zinc-500 text-sm">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {edu.period}</span>
                  </div>
                </div>
                <div className="px-6 py-3 bg-zinc-800 rounded-xl border border-white/5 text-center">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold block mb-1">Result</span>
                  <span className="text-xl font-bold text-zinc-100">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
                icon={Mail}
              />
              
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold hover:text-emerald-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Phone</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-bold hover:text-emerald-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-1">Location</p>
                    <p className="text-lg font-bold">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-emerald-500 hover:text-zinc-950 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-emerald-500 hover:text-zinc-950 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell me about your project..."
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>
                <button className="w-full py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-100 font-black">S</span>
            <span className="uppercase tracking-widest text-xs font-semibold opacity-50">Shubhan Sriram</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Shubhan Sriram. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-6 text-zinc-500 text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
