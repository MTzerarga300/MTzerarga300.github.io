import { motion } from 'motion/react';
import { Mail, MapPin, Send, Terminal, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using Formspree as the backend
      const response = await fetch('https://formspree.io/f/xzdknonn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden backdrop-blur-sm"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-4">
              <Terminal className="w-4 h-4" />
              <span>Initiate Connection</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Let's build something together.
            </h2>
            <p className="text-slate-400 mb-8 max-w-md">
              I'm currently looking for new opportunities in systems, network infrastructure, and cloud architecture. Let's connect!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Email</p>
                  <a href="mailto:mtayeb300@gmail.com" className="hover:text-cyan-400 transition-colors">
                    mtayeb300@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Location</p>
                  <p>Oran, Algeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-6 bg-slate-950/50 border border-emerald-500/30 rounded-2xl"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-cyan-400 text-sm font-mono hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none font-mono text-sm"
                  ></textarea>
                </div>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-xs font-mono bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle className="w-4 h-4" />
                    <span>Oops! Something went wrong. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-cyan-500 text-slate-950 font-bold rounded-lg px-4 py-3 flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
