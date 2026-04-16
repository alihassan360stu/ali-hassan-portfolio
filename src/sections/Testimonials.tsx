'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO at FinTech Solutions',
      content: 'Ali built an incredible automation platform that transformed our operations. His expertise in workflow automation and attention to detail is outstanding. We reduced manual processing by 85% and improved accuracy significantly.',
      rating: 5,
      company: 'FinTech Solutions'
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager at DataFlow Inc',
      content: 'Working with Ali was a game-changer for our product. He delivered a scalable SaaS dashboard that exceeded our expectations. His technical skills and problem-solving abilities are top-notch.',
      rating: 5,
      company: 'DataFlow Inc'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Engineering Lead at CloudBank',
      content: 'Ali\'s automation systems revolutionized our testing processes. He built comprehensive test automation frameworks that saved us countless hours and improved our code quality. Highly recommended!',
      rating: 5,
      company: 'CloudBank'
    },
    {
      name: 'David Kim',
      position: 'CEO at StartupHub',
      content: 'Ali developed our core web automation platform with exceptional quality. His ability to understand complex requirements and deliver robust solutions is impressive. A true professional.',
      rating: 5,
      company: 'StartupHub'
    },
    {
      name: 'Lisa Thompson',
      position: 'Operations Director at LogisticsPro',
      content: 'The workflow automation system Ali built for us transformed our entire operation. His expertise in enterprise-level solutions and commitment to excellence made all the difference.',
      rating: 5,
      company: 'LogisticsPro'
    },
    {
      name: 'James Wilson',
      position: 'VP Engineering at TechScale',
      content: 'Ali\'s work on our digital wallet application was exceptional. He delivered a secure, scalable solution that handles millions of transactions. His technical expertise is remarkable.',
      rating: 5,
      company: 'TechScale'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-900">
      <div className="container-padding">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            What clients say about working with me on automation and web development projects.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card glass className="h-full">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Quote className="h-6 w-6 text-primary-400" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.position}
                      </div>
                      <div className="text-xs text-primary-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Card glass>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Client Satisfaction
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-yellow-400 mb-2">5.0</div>
                    <div className="text-white font-medium mb-1">Average Rating</div>
                    <div className="text-gray-400 text-sm">Based on client feedback</div>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-white font-medium mb-1">Client Satisfaction</div>
                    <div className="text-gray-400 text-sm">Would recommend</div>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-white font-medium mb-1">Happy Clients</div>
                    <div className="text-gray-400 text-sm">Successfully served</div>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-purple-400 mb-2">4+ Years</div>
                    <div className="text-white font-medium mb-1">Proven Track Record</div>
                    <div className="text-gray-400 text-sm">Consistent excellence</div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
