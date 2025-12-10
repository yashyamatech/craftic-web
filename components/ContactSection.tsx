'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email Us',
      content: 'info@craftic.com',
      link: 'mailto:info@craftic.com',
      color: 'from-blue-700 to-cyan-600',
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-cyan-600 to-emerald-600',
    },
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      link: '#',
      color: 'from-emerald-600 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help you
            achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#1a1f2e] rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-cyan-400/50 transition-all duration-300 border border-white/5 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {info.title}
                </h3>
                <p className="text-slate-400">
                  {info.content}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-[#1a1f2e] rounded-3xl p-8 md:p-12 border border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1419] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-white placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f1419] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-white placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 text-slate-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0f1419] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all text-white placeholder-slate-500"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#0f1419] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all resize-none text-white placeholder-slate-500"
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 gradient-bg text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-900/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <HiPaperAirplane className="rotate-45" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
