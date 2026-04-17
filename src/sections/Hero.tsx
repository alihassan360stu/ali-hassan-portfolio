'use client'

import React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Zap, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { personalInfo } from '@/data/personal'

const Hero = () => {
  const [mounted, setMounted] = React.useState(false)
  const [profileOpen, setProfileOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!profileOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProfileOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [profileOpen])

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
    <section className="min-h-[54vh] md:min-h-screen flex items-start md:items-center justify-center relative overflow-hidden pt-10 sm:pt-12 pb-8 sm:pb-12 md:py-0">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 mt-2 sm:mt-3 mb-6 md:mb-8"
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
        <motion.div variants={itemVariants} className="flex justify-center mb-6 md:mb-8">
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 flex items-center justify-center shadow-2xl shadow-purple-500/25 border-2 border-white/10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              onClick={() => setProfileOpen(true)}
              className="h-full w-full rounded-full overflow-hidden"
              aria-label="Open profile image"
            >
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="h-full w-full rounded-full object-cover"
                loading="eager"
              />
            </button>
          </motion.div>
        </motion.div>

        {mounted &&
          createPortal(
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  className="fixed inset-0 z-[120]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.button
                    type="button"
                    aria-label="Close profile image"
                    className="absolute inset-0 bg-black/85"
                    onClick={() => setProfileOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                      className="relative w-full max-w-md"
                      initial={{ opacity: 0, scale: 0.98, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: 10 }}
                      transition={{ duration: 0.18 }}
                    >
                      <button
                        type="button"
                        onClick={() => setProfileOpen(false)}
                        className="absolute top-3 right-3 z-[130] w-11 h-11 rounded-full bg-black/80 hover:bg-black/90 border border-white/25 backdrop-blur-md shadow-lg shadow-black/60 flex items-center justify-center text-white"
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </button>

                      <div className="rounded-3xl overflow-hidden border border-white/15 bg-black">
                        <img
                          src={personalInfo.avatar}
                          alt={personalInfo.name}
                          className="w-full max-h-[85vh] object-contain"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
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
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-6 sm:mb-8"
          variants={itemVariants}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12"
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
          className="hidden sm:flex justify-center gap-4 mb-12"
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
          className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 mb-3 md:mb-3"
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
              className="text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-3 sm:px-4 sm:py-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm md:text-base text-gray-300 font-semibold leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mb-3 pointer-events-none"
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
