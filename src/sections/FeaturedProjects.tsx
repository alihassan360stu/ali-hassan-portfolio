'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, CheckCircle, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { featuredProjects } from '@/data/projects'
import HeroBackground from '@/components/HeroBackground'

const clientProjects = featuredProjects.filter(project => project.projectType === 'client')
const personalProjects = featuredProjects.filter(project => project.projectType === 'personal')

const FeaturedProjects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

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

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>

      {/* Content */}
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
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            In-depth case studies of my most impactful automation and web development projects.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clientProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card glass className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="p-8 border-b border-gray-800">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-sm font-medium text-green-400">Live Project</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-lg mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" size="sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <Button
                            variant="primary"
                            size="sm"
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Case Study Content */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Problem & Solution */}
                      <div className="lg:col-span-2 space-y-8">
                        <motion.div
                          className="space-y-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center gap-3">
                            <Target className="h-6 w-6 text-red-400" />
                            <h4 className="text-xl font-semibold text-white">Problem</h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </motion.div>

                        <motion.div
                          className="space-y-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex items-center gap-3">
                            <Lightbulb className="h-6 w-6 text-yellow-400" />
                            <h4 className="text-xl font-semibold text-white">Solution</h4>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {project.solution}
                          </p>
                        </motion.div>

                        <motion.div
                          className="space-y-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-green-400" />
                            <h4 className="text-xl font-semibold text-white">Key Features</h4>
                          </div>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-3 text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {project.impact && (
                          <motion.div
                            className="mt-6 p-6 rounded-lg bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <h4 className="text-lg font-semibold text-primary-400 mb-2">
                              Impact & Results
                            </h4>
                            <p className="text-gray-300">
                              {project.impact}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-6">
                        {/* Tech Stack */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>

                        {/* Role */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h4 className="text-lg font-semibold text-white mb-4">My Role</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {project.role}
                          </p>
                        </motion.div>

                        {/* Links */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
                          <div className="space-y-2">
                            {project.demoUrl && (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                                <ArrowRight className="h-3 w-3" />
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                              >
                                <Github className="h-4 w-4" />
                                Source Code
                                <ArrowRight className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Projects Section */}
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
            Personal Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Projects I've built for myself to explore new technologies and solve personal challenges
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {personalProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card glass className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="p-8 border-b border-gray-800">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                          <span className="text-sm font-medium text-blue-400">Personal Project</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-lg mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" size="sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <Button
                            variant="primary"
                            size="sm"
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="p-8 border-b border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="h-5 w-5 text-blue-400" />
                      <h4 className="text-lg font-semibold text-white">Purpose</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div
          className="text-center mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button
            variant="primary"
            size="lg"
            href="#other-projects"
            className="group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
