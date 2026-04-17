'use client'

import React from 'react'
import MotionOnDesktop from '@/components/MotionOnDesktop'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Mail } from 'lucide-react'

const CallToAction = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="section-padding py-10 md:py-14 relative overflow-hidden">
      <div className="container-padding relative z-10">
        <MotionOnDesktop
          as="div"
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden"
          motionProps={{
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
          }}
        >
          <div className="relative p-6 sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <MotionOnDesktop as="h3" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" motionProps={{ variants: itemVariants }}>
                  Interested in collaboration, freelance work, or full-time opportunities?
                </MotionOnDesktop>
                <MotionOnDesktop
                  as="p"
                  className="mt-3 text-base sm:text-lg text-gray-300 leading-relaxed"
                  motionProps={{ variants: itemVariants }}
                >
                  Feel free to connect and discuss your project.
                </MotionOnDesktop>
              </div>

              <MotionOnDesktop
                as="div"
                className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:justify-end"
                motionProps={{ variants: itemVariants }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="#projects"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-purple-500/20"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#contact"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </MotionOnDesktop>
            </div>
          </div>
        </MotionOnDesktop>
      </div>
    </section>
  )
}

export default CallToAction
