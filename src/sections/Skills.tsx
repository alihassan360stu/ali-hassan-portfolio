'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import HeroBackground from '@/components/HeroBackground'

const Skills = () => {
  const [filter, setFilter] = useState<string>('all')

  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter(skill => skill.category === filter)

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
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))]

  const groupedSkills = filteredSkills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {})

  const highlights = [
    { label: 'Frontend', value: 'React / Next.js', category: 'Web Development' },
    { label: 'Automation', value: 'n8n / Selenium', category: 'Automation' },
    { label: 'Backend', value: 'Node / APIs', category: 'Web Development' },
    { label: 'DevOps', value: 'Docker / CI', category: 'DevOps & Tools' }
  ]

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <HeroBackground />
      {/* Content */}
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A focused toolkit I use to build modern, reliable products.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-200 ${
                filter === category
                  ? 'bg-white/15 text-white border border-white/25 backdrop-blur-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 backdrop-blur-md'
              }`}
              variants={itemVariants}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((h) => (
            <motion.button
              key={h.label}
              type="button"
              onClick={() => setFilter(h.category)}
              className="text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 hover:bg-white/8 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                {h.label}
              </div>
              <div className="mt-1 text-base md:text-lg font-semibold text-white">
                {h.value}
              </div>
              <div className="mt-2 text-xs text-gray-400">
                {h.category}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills (clean grouped pills) */}
        <motion.div
          className="mx-auto max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(groupedSkills)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([category, names]) => (
                <motion.div
                  key={category}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 relative overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40" />
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {category}
                    </h3>
                    <span className="text-sm text-gray-400">{names.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {names
                      .sort((a, b) => a.localeCompare(b))
                      .map((name) => (
                        <span key={name} className="skill-badge">
                          {name}
                        </span>
                      ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
