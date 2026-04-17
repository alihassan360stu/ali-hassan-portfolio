'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { personalInfo } from '@/data/personal'

const Footer = () => {
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

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.social.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: personalInfo.social.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    }
  ]

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-padding py-8 md:py-10">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {personalInfo.tagline}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  SaaS Development
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Workflow Automation
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Web Automation
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  API Development
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {personalInfo.email}
                </motion.a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {personalInfo.phone}
                </motion.a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              className="text-gray-400 text-sm"
              variants={itemVariants}
            >
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2 text-gray-400 text-sm"
              variants={itemVariants}
            >
              <span>Made with</span>
              <motion.div
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 fill-current" />
              </motion.div>
              <span>using Next.js & TypeScript</span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
