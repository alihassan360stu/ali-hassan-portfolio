'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Award, Briefcase, Users, Zap, CheckCircle, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { personalInfo } from '@/data/personal'
import HeroBackground from '@/components/HeroBackground'

const About = () => {
  const reducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const motionEnabled = !reducedMotion && !isMobile

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

  const highlights = [
    'Automation systems that reduce manual work and improve reliability',
    'Clean, scalable full‑stack apps with modern UI and performance focus',
    'Production-ready delivery: observability, security, maintainability',
    'Clear communication and a product-first mindset'
  ]

  const focusAreas = ['Automation', 'SaaS', 'Dashboards', 'APIs', 'Scraping', 'CI/CD']

  return (
    <section id="about" className="section-padding relative overflow-hidden pb-12 md:pb-16 scroll-mt-24 md:scroll-mt-28">
      <HeroBackground />
      {/* Content */}
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-14"
          variants={motionEnabled ? containerVariants : undefined}
          initial={motionEnabled ? 'hidden' : false}
          whileInView={motionEnabled ? 'visible' : undefined}
          viewport={motionEnabled ? { once: true, margin: '-100px' } : undefined}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6"
            variants={motionEnabled ? itemVariants : undefined}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            variants={motionEnabled ? itemVariants : undefined}
          />
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 sm:text-gray-400 max-w-3xl mx-auto mt-5 sm:mt-6 leading-relaxed"
            variants={motionEnabled ? itemVariants : undefined}
          >
            Passionate automation engineer and full-stack developer with expertise in building scalable solutions
          </motion.p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="mb-10 sm:mb-12 md:mb-14"
          variants={motionEnabled ? containerVariants : undefined}
          initial={motionEnabled ? 'hidden' : false}
          whileInView={motionEnabled ? 'visible' : undefined}
          viewport={motionEnabled ? { once: true, margin: '-100px' } : undefined}
        >
          <Card glass className="p-6 sm:p-8 md:p-12 overflow-hidden">
            <CardContent className="space-y-8 sm:space-y-10">
              <motion.div variants={motionEnabled ? itemVariants : undefined} className="relative">
                <div className="absolute inset-0 -m-12 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
                <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                      Professional Summary
                    </h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {personalInfo.intro}
                    </p>

                    <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                      {focusAreas.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white/5 border border-white/10 text-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6">
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                      Highlights
                    </h4>
                    <ul className="space-y-3">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Expertise Areas */}
              <motion.div variants={motionEnabled ? itemVariants : undefined}>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5 sm:mb-8">
                  Expertise Focus
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {expertise.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={index}
                        variants={motionEnabled ? itemVariants : undefined}
                        whileHover={motionEnabled ? { scale: 1.05 } : undefined}
                        transition={motionEnabled ? { duration: 0.2 } : { duration: 0 }}
                      >
                        <Card glass className="h-full p-5 sm:p-6">
                          <CardContent className="space-y-4">
                            <motion.div
                              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                              whileHover={motionEnabled ? { scale: 1.1, rotate: 5 } : undefined}
                              transition={motionEnabled ? { duration: 0.2 } : { duration: 0 }}
                            >
                              <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
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
          className="mb-14 hidden md:block"
          variants={motionEnabled ? containerVariants : undefined}
          initial={motionEnabled ? 'hidden' : false}
          whileInView={motionEnabled ? 'visible' : undefined}
          viewport={motionEnabled ? { once: true, margin: '-100px' } : undefined}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={motionEnabled ? itemVariants : undefined}>
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
          variants={motionEnabled ? containerVariants : undefined}
          initial={motionEnabled ? 'hidden' : false}
          whileInView={motionEnabled ? 'visible' : undefined}
          viewport={motionEnabled ? { once: true, margin: '-100px' } : undefined}
        >
          <Card glass className="p-8 md:p-12">
            <CardContent className="space-y-8">
              <motion.div variants={motionEnabled ? itemVariants : undefined} className="text-center">
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
                    icon: Zap,
                    color: 'from-blue-500 to-purple-600',
                    title: 'Fast Delivery',
                    description: 'Rapid development with clean, maintainable code that scales with your business needs.',
                  },
                  {
                    icon: Target,
                    color: 'from-emerald-500 to-teal-600',
                    title: 'Ownership & reliability',
                    description: 'I take full ownership of features — from design, to implementation, to production hardening.'
                  },
                  {
                    icon: Lightbulb,
                    color: 'from-orange-500 to-pink-600',
                    title: 'Clear communication',
                    description: 'Regular updates, clear trade-offs, and fast iteration cycles.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={motionEnabled ? itemVariants : undefined}
                    whileHover={motionEnabled ? { scale: 1.05 } : undefined}
                    transition={motionEnabled ? { duration: 0.2 } : { duration: 0 }}
                  >
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                      whileHover={motionEnabled ? { scale: 1.1, rotate: 5 } : undefined}
                      transition={motionEnabled ? { duration: 0.2 } : { duration: 0 }}
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
