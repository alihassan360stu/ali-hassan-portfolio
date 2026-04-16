'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Database, Globe, Server, Wrench, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { skills } from '@/data/skills'

const Skills = () => {
  const [filter, setFilter] = useState<string>('all')
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter)

  // Debug: Log filter changes
  React.useEffect(() => {
    console.log('Filter changed to:', filter)
    console.log('Filtered skills count:', filteredSkills.length)
  }, [filter])

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

  const getIcon = (category: string) => {
    const icons = {
      'Web Development': Code,
      'Automation': Zap,
      'Desktop Automation': Globe,
      'Databases': Database,
      'DevOps & Tools': Server,
      'Mobile Development': Wrench,
    }
    return icons[category as keyof typeof icons] || Code
  }

  const getProficiencyStars = (level: string) => {
    const levels: { [key: string]: number } = {
      'beginner': 1,
      'intermediate': 2,
      'advanced': 3,
      'expert': 4,
    }
    return levels[level] || 3
  }

  const getProficiencyPercent = (level: string) => {
    const percents: { [key: string]: number } = {
      'beginner': 20,
      'intermediate': 40,
      'advanced': 60,
      'expert': 80,
    }
    return percents[level] || 60
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Comprehensive expertise across multiple technologies and frameworks
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700/50'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </motion.button>
          {['Web Development', 'Automation', 'Desktop Automation', 'Databases', 'DevOps & Tools', 'Mobile Development'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700/50'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Card glass className="h-full p-8">
                <CardContent className="space-y-6 h-full flex flex-col">
                  {/* Skill Header */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {React.createElement(getIcon(skill.category), { className: "h-8 w-8 text-blue-400" })}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-gray-400">Proficiency:</span>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < getProficiencyStars(skill.level)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-sm px-3 py-1.5">
                        {skill.name}
                      </Badge>
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg text-gray-400">Skill Level</span>
                      <span className="text-lg font-bold text-white">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getProficiencyPercent(skill.level)}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <div className="text-right mt-2">
                      <span className="text-sm text-gray-400">{getProficiencyPercent(skill.level)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
