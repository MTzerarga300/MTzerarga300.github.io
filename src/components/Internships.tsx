import { motion } from 'motion/react';
import { Network, Server, Calendar, MapPin, Radio } from 'lucide-react';

const internships = [
  {
    id: 1,
    role: 'Network & Systems Intern',
    company: "Direction Générale d'Algérie Télécom",
    location: 'Algiers',
    date: '24/08/2025 to 28/08/2025',
    description: 'Gained hands-on experience in large-scale network infrastructure. Assisted in the administration and monitoring of telecommunications systems, ensuring high availability and security of enterprise networks.',
    skills: ['Network Administration', 'Telecommunications', 'Infrastructure Security'],
    icon: Network,
  },
  {
    id: 2,
    role: 'NOC Engineering Intern',
    company: 'ENSMR-NOC Center',
    location: 'Algiers',
    date: '31/08/2025 to 04/09/2025',
    description: 'Worked within the Network Operations Center (NOC) to monitor, troubleshoot, and resolve network anomalies. Participated in incident response and infrastructure optimization tasks.',
    skills: ['NOC Operations', 'Troubleshooting', 'System Monitoring', 'Incident Response'],
    icon: Server,
  },
  {
    id: 3,
    role: 'Telecommunications Intern',
    company: 'EMRT-Algérie Télécom',
    location: 'Sétif',
    date: 'August 2023',
    description: 'First discovery of the telecommunications field. Gained foundational knowledge of telecom infrastructure, equipment, and daily operations.',
    skills: ['Telecommunications Basics', 'Infrastructure Discovery'],
    icon: Radio,
  }
];

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-cyan-400 text-sm">01.</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Internship Experience
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </div>

        <div className="space-y-8">
          {internships.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    {exp.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-lg text-cyan-400 mb-6 font-medium flex items-center gap-2">
                <exp.icon className="w-5 h-5" />
                {exp.company}
              </p>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
