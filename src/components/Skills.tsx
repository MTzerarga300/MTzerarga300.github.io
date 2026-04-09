import { motion } from 'motion/react';
import { Globe, Languages, Terminal, Server, ShieldCheck, Cloud } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-cyan-400 text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Skills & Languages
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Terminal className="w-5 h-5 text-cyan-500" />
              Technical Expertise
            </h3>
            
            <div className="space-y-6">
              {[
                { category: 'Networking & Telecom', icon: Server, skills: ['Routing & Switching', 'Network Architecture', 'Datacom', 'Telecommunications Systems'] },
                { category: 'Cybersecurity', icon: ShieldCheck, skills: ['Infrastructure Security', 'Network Security', 'Incident Response', 'Access Control'] },
                { category: 'Cloud & Infrastructure', icon: Cloud, skills: ['Oracle Cloud (OCI)', 'Huawei Cloud', 'System Administration', 'Virtualization'] },
              ].map((group, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <group.icon className="w-5 h-5 text-blue-400" />
                    <h4 className="text-lg font-medium text-slate-200">{group.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-sm font-mono rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Languages className="w-5 h-5 text-cyan-500" />
              Languages
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {/* French */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden group hover:border-cyan-500/50 transition-colors">
                <div className="p-6 border-b border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">French</h4>
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold rounded border border-cyan-500/20">C2 Level</span>
                  </div>
                  <p className="text-sm text-slate-400 font-mono">TCF Certified</p>
                </div>
                <div className="relative aspect-[4/3] bg-slate-800 p-4">
                  <div className="w-full h-full border border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1513297844881-60930c59ef35?q=80&w=800&auto=format&fit=crop" 
                      alt="TCF Certificate" 
                      className="absolute inset-0 object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* English */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden group hover:border-cyan-500/50 transition-colors">
                <div className="p-6 border-b border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">English</h4>
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold rounded border border-cyan-500/20">C2 Level</span>
                  </div>
                  <p className="text-sm text-slate-400 font-mono">EF SET Certified</p>
                </div>
                <div className="relative aspect-[4/3] bg-slate-800 p-4">
                  <div className="w-full h-full border border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop" 
                      alt="EF SET Certificate" 
                      className="absolute inset-0 object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Arabic */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden group hover:border-cyan-500/50 transition-colors p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-cyan-500" />
                    <h4 className="text-xl font-bold text-white">Arabic</h4>
                  </div>
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold rounded border border-cyan-500/20">Native</span>
                </div>
              </div>

              {/* Kabyle */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden group hover:border-cyan-500/50 transition-colors p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-cyan-500" />
                    <h4 className="text-xl font-bold text-white">Kabyle</h4>
                  </div>
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold rounded border border-cyan-500/20">Native</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
