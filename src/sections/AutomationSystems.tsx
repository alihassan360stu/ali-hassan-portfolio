'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Globe, 
  Monitor, 
  TestTube, 
  Zap, 
  Settings, 
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const AutomationSystems = () => {
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

  const automationCategories = [
    {
      icon: Bot,
      title: 'Workflow Automation',
      description: 'End-to-end workflow automation systems that streamline business processes and reduce manual intervention.',
      features: [
        'Visual workflow designer',
        'Real-time execution monitoring',
        'Conditional logic and branching',
        'Integration with 50+ APIs',
        'Error handling and retry mechanisms'
      ],
      tech: ['Node.js', 'Apache Airflow', 'n8n', 'React', 'PostgreSQL'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Web Automation',
      description: 'Intelligent web scraping and browser automation solutions for data extraction and process automation.',
      features: [
        'AI-powered element detection',
        'Anti-bot detection bypass',
        'Scheduled automation tasks',
        'Data validation and cleansing',
        'CAPTCHA solving integration'
      ],
      tech: ['Playwright', 'Selenium', 'Python', 'Puppeteer', 'Redis'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Monitor,
      title: 'Desktop Automation',
      description: 'Cross-platform desktop automation tools for repetitive tasks and application control.',
      features: [
        'GUI automation and testing',
        'Application integration',
        'File system automation',
        'Process monitoring',
        'Multi-platform support'
      ],
      tech: ['Pywinauto', 'PyJAB', 'AutoHotkey', 'Python', 'Windows API'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TestTube,
      title: 'Test Automation',
      description: 'Comprehensive testing frameworks for automated quality assurance and continuous testing.',
      features: [
        'Parallel test execution',
        'Cross-browser testing',
        'API testing automation',
        'Performance testing',
        'CI/CD integration'
      ],
      tech: ['Playwright', 'Mocha', 'Chai', 'Jest', 'Docker'],
      color: 'from-red-500 to-red-600'
    }
  ]

  const stats = [
    { label: 'Automation Tasks', value: '1M+', description: 'Daily automated tasks' },
    { label: 'Time Saved', value: '85%', description: 'Reduction in manual effort' },
    { label: 'Accuracy', value: '99.5%', description: 'Automation success rate' },
    { label: 'Integrations', value: '50+', description: 'Third-party services' }
  ]

  return (
    <section id="automation" className="section-padding bg-gray-900/50">
      <div className="container-padding">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Automation Systems
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Specialized expertise in building comprehensive automation solutions across web, desktop, and testing domains.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card glass hover={false}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Automation Categories */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {automationCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card glass className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="h-8 w-8" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-white text-2xl">
                          {category.title}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-gray-300 mt-4">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Card glass>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Automation Expertise
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Zap className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Enterprise Scale
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Built automation systems handling millions of daily tasks for enterprise clients.
                    </p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Settings className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Custom Solutions
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Tailored automation frameworks designed for specific business requirements.
                    </p>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Bot className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      AI Integration
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Advanced AI-powered automation with intelligent decision-making capabilities.
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              className="group"
            >
              Discuss Automation Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AutomationSystems
