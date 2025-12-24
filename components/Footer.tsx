'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/people/Craftic-Solutions/61581248604804/', label: 'Facebook' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/craftic-solutions', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/crafticsolutions/', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Technologies', href: '/technologies' },
  ];

  const services = [
    { name: 'Web Development', href: '/technologies' },
    { name: 'Mobile Apps', href: '/technologies' },
    { name: 'Cloud Solutions', href: '/technologies' },
    { name: 'Consulting', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0f1419] border-t border-white/5 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/50">
                <span className="text-white font-bold text-xl font-mono">C</span>
              </div>
              <span className="text-xl font-bold text-white font-[Space_Grotesk]">Craftic</span>
            </div>
            <p className="text-sm mb-4 text-slate-400 leading-relaxed">
              Building innovative software solutions that transform businesses
              and drive digital success.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <HiMail className="text-emerald-400" />
                <span className="text-slate-400">crafticsolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <HiPhone className="text-emerald-400" />
                <span className="text-slate-400">+91 9737682010</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <HiLocationMarker className="text-emerald-400" />
                <span className="text-slate-400">Remote Worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4 font-[Space_Grotesk]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4 font-[Space_Grotesk]">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4 font-[Space_Grotesk]">
              Stay Updated
            </h3>
            <p className="text-sm mb-4 text-slate-400 leading-relaxed">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-[#1a1f2e] border border-white/10 rounded-lg focus:outline-none focus:border-emerald-400 text-sm text-white placeholder-slate-500"
              />
              <button className="cta-button w-full px-4 py-2 text-white rounded-lg text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/5 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Craftic. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#1a1f2e] border border-white/5 rounded-lg flex items-center justify-center hover:border-emerald-400 hover:bg-gradient-to-br hover:from-blue-700 hover:to-emerald-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
