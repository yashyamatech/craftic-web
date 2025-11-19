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
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: HiShieldCheck,
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security measures to protect your data and ensure reliability.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: HiUserGroup,
      title: 'Expert Team',
      description:
        'Highly skilled developers and designers with years of industry experience.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: HiChip,
      title: 'Latest Technology',
      description:
        'Utilizing cutting-edge technologies and frameworks for modern solutions.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: HiClock,
      title: '24/7 Support',
      description:
        'Round-the-clock technical support to ensure your systems run smoothly.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: HiSupport,
      title: 'Dedicated Service',
      description:
        'Personalized attention and customized solutions tailored to your needs.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">Craftic</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <feature.icon className="text-white" size={32} />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 -z-10`}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  style={{ padding: '2px' }}
                />
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
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to bring your vision to life with our
              expertise and cutting-edge technology.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
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
