import { motion } from 'motion/react';
import { Award, Database, Shield, Cloud, Cpu, Network, Code } from 'lucide-react';

const certs = [
  {
    id: 1,
    title: 'OCI Oracle',
    issuer: 'Oracle',
    icon: Database,
    image: 'https://brm-workforce.oracle.com/pdf/certview/images/OCI25FNDCFAV1.png',
    color: 'from-red-500/20 to-red-900/20',
    borderColor: 'group-hover:border-red-500/50'
  },
  {
    id: 2,
    title: 'HCIA-Security',
    issuer: 'Huawei',
    icon: Shield,
    image: 'https://kltstaticcontent.shixizhi.huawei.com/1365189427395223554/certificate/20250725/0d3a1067fa5c4e6bbbe2b7fbbbea0815_EBG20250725000002be4d8a8852204c8ca48b1eac439732e0.png',
    color: 'from-red-500/20 to-slate-900/20',
    borderColor: 'group-hover:border-red-500/50'
  },
  {
    id: 3,
    title: 'HCIA-Datacom',
    issuer: 'Huawei',
    icon: Network,
    image: 'https://kltstaticcontent.shixizhi.huawei.com/1365189427395223554/certificate/20250713/c53b9a3ce7e44cea98803a282a2c9987_EBG202507130169876b352836a7ed4f70837651cbbcae0e06.png',
    color: 'from-red-500/20 to-slate-900/20',
    borderColor: 'group-hover:border-red-500/50'
  },
  {
    id: 4,
    title: 'HCIA-Cloud Computing',
    issuer: 'Huawei',
    icon: Cloud,
    image: 'https://kltstaticcontent.shixizhi.huawei.com/1365189427395223554/certificate/20250725/1cade45085e04ace8431aabc9096d7bd_20250725000685a5ee6f0117bb436dbbeec43c51dc5ad7.png',
    color: 'from-red-500/20 to-slate-900/20',
    borderColor: 'group-hover:border-red-500/50'
  },
  {
    id: 5,
    title: 'HCIA-AI Overview',
    issuer: 'Huawei',
    icon: Cpu,
    image: 'https://kltstaticcontent.shixizhi.huawei.com/1365189427395223554/certificate/20250526/e364ab96073a4438aef6fa0219ff5508_ICT202505190521639857b72e223543e69069d79431b2aa89.png',
    color: 'from-red-500/20 to-slate-900/20',
    borderColor: 'group-hover:border-red-500/50'
  },
  {
    id: 6,
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    icon: Code,
    image: 'assets/certifications/freecodecamp-frontend-cert.png',
    color: 'from-slate-500/20 to-slate-900/20',
    borderColor: 'group-hover:border-slate-500/50'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-cyan-400 text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Certifications
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 ${cert.borderColor} transition-all duration-300 flex flex-col relative`}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800 p-4">
                <div className="w-full h-full border border-dashed border-slate-600 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:border-slate-500 transition-colors">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute inset-0 object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors"></div>
                </div>
              </div>
              
              <div className="p-6 relative z-10 bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <cert.icon className="w-5 h-5 text-cyan-500" />
                  <span className="text-sm font-mono text-cyan-400">{cert.issuer}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
