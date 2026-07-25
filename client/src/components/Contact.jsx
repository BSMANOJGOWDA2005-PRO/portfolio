import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Sparkles, MessageSquare, MessageCircle } from 'lucide-react';

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

    window.open(gmailUrl, '_blank');

    setStatus({
      loading: false,
      success: 'Opening Email Composer... Your message details have been pre-filled!',
      error: null,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#d01b1b] text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-white/80 flex items-center justify-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-white" /> // GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Send an Email Message
          </h2>
          <p className="text-lg text-white/90">
            Have a project in mind or an opportunity? Reach out directly!
          </p>
          <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#b5141b]/90 border border-white/20 p-8 rounded-3xl backdrop-blur-md shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-white" /> Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email Address */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=manojgowdamanu005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white/15 text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <span className="text-[11px] font-mono text-white/70 block">PRIMARY EMAIL</span>
                    <span className="text-xs sm:text-sm font-bold text-white break-all block">
                      manojgowdamanu005@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918971751923?text=Hi%20MD%20YUSUF,%20I'm%20reaching%20out%20from%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white/15 text-white group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-white/70 block">WHATSAPP CHAT</span>
                    <span className="text-sm font-semibold text-white block">
                      +91 8971751923
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918971751923"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white/15 text-white group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-white/70 block">PHONE CALL</span>
                    <span className="text-sm font-semibold text-white">
                      +91 8971751923
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20">
                  <div className="p-3 rounded-xl bg-white/15 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-white/70 block">LOCATION</span>
                    <span className="text-sm font-semibold text-white">
                      Bhopal / Karnataka, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-[#b5141b]/90 border border-white/20 p-8 sm:p-10 rounded-3xl shadow-xl backdrop-blur-md space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-white/80 mb-2 uppercase">
                    Your Name <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-white/80 mb-2 uppercase">
                    Your Email <span className="text-white">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-white/80 mb-2 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-white/80 mb-2 uppercase">
                  Message <span className="text-white">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 text-sm transition-all resize-none"
                />
              </div>

              {status.success && (
                <div className="p-4 rounded-xl bg-white/20 border border-white/30 text-white text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-white" />
                  <span>{status.success}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-full bg-white text-[#d01b1b] font-bold text-sm hover:bg-red-50 shadow-xl transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
              >
                {status.loading ? (
                  <>Sending...</>
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
