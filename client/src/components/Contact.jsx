import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    // Format WhatsApp message text
    const phoneNumber = '918971751923';
    const textMessage = `Hi Manoj Gowda!%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Subject:* ${encodeURIComponent(formData.subject || 'Portfolio Contact')}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    try {
      // 1. Log to Express & SQLite/JSON backend silently
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setStatus({
        loading: false,
        success: 'Opening WhatsApp... Your message has been prepared!',
        error: null,
      });

      // 2. Open WhatsApp Web / App directly
      window.open(whatsappUrl, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Even if backend is offline, still open WhatsApp directly!
      window.open(whatsappUrl, '_blank');
      setStatus({
        loading: false,
        success: 'Opening WhatsApp to send your message directly!',
        error: null,
      });
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-2 block flex items-center justify-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-emerald-400" /> // GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">WhatsApp & Email</span> Contact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Fill in your message below and click send to open WhatsApp directly with your formatted message!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-emerald-400" /> Contact Channels
              </h3>

              <div className="space-y-4">
                {/* WhatsApp Direct Card */}
                <a
                  href="https://wa.me/918971751923?text=Hi%20BS%20Manoj%20Gowda,%20I'm%20reaching%20out%20from%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 transition-all group shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold block">DIRECT WHATSAPP</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors block">
                      +91 8971751923 (Click to Chat)
                    </span>
                  </div>
                </a>

                {/* Email Address */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=manojgowdamanu005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block">EMAIL ADDRESS</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors break-all block">
                      manojgowdamanu005@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918971751923"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block">PHONE CALL</span>
                    <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      +91 8971751923
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block">LOCATION</span>
                    <span className="text-sm font-semibold text-white">
                      Karnataka, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Box */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>EXPRESS & WHATSAPP API</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                    Your Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                    Your Email <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 text-sm transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here... Clicking send will open WhatsApp directly with your message!"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 text-sm transition-all resize-none"
                />
              </div>

              {/* Feedback Alerts */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>{status.success}</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* WhatsApp Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-bold text-sm hover:opacity-95 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
              >
                {status.loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" /> Send Message via WhatsApp
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
