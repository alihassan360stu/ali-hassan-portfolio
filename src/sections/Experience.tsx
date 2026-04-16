'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="section-padding bg-gray-900">
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
            Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Professional journey building automation platforms and enterprise solutions.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience, index) => (
            <motion.div key={experience.id} variants={itemVariants}>
              <Card glass className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Experience Header */}
                  <div className="p-8 border-b border-gray-800 bg-gradient-to-r from-primary-500/5 to-transparent">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Building className="h-5 w-5 text-primary-400" />
                          <h3 className="text-2xl font-bold text-white">
                            {experience.company}
                          </h3>
                          {experience.current && (
                            <Badge variant="success" className="ml-2">
                              Current
                            </Badge>
                          )}
                        </div>
                        <h4 className="text-xl text-gray-300 mb-2">
                          {experience.position}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.startDate} - {experience.endDate || 'Present'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-3">Overview</h5>
                          <p className="text-gray-300 leading-relaxed">
                            {experience.description}
                          </p>
                        </div>

                        <div>
                          <h5 className="text-lg font-semibold text-white mb-4">Key Achievements</h5>
                          <div className="space-y-3">
                            {experience.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <motion.div
                                  className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5"
                                  whileHover={{ scale: 1.2 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Award className="h-3 w-3 text-white" />
                                </motion.div>
                                <p className="text-gray-300">{achievement}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-4">Technologies</h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Impact Stats */}
                        <div className="p-6 rounded-lg bg-gradient-to-br from-primary-500/10 to-primary-600/10 border border-primary-500/20">
                          <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="h-6 w-6 text-primary-400" />
                            <h5 className="text-lg font-semibold text-white">Impact</h5>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Clients Served</span>
                              <span className="text-white font-semibold">50+</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Tasks Automated</span>
                              <span className="text-white font-semibold">1M+</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Cost Reduction</span>
                              <span className="text-white font-semibold">60%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Team Size Led</span>
                              <span className="text-white font-semibold">5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
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
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Professional Growth
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-primary-400 mb-2">4+</div>
                    <div className="text-white font-medium mb-1">Years Experience</div>
                    <div className="text-gray-400 text-sm">In automation & web development</div>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-2">Enterprise</div>
                    <div className="text-white font-medium mb-1">Level Solutions</div>
                    <div className="text-gray-400 text-sm">For banking and large-scale applications</div>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-green-400 mb-2">Full Stack</div>
                    <div className="text-white font-medium mb-1">Development</div>
                    <div className="text-gray-400 text-sm">End-to-end solution delivery</div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
