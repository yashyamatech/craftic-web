'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  HiLightningBolt,
  HiShieldCheck,
  HiHeart,
  HiSparkles,
} from 'react-icons/hi';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: HiLightningBolt,
      title: 'Innovation',
      description:
        'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: HiShieldCheck,
      title: 'Quality',
      description:
        'We maintain the highest standards in every project, ensuring reliability and excellence.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: HiHeart,
      title: 'Customer Focus',
      description:
        'Your success is our success. We prioritize understanding and exceeding client expectations.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: HiSparkles,
      title: 'Excellence',
      description:
        'We strive for perfection in everything we do, from code quality to customer service.',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Craftic</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              We are a passionate team of innovators, designers, and developers
              dedicated to transforming ideas into exceptional digital
              experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-slate-400">
                <p>
                  Founded in 2018, Craftic began with a simple mission: to help
                  businesses leverage technology to achieve their goals. What
                  started as a small team of passionate developers has grown
                  into a full-service software agency.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of working with
                  startups, enterprises, and everything in between. Each project
                  has taught us something new and reinforced our commitment to
                  excellence.
                </p>
                <p>
                  Today, we&apos;re proud to be a trusted partner for businesses
                  worldwide, delivering innovative solutions that drive real
                  results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-slate-400">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#0f1419] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {member.name}
                    </h3>
                    <p className="text-slate-400 mb-4">
                      {member.role}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-[#1a1f2e] border border-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                      >
                        <FaLinkedinIn size={18} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-[#1a1f2e] border border-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                      >
                        <FaTwitter size={18} />
                      </a>
                      <a
                        href={member.social.github}
                        className="w-10 h-10 bg-[#1a1f2e] border border-white/5 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
