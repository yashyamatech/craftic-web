'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight, HiCode, HiLightningBolt, HiSparkles, HiChip } from 'react-icons/hi';

const Hero = () => {
  const floatingIcons = [
    { Icon: HiCode, delay: 0, top: '15%', left: '8%' },
    { Icon: HiLightningBolt, delay: 0.2, top: '65%', left: '12%' },
    { Icon: HiSparkles, delay: 0.4, top: '25%', right: '10%' },
    { Icon: HiChip, delay: 0.6, top: '75%', right: '15%' },
  ];

  // 3D geometric shapes for minimal futuristic design
  const geometricShapes = [
    { size: 60, delay: 0, top: '20%', left: '5%', rotation: 45 },
    { size: 40, delay: 0.3, top: '60%', left: '8%', rotation: 30 },
    { size: 50, delay: 0.6, top: '30%', right: '5%', rotation: 60 },
    { size: 35, delay: 0.9, top: '70%', right: '10%', rotation: 15 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af15_1px,transparent_1px),linear-gradient(to_bottom,#1e40af15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* 3D Floating Geometric Shapes - Minimal Futuristic */}
        {geometricShapes.map((shape, index) => (
          <motion.div
            key={`shape-${index}`}
            className="absolute"
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              left: shape.left,
              right: shape.right,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [shape.rotation, shape.rotation + 180, shape.rotation + 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-full h-full bg-gradient-to-br from-blue-700/20 to-emerald-600/20 border border-emerald-500/20 backdrop-blur-sm"
              style={{
                transform: 'rotateX(45deg) rotateZ(45deg)',
                transformStyle: 'preserve-3d',
              }}
            />
          </motion.div>
        ))}

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-emerald-500/10"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            <item.Icon size={80} />
          </motion.div>
        ))}

        {/* Gradient Orbs with Pulse Effect */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
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
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-700/30 to-emerald-600/30 border border-emerald-500/30 text-emerald-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm shimmer">
                Welcome to Craftic
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="gradient-text">Innovative Software</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
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
                className="cta-button group px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center"
              >
                Get Started
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-[#1a1f2e] border border-white/10 text-slate-300 rounded-xl hover:shadow-xl hover:border-emerald-400 hover:bg-[#1e2532] transition-all duration-300 font-semibold"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats with Enhanced Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { value: '500+', label: 'Projects' },
                { value: '250+', label: 'Clients' },
                { value: '98%', label: 'Success' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - 3D Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* 3D Animated circles with emerald theme */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-emerald-600/20 rounded-full border border-emerald-500/20 shadow-refined-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                style={{
                  transform: 'rotateX(10deg)',
                  transformStyle: 'preserve-3d',
                }}
              />
              <motion.div
                className="absolute inset-8 bg-gradient-to-br from-emerald-600/20 to-blue-700/20 rounded-full border border-blue-500/20 shadow-refined"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                style={{
                  transform: 'rotateY(10deg)',
                  transformStyle: 'preserve-3d',
                }}
              />
              <motion.div
                className="absolute inset-16 bg-gradient-to-br from-blue-600/30 to-emerald-500/30 rounded-full border border-emerald-400/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                style={{
                  transform: 'rotateZ(45deg)',
                  transformStyle: 'preserve-3d',
                }}
              />
              {/* Center icon with 3D effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 gradient-bg rounded-3xl flex items-center justify-center shadow-refined-lg card-3d"
                  animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 10, 0],
                  }}
                  transition={{
                    rotateY: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    rotateX: {
                      duration: 6,
                      repeat: Infinity,
                    },
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <HiCode className="text-white" size={64} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator - Dark Theme */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0a0e1a"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
