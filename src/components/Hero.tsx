import { motion } from 'motion/react';
import { ArrowRight, Download, Shield, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Cyber/Cloud Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-6 backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5" />
            <span>ENSTTIC, Oran - 4th Year Engineering Student</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-4">
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQEr2NY7V8lTPA/profile-displayphoto-shrink_400_400/B4EZYwRuU_HgAg-/0/1744566676423?e=1777507200&v=beta&t=oelpXmDZ6TU0qIZ4dopejmHecLc9oGuHAmn64sgKEZo" 
                alt="ZERARGA Mohamed Tayeb" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-tight text-white">
              ZERARGA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Mohamed Tayeb
              </span>
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl font-mono text-slate-400 mb-8 flex items-center gap-3">
            <Cloud className="w-6 h-6 text-blue-400" />
            Telecommunications & ICT Engineering
          </h2>
          
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl border-l-2 border-cyan-500/50 pl-6">
            My long-term professional goal is to become an expert engineer in systems and network infrastructure administration and security, with a specialization in cloud and large-scale network architecture.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#internships"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 rounded-lg font-medium hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              View Experience
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="./cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-cyan-400 border border-cyan-500/30 rounded-lg font-medium hover:bg-slate-800 transition-colors"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden lg:flex flex-col items-center justify-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm"
        >
          <div className="mb-4 text-center">
            <p className="text-sm font-mono text-cyan-400 mb-1">Scan to Download CV</p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.15)] w-[212px] h-[212px] flex items-center justify-center">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://mtzerarga300.github.io/cv.pdf" 
              alt="QR Code to download CV" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Ready
          </div>
        </motion.div>
      </div>
    </section>
  );
}
