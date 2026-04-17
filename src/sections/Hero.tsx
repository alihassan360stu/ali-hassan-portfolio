'use client'

import React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Code, Zap, X, Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import MotionOnDesktop from '@/components/MotionOnDesktop'
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
      <MotionOnDesktop
        as="div"
        className="container-padding relative z-10"
        motionProps={{
          variants: containerVariants,
          initial: 'hidden',
          animate: 'visible',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Badge */}
            <MotionOnDesktop as="div" motionProps={{ variants: itemVariants }}>
              <MotionOnDesktop
                as="div"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 mt-2 sm:mt-3 mb-6 md:mb-8"
                motionProps={{
                  whileHover: { scale: 1.03 },
                  transition: { duration: 0.2 },
                }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for Projects</span>
              </MotionOnDesktop>
            </MotionOnDesktop>

            {/* Main Heading */}
            <MotionOnDesktop as="div" className="mb-5 md:mb-7" motionProps={{ variants: itemVariants }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                  Hi, I'm Ali Hassan
                </span>
              </h1>
              <div className="text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold">
                Full Stack Developer & Automation Engineer
              </div>
            </MotionOnDesktop>

            {/* Tagline */}
            <MotionOnDesktop
              as="p"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light mb-7"
              motionProps={{ variants: itemVariants }}
            >
              I build scalable SaaS platforms, automation systems, and high-performance web applications focused on real-world business impact, scalability, and reliability.
            </MotionOnDesktop>

            <MotionOnDesktop
              as="div"
              className="max-w-3xl mx-auto lg:mx-0 mb-8"
              motionProps={{ variants: itemVariants }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {[
                  '4+ Years Experience in Full Stack Development',
                  'Built Banking Automation System (UBL - 24 Modules)',
                  'SaaS & API Development Experience',
                  'Automation using Java Access Bridge (JAB), Selenium',
                  'React, Next.js, Node.js, TypeScript expert',
                  'n8n automation expert',
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3"
                  >
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-200 font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </MotionOnDesktop>

            {/* CTA Buttons */}
            <MotionOnDesktop
              as="div"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              motionProps={{ variants: itemVariants }}
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
                Get in Touch
              </Button>
            </MotionOnDesktop>

            {/* Social Links */}
            <MotionOnDesktop
              as="div"
              className="hidden sm:flex justify-center lg:justify-start gap-4"
              motionProps={{ variants: itemVariants }}
            >
              <MotionOnDesktop
                as="a"
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                motionProps={{ whileHover: { scale: 1.06, y: -2 }, whileTap: { scale: 0.97 } }}
              >
                <Github className="h-6 w-6" />
              </MotionOnDesktop>
              <MotionOnDesktop
                as="a"
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                motionProps={{ whileHover: { scale: 1.06, y: -2 }, whileTap: { scale: 0.97 } }}
              >
                <Linkedin className="h-6 w-6" />
              </MotionOnDesktop>
              <MotionOnDesktop
                as="a"
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200"
                motionProps={{ whileHover: { scale: 1.06, y: -2 }, whileTap: { scale: 0.97 } }}
              >
                <Mail className="h-6 w-6" />
              </MotionOnDesktop>
            </MotionOnDesktop>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            {/* Profile Picture */}
            <MotionOnDesktop as="div" motionProps={{ variants: itemVariants }}>
              <MotionOnDesktop
                as="div"
                className="w-44 h-44 sm:w-52 sm:h-52 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 flex items-center justify-center shadow-2xl shadow-purple-500/25 border-2 border-white/10"
                motionProps={{
                  whileHover: { scale: 1.03 },
                  transition: { duration: 0.25 },
                }}
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
              </MotionOnDesktop>
            </MotionOnDesktop>
          </div>
        </div>

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

        {/* Stats */}
        <MotionOnDesktop
          as="div"
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-10"
          motionProps={{ variants: itemVariants }}
        >
          {[
            { label: 'Years Experience', value: '4+', icon: Zap },
            { label: 'Projects Delivered', value: '25+', icon: Code },
            { label: 'Happy Clients', value: '99%', icon: Sparkles },
            { label: 'Technologies', value: '30+', icon: Code }
          ].map((stat, index) => (
            <MotionOnDesktop
              as="div"
              key={index}
              className="text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-3 sm:px-4 sm:py-4"
              motionProps={{
                variants: itemVariants,
                whileHover: { scale: 1.05 },
                transition: { duration: 0.2 },
              }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm md:text-base text-gray-300 font-semibold leading-tight">
                {stat.label}
              </div>
            </MotionOnDesktop>
          ))}
        </MotionOnDesktop>

        {/* Scroll Indicator */}
        <MotionOnDesktop
          as="div"
          className="flex justify-center mt-10 pointer-events-none"
          motionProps={{
            animate: { y: [0, 10, 0] },
            transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-white to-gray-400 rounded-full mt-2"></div>
          </div>
        </MotionOnDesktop>
      </MotionOnDesktop>
    </section>
  )
}

export default Hero
