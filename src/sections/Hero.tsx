'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Zap, User } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { personalInfo } from '@/data/personal'

const Hero = () => {
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-0">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Additional floating elements */}
          <motion.div
            className="absolute top-3/4 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-yellow-500/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <motion.div
        className="container-padding relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
            />
            <span className="text-sm font-medium">Available for Projects</span>
          </motion.div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 flex items-center justify-center shadow-2xl shadow-purple-500/25 border-2 border-white/10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <User className="h-16 w-16 md:h-20 md:w-20 text-white" />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Hi, I'm {personalInfo.name.split(' ')[0]}
            </span>
          </h1>
          <motion.div
            className="flex items-center justify-center gap-2 text-xl md:text-2xl lg:text-3xl text-gray-300"
            variants={itemVariants}
          >
            <Sparkles className="h-6 w-6 text-yellow-400" />
            <span className="font-medium">{personalInfo.title}</span>
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          variants={itemVariants}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all duration-200"
          >
            <Code className="mr-2 h-5 w-5" />
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="#contact"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold transition-all duration-200"
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Talk
          </Button>
          <Button
            variant="outline"
            size="lg"
            href={personalInfo.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="border-white/20 text-white hover:bg-white/10 font-semibold transition-all duration-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10"
          variants={itemVariants}
        >
          {[
            { label: 'Years Experience', value: '4+', icon: Zap },
            { label: 'Projects Delivered', value: '25+', icon: Code },
            { label: 'Happy Clients', value: '99%', icon: Sparkles },
            { label: 'Technologies', value: '30+', icon: Code }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-white to-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
