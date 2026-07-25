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

    const emailTo = 'manojgowdamanu005@gmail.com';
    const emailSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${emailSubject}&body=${emailBody}`;

    try {
      // 1. Log message to backend API silently if running
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error('Contact form submission error:', err);
    }

    // 2. Open Gmail composer window directly with pre-filled details
    window.open(gmailUrl, '_blank');

    setStatus({
      loading: false,
      success: 'Opening Email Composer... Your message details have been pre-filled!',
      error: null,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 flex items-center justify-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-cyan-400" /> // GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Send an <span className="gradient-text">Email Message</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Have a project in mind or an opportunity? Fill out the form below to send an email directly!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-4 rounded-full" />
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
                <Sparkles className="w-6 h-6 text-cyan-400" /> Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email Address */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=manojgowdamanu005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 transition-all group shadow-[0_0_20px_rgba(0,242,254,0.15)]"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold block">PRIMARY EMAIL</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors break-all block">
                      manojgowdamanu005@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct Card */}
                <a
                  href="https://wa.me/918971751923?text=Hi%20BS%20Manoj%20Gowda,%20I'm%20reaching%20out%20from%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 block">WHATSAPP CHAT</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors block">
                      +91 8971751923
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918971751923"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-colors group"
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
              <span>RESPONSE TIME</span>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                WITHIN 24 HOURS
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Email Form */}
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
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 text-sm transition-all"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 text-sm transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 text-sm transition-all resize-none"
                />
              </div>

              {/* Feedback Alerts */}
              {status.success && (
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-cyan-400" />
                  <span>{status.success}</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Email Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-slate-950 font-bold text-sm hover:opacity-95 shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
              >
                {status.loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                    Opening Email Composer...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" /> Send Message via Email
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

