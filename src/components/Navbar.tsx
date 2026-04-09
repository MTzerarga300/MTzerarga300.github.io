import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Internships', href: '#internships' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-heading font-bold tracking-tighter flex items-center gap-2 text-white group">
          <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          <span>ZERARGA<span className="text-cyan-500">.M.T</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span className="text-slate-600 mr-1">/</span>{link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-slate-800 mx-2"></div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com/MTzerarga300" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-tayeb-zerarga/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-mono text-slate-300 hover:text-cyan-400"
                >
                  <span className="text-slate-600 mr-2">&gt;</span>{link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-slate-800 text-slate-400 mt-2">
                <a href="https://github.com/MTzerarga300" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-tayeb-zerarga/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:mtayeb300@gmail.com" className="hover:text-cyan-400">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
