'use client';

import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';

const TechnologiesPage = () => {
  const techCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Angular',
        'Vue.js',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        'Node.js',
        'Python',
        'Express',
        'Django',
        'GraphQL',
        'FastAPI',
        'NestJS',
      ],
    },
    {
      title: 'Mobile Development',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
      ],
    },
    {
      title: 'Databases',
      color: 'from-orange-500 to-red-500',
      technologies: [
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Redis',
        'Elasticsearch',
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        'AWS',
        'Google Cloud',
        'Azure',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
      ],
    },
    {
      title: 'Tools & Others',
      color: 'from-pink-500 to-rose-500',
      technologies: [
        'Git',
        'Figma',
        'VS Code',
        'Postman',
        'Jira',
      ],
    },
  ];

  const services = [
    {
      title: 'Web Development',
      description:
        'Full-stack web applications built with modern frameworks and best practices.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile apps for iOS and Android.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and serverless architectures.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'DevOps & CI/CD',
      description:
        'Automated deployment pipelines and infrastructure as code.',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'API Development',
      description:
        'RESTful and GraphQL APIs with comprehensive documentation.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive interfaces that users love to interact with.',
      color: 'from-pink-500 to-rose-500',
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
              Our <span className="gradient-text">Technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build
              scalable, secure, and performant solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <div className="bg-[#0f1419] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center h-full min-h-[120px]">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <HiCode className="text-white" size={28} />
                        </div>
                        <h3 className="text-lg font-semibold text-white text-center">
                          {tech}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive technology services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full">
                  <div
                    className={`w-full h-2 bg-gradient-to-r ${service.color} rounded-full mb-6`}
                  />
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Ready to leverage these technologies for your next project?
                Get in touch with us today.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;
