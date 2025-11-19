'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight, HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';

const Hero = () => {
  const floatingIcons = [
    { Icon: HiCode, delay: 0, top: '20%', left: '10%' },
    { Icon: HiLightningBolt, delay: 0.2, top: '60%', left: '15%' },
    { Icon: HiSparkles, delay: 0.4, top: '30%', right: '10%' },
    { Icon: HiCode, delay: 0.6, top: '70%', right: '20%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-500/20 dark:text-blue-400/10"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            <item.Icon size={60} />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-6">
                Welcome to Craftic
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="gradient-text">Innovative Software</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We build cutting-edge software solutions that drive growth,
              enhance efficiency, and deliver exceptional digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center"
              >
                Get Started
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 font-semibold"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { value: '500+', label: 'Projects' },
                { value: '250+', label: 'Clients' },
                { value: '98%', label: 'Success Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Animated circles */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute inset-8 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full opacity-20"
                animate={{
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute inset-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                >
                  <HiCode className="text-white" size={64} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-white dark:fill-slate-950"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
