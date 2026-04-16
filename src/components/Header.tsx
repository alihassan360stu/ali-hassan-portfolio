'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-padding">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AH</span>
            </div>
            <span className="text-white font-semibold text-lg">Ali Hassan</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/alihassan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/alihassan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:alihassan@example.com"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <div className="flex gap-3 px-4 pt-4">
              <motion.a
                href="https://github.com/alihassan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/alihassan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:alihassan@example.com"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>

            <div className="px-4 pt-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="w-full"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
