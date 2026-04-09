import { Github, Linkedin, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-heading font-bold tracking-tighter flex items-center gap-2 text-white mb-2 justify-center md:justify-start">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>ZERARGA<span className="text-cyan-500">.M.T</span></span>
          </a>
          <p className="text-slate-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} ZERARGA Mohamed Tayeb. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-slate-500">
          <a href="https://github.com/MTzerarga300" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-tayeb-zerarga/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
