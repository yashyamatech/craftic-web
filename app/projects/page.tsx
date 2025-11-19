'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with advanced shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
      tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500',
      link: '#',
    },
    {
      title: 'Healthcare Management System',
      description:
        'Comprehensive healthcare management solution with patient records, appointments, and billing features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'PostgreSQL', 'AWS'],
      color: 'from-green-500 to-emerald-500',
      link: '#',
    },
    {
      title: 'Real Estate Portal',
      description:
        'Modern real estate platform with property listings, virtual tours, and advanced search capabilities.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      color: 'from-purple-500 to-pink-500',
      link: '#',
    },
    {
      title: 'Fintech Mobile App',
      description:
        'Secure mobile banking application with real-time transactions, budgeting tools, and investment tracking.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      tags: ['React Native', 'Node.js', 'Express', 'MongoDB'],
      color: 'from-orange-500 to-red-500',
      link: '#',
    },
    {
      title: 'Learning Management System',
      description:
        'Interactive LMS with course management, video streaming, assessments, and student progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      tags: ['Angular', 'Django', 'PostgreSQL', 'Redis'],
      color: 'from-indigo-500 to-purple-500',
      link: '#',
    },
    {
      title: 'Social Media Analytics',
      description:
        'Advanced analytics platform for social media insights, sentiment analysis, and performance metrics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'TensorFlow'],
      color: 'from-pink-500 to-rose-500',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our
              expertise in delivering innovative software solutions across
              various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-4">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-white font-semibold"
                      >
                        View Project
                        <HiExternalLink />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl">
              <HiCode className="text-white mx-auto mb-6" size={64} />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate to bring your vision to life with our
                expertise and innovative solutions.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
