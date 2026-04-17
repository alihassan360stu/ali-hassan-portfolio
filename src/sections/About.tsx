'use client'

import React from 'react'
import { useReducedMotion } from 'framer-motion'
import { Award, Briefcase, Users, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import MotionOnDesktop from '@/components/MotionOnDesktop'

const About = () => {
  const reducedMotion = useReducedMotion()
  const motionEnabled = !reducedMotion

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

  const highlights = [
    'Automation systems that reduce manual work and improve reliability',
    'Clean, scalable full‑stack apps with modern UI and performance focus',
    'Production-ready delivery: observability, security, maintainability',
    'Clear communication and a product-first mindset'
  ]

  const focusAreas = ['Automation', 'SaaS', 'Dashboards', 'APIs', 'Scraping', 'CI/CD']

  return (
    <section id="about" className="section-padding relative overflow-hidden pb-12 md:pb-16 scroll-mt-24 md:scroll-mt-28">
      {/* Content */}
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <MotionOnDesktop
          as="div"
          className="text-center mb-10 sm:mb-12 md:mb-14"
          motionProps={
            motionEnabled
              ? {
                  variants: containerVariants,
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: true, margin: '-100px' },
                }
              : undefined
          }
        >
          <MotionOnDesktop
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Me
            </span>
          </MotionOnDesktop>
          <MotionOnDesktop
            as="div"
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            motionProps={motionEnabled ? { variants: itemVariants } : undefined}
          />
          <MotionOnDesktop
            as="p"
            className="text-base sm:text-lg md:text-xl text-gray-300 sm:text-gray-400 max-w-3xl mx-auto mt-5 sm:mt-6 leading-relaxed"
            motionProps={motionEnabled ? { variants: itemVariants } : undefined}
          >
            Passionate automation engineer and full-stack developer with expertise in building scalable solutions
          </MotionOnDesktop>
        </MotionOnDesktop>

        {/* About Content */}
        <MotionOnDesktop
          as="div"
          className="mb-10 sm:mb-12 md:mb-14"
          motionProps={
            motionEnabled
              ? {
                  variants: containerVariants,
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: true, margin: '-100px' },
                }
              : undefined
          }
        >
          <Card glass className="p-6 sm:p-8 md:p-12 overflow-hidden">
            <CardContent className="space-y-8">
              <MotionOnDesktop as="div" className="relative" motionProps={motionEnabled ? { variants: itemVariants } : undefined}>
                <div className="absolute inset-0 -m-12 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />

                <div className="relative grid lg:grid-cols-12 gap-6 sm:gap-10">
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                      About
                    </h3>
                    <div className="text-base md:text-lg text-gray-300 leading-relaxed space-y-4">
                      <p>
                        I'm a Full Stack Developer with 4+ years of experience building scalable SaaS platforms, automation tools, and high-performance web apps.
                      </p>
                      <p>
                        I specialize in solving complex problems — from backend architecture to frontend performance optimization.
                      </p>
                      <p>
                        I have worked on real-world systems including automation for banking modules (UBL), SaaS dashboards, and real-time applications.
                      </p>
                      <p>
                        My goal is simple: build fast, secure, and scalable systems that actually deliver results.
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
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

                  <div className="lg:col-span-5">
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6">
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                        What you can expect
                      </h4>
                      <ul className="space-y-3">
                        {highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MotionOnDesktop>

              <MotionOnDesktop
                as="div"
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                motionProps={motionEnabled ? { variants: itemVariants } : undefined}
              >
                {[
                  { icon: Briefcase, label: 'Experience', value: '4+ years' },
                  { icon: Award, label: 'Automation', value: 'Banking modules (UBL)' },
                  { icon: Users, label: 'Delivery', value: 'Production-ready systems' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <m.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{m.label}</div>
                        <div className="text-white font-semibold mt-1 leading-snug">{m.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </MotionOnDesktop>
            </CardContent>
          </Card>
        </MotionOnDesktop>
      </div>
    </section>
  )
}

export default About
