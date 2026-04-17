'use client'

import React, { useState } from 'react'
import MotionOnDesktop from '@/components/MotionOnDesktop'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { personalInfo } from '@/data/personal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isFormDisabled = true

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
    
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.social.github
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.social.linkedin
    }
  ]

  return (
    <section id="contact" className="section-padding pt-8 md:pt-12 lg:pt-16 relative overflow-hidden">
      {/* Content */}
      <div className="container-padding relative z-10">
        <MotionOnDesktop
          as="div"
          className="text-center mb-16"
          motionProps={{
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
          }}
        >
          <MotionOnDesktop
            as="h2"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </MotionOnDesktop>
          <MotionOnDesktop
            as="div"
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            motionProps={{ variants: itemVariants }}
          />
          <MotionOnDesktop
            as="p"
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            motionProps={{ variants: itemVariants }}
          >
            Let's discuss your project and how I can help you build scalable automation solutions.
          </MotionOnDesktop>
        </MotionOnDesktop>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <MotionOnDesktop
            as="div"
            motionProps={{
              variants: containerVariants,
              initial: 'hidden',
              whileInView: 'visible',
              viewport: { once: true, margin: '-100px' },
            }}
          >
            <MotionOnDesktop as="div" motionProps={{ variants: itemVariants }}>
              <Card glass>
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary-400" />
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-5 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-amber-200">
                    Contact form is temporarily disabled. Please use email or LinkedIn for now.
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isFormDisabled}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isFormDisabled}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        disabled={isFormDisabled}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Project Discussion"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isFormDisabled}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting || isFormDisabled}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </MotionOnDesktop>
          </MotionOnDesktop>

          {/* Contact Information */}
          <MotionOnDesktop
            as="div"
            className="space-y-8"
            motionProps={{
              variants: containerVariants,
              initial: 'hidden',
              whileInView: 'visible',
              viewport: { once: true, margin: '-100px' },
            }}
          >
            {/* Contact Details */}
            <MotionOnDesktop as="div" motionProps={{ variants: itemVariants }}>
              <Card glass>
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <MotionOnDesktop
                        as="div"
                        key={index}
                        className="flex items-center gap-4"
                        motionProps={{
                          variants: itemVariants,
                          whileHover: { scale: 1.02 },
                          transition: { duration: 0.2 },
                        }}
                      >
                        <MotionOnDesktop
                          as="div"
                          className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center"
                          motionProps={{
                            whileHover: { scale: 1.1, rotate: 5 },
                            transition: { duration: 0.2 },
                          }}
                        >
                          <Icon className="h-6 w-6 text-primary-400" />
                        </MotionOnDesktop>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-white font-medium hover:text-primary-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-white font-medium">{info.value}</div>
                          )}
                        </div>
                      </MotionOnDesktop>
                    )
                  })}
                </CardContent>
              </Card>
            </MotionOnDesktop>

            {/* Social Links */}
            <MotionOnDesktop as="div" motionProps={{ variants: itemVariants }}>
              <Card glass>
                <CardHeader>
                  <CardTitle className="text-white">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <MotionOnDesktop
                          as="a"
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-800 hover:border-primary-500 transition-all duration-200"
                          motionProps={{
                            variants: itemVariants,
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                          }}
                        >
                          <Icon className="h-6 w-6 text-primary-400" />
                          <div>
                            <div className="text-white font-medium">{social.label}</div>
                            <div className="text-xs text-gray-400">Connect</div>
                          </div>
                        </MotionOnDesktop>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </MotionOnDesktop>

            {/* Response Time */}
            <MotionOnDesktop as="div" motionProps={{ variants: itemVariants }}>
              <Card glass>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Quick Response
                    </h4>
                    <p className="text-gray-400 text-sm">
                      I typically respond within 24 hours. For urgent projects, feel free to reach out via phone.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </MotionOnDesktop>
          </MotionOnDesktop>
        </div>
      </div>
    </section>
  )
}

export default Contact
