'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Briefcase, Users, Zap, CheckCircle, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { personalInfo } from '@/data/personal'
import HeroBackground from '@/components/HeroBackground'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const expertise = [
    {
      icon: Zap,
      title: 'Automation Excellence',
      description: 'Specialized in building comprehensive automation systems that reduce manual effort and improve operational efficiency by up to 85%.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'SaaS Development',
      description: 'Expert in developing scalable multi-tenant SaaS platforms with modern architecture patterns and enterprise-grade security.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Lightbulb,
      title: 'Enterprise Solutions',
      description: 'Proven track record of delivering production systems for banks and large-scale applications with 99.9% uptime and compliance.',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const stats = [
    {
      icon: Briefcase,
      label: 'Years Experience',
      value: '4+',
      description: 'In automation & web development'
    },
    {
      icon: Users,
      label: 'Enterprise Clients',
      value: '50+',
      description: 'Successfully served'
    },
    {
      icon: Zap,
      label: 'Projects Completed',
      value: '100+',
      description: 'Automation solutions delivered'
    },
    {
      icon: Award,
      label: 'Success Rate',
      value: '99.5%',
      description: 'Client satisfaction'
    }
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <HeroBackground />
      {/* Content */}
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed"
            variants={itemVariants}
          >
            Passionate automation engineer and full-stack developer with expertise in building scalable solutions
          </motion.p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card glass className="p-8 md:p-12">
            <CardContent className="space-y-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Professional Summary
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {personalInfo.intro}
                </p>
              </motion.div>

              {/* Expertise Areas */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Expertise Focus
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {expertise.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card glass className="h-full p-6">
                          <CardContent className="space-y-4">
                            <motion.div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon className="h-8 w-8 text-white" />
                            </motion.div>
                            <h4 className="text-xl font-semibold text-white mb-3">
                              {item.title}
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card glass className="h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <motion.div
                      className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <stat.icon className="h-8 w-8 text-blue-400" />
                    </motion.div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Work With Me */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card glass className="p-8 md:p-12">
            <CardContent className="space-y-8">
              <motion.div variants={itemVariants} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Work With Me
                </h3>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  I bring a unique combination of technical expertise and business understanding to deliver exceptional results
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Fast Delivery',
                    description: 'Rapid development with clean, maintainable code that scales with your business needs.',
                    icon: Zap,
                    color: 'from-blue-500 to-purple-600'
                  },
                  {
                    title: 'Quality Focused',
                    description: 'Enterprise-grade solutions with comprehensive testing and security best practices.',
                    icon: Award,
                    color: 'from-green-500 to-emerald-600'
                  },
                  {
                    title: 'Client Partnership',
                    description: 'Collaborative approach with transparent communication and ongoing support.',
                    icon: Users,
                    color: 'from-orange-500 to-red-600'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About
