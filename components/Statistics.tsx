'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import {
  HiUserGroup,
  HiLightningBolt,
  HiTrendingUp,
  HiGlobe,
} from 'react-icons/hi';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const Statistics = () => {
  const stats: StatItem[] = [
    {
      icon: HiUserGroup,
      value: 250,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-blue-700 to-cyan-600',
    },
    {
      icon: HiLightningBolt,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-cyan-600 to-emerald-600',
    },
    {
      icon: HiTrendingUp,
      value: 98,
      suffix: '%',
      label: 'Success Rate',
      color: 'from-emerald-600 to-blue-700',
    },
    {
      icon: HiGlobe,
      value: 30,
      suffix: '+',
      label: 'Countries Served',
      color: 'from-blue-600 to-cyan-500',
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
            Our Impact in <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We take pride in delivering exceptional results that speak for
            themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  stat,
  index,
}: {
  stat: StatItem;
  index: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-[#1a1f2e] border border-white/5 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-cyan-400/50 transition-all duration-300">
        <div className="relative z-10">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
          >
            <stat.icon className="text-white" size={32} />
          </div>

          <div className="text-5xl font-bold mb-2 font-mono">
            <span className="gradient-text">
              {count}
              {stat.suffix}
            </span>
          </div>

          <div className="text-slate-400 font-medium">
            {stat.label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;
