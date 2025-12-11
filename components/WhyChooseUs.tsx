'use client';

import { motion } from 'framer-motion';
import {
  HiLightningBolt,
  HiShieldCheck,
  HiUserGroup,
  HiChip,
  HiClock,
  HiSupport,
} from 'react-icons/hi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: HiLightningBolt,
      title: 'Fast Development',
      description:
        'Rapid development cycles with agile methodology to deliver your projects on time.',
      color: 'from-blue-700 to-emerald-600',
    },
    {
      icon: HiShieldCheck,
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security measures to protect your data and ensure reliability.',
      color: 'from-emerald-600 to-blue-600',
    },
    {
      icon: HiUserGroup,
      title: 'Expert Team',
      description:
        'Highly skilled developers and designers with years of industry experience.',
      color: 'from-blue-600 to-emerald-500',
    },
    {
      icon: HiChip,
      title: 'Latest Technology',
      description:
        'Utilizing cutting-edge technologies and frameworks for modern solutions.',
      color: 'from-emerald-500 to-blue-700',
    },
    {
      icon: HiClock,
      title: '24/7 Support',
      description:
        'Round-the-clock technical support to ensure your systems run smoothly.',
      color: 'from-blue-700 to-emerald-600',
    },
    {
      icon: HiSupport,
      title: 'Dedicated Service',
      description:
        'Personalized attention and customized solutions tailored to your needs.',
      color: 'from-emerald-600 to-blue-600',
    },
  ];

  return (
    <section className="py-20 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Craftic</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver
            exceptional software solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="card-3d bg-[#1a1f2e] border border-white/5 rounded-2xl p-8 hover:shadow-refined-lg hover:border-emerald-400/50 transition-all duration-300 h-full overflow-hidden backdrop-minimal">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-refined`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <feature.icon className="text-white" size={32} />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block gradient-bg rounded-3xl p-8 md:p-12 shadow-refined-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s work together to bring your vision to life with our
              expertise and cutting-edge technology.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:shadow-refined transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
