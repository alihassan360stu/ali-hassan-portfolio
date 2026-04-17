'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  GitBranch, 
  Globe, 
  Webhook, 
  Zap, 
  Bug, 
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import HeroBackground from '@/components/HeroBackground'

const Services = () => {
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

  const iconMap = {
    cloud: Cloud,
    'git-branch': GitBranch,
    globe: Globe,
    api: Webhook,
    zap: Zap,
    bug: Bug,
  }

  return (
    <section id="services" className="section-padding pb-8 md:pb-12 lg:pb-16 relative overflow-hidden">
      <HeroBackground />
      <div className="container-padding relative z-10">
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
            Services
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive services for building scalable automation systems and high-performance web applications.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Cloud
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card glass className="h-full hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-white text-xl mb-3">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-400">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">What's Included</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Service Process */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Card glass>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                  How I Work
                </h3>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: '1', title: 'Discovery', description: 'Understanding your requirements and business goals' },
                    { step: '2', title: 'Planning', description: 'Creating detailed project roadmap and architecture' },
                    { step: '3', title: 'Development', description: 'Building the solution with agile methodology' },
                    { step: '4', title: 'Delivery', description: 'Testing, deployment, and ongoing support' }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                        {process.step}
                      </div>
                      <h4 className="text-lg font-medium text-white mb-2">
                        {process.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {process.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Card glass>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Let's discuss how I can help you build scalable automation systems and high-performance web applications that drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    href="#contact"
                    className="group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href="#projects"
                  >
                    View My Work
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
