'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiClock, HiUser, HiArrowRight } from 'react-icons/hi';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development in 2025',
      excerpt:
        'Exploring the latest trends and technologies shaping the future of web development, from AI integration to edge computing.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      author: 'Sarah Johnson',
      date: 'Nov 15, 2024',
      readTime: '5 min read',
      category: 'Web Development',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Building Scalable Microservices Architecture',
      excerpt:
        'A comprehensive guide to designing and implementing microservices architecture for modern applications.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      author: 'Michael Chen',
      date: 'Nov 12, 2024',
      readTime: '8 min read',
      category: 'Architecture',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Mastering TypeScript for Enterprise Applications',
      excerpt:
        'Learn advanced TypeScript patterns and best practices for building robust enterprise-grade applications.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
      author: 'Emily Rodriguez',
      date: 'Nov 10, 2024',
      readTime: '6 min read',
      category: 'Programming',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'DevOps Best Practices for 2025',
      excerpt:
        'Essential DevOps practices and tools to streamline your development workflow and improve deployment efficiency.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
      author: 'David Kim',
      date: 'Nov 8, 2024',
      readTime: '7 min read',
      category: 'DevOps',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Mobile-First Design Principles',
      excerpt:
        'Understanding the core principles of mobile-first design and how to create responsive applications.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      author: 'Sarah Johnson',
      date: 'Nov 5, 2024',
      readTime: '5 min read',
      category: 'Design',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Securing Your Web Applications',
      excerpt:
        'A deep dive into web security best practices, from authentication to preventing common vulnerabilities.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      author: 'Michael Chen',
      date: 'Nov 3, 2024',
      readTime: '10 min read',
      category: 'Security',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const categories = [
    'All',
    'Web Development',
    'Architecture',
    'Programming',
    'DevOps',
    'Design',
    'Security',
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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Insights, tutorials, and updates from our team of experts on the
              latest in software development and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute top-4 left-4 px-4 py-1 bg-gradient-to-r ${post.color} text-white rounded-full text-sm font-semibold`}
                    >
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-1">
                        <HiUser size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiClock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {post.date}
                      </span>
                      <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <HiArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Load More Posts
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Get the latest articles, tutorials, and updates delivered
                directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
