'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MotionOnDesktop from '@/components/MotionOnDesktop'
import { Blocks, Bot, Code2, Database, ShieldCheck, Wrench } from 'lucide-react'
import { skills } from '@/data/skills'

const Skills = () => {
  const [filter, setFilter] = useState<string>('all')
  const normalizeCategory = (value: string) => value.trim().toLowerCase()

  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter((skill) => normalizeCategory(skill.category) === normalizeCategory(filter))

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

  const preferredCategoryOrder = [
    'Web Development',
    'Automation',
    'Databases',
    'DevOps & Tools',
    'Mobile Development',
    'Desktop Automation',
  ]

  const uniqueCategories = Array.from(new Set(skills.map((skill) => skill.category.trim())))

  const categories = [
    'all',
    ...preferredCategoryOrder.filter((c) => uniqueCategories.includes(c)),
    ...uniqueCategories.filter((c) => !preferredCategoryOrder.includes(c)),
  ]

  const categoryCounts = categories.reduce<Record<string, number>>((acc, c) => {
    if (c === 'all') {
      acc[c] = skills.length
      return acc
    }
    acc[c] = skills.filter((s) => normalizeCategory(s.category) === normalizeCategory(c)).length
    return acc
  }, {})

  const getCategoryMeta = (category: string) => {
    const key = category.toLowerCase()

    if (key.includes('automation')) {
      return { Icon: Bot, accent: 'from-emerald-500 to-cyan-600' }
    }
    if (key.includes('devops') || key.includes('tool')) {
      return { Icon: Wrench, accent: 'from-amber-500 to-orange-600' }
    }
    if (key.includes('security')) {
      return { Icon: ShieldCheck, accent: 'from-rose-500 to-pink-600' }
    }
    if (key.includes('data') || key.includes('database')) {
      return { Icon: Database, accent: 'from-fuchsia-500 to-purple-600' }
    }
    if (key.includes('web') || key.includes('frontend') || key.includes('backend')) {
      return { Icon: Code2, accent: 'from-blue-500 to-purple-600' }
    }

    return { Icon: Blocks, accent: 'from-slate-400 to-slate-600' }
  }

  const groupedSkills = filteredSkills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {})

  const categoryGradients = [
    'from-blue-500/20 via-purple-500/10 to-transparent',
    'from-emerald-500/18 via-cyan-500/10 to-transparent',
    'from-fuchsia-500/18 via-purple-500/10 to-transparent',
    'from-amber-500/18 via-orange-500/10 to-transparent',
    'from-rose-500/18 via-pink-500/10 to-transparent',
  ]

  const categoryAccents = [
    'from-blue-500 to-purple-600',
    'from-emerald-500 to-cyan-600',
    'from-fuchsia-500 to-purple-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-pink-600',
  ]

  const getCategoryRank = (category: string) => {
    const idx = preferredCategoryOrder.indexOf(category)
    return idx === -1 ? Number.MAX_SAFE_INTEGER : idx
  }

  return (
    <section id="skills" className="section-padding relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Content */}
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <MotionOnDesktop
          as="div"
          className="text-center mb-14"
          motionProps={{
            variants: containerVariants,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-100px' },
          }}
        >
          <MotionOnDesktop as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" motionProps={{ variants: itemVariants }}>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </MotionOnDesktop>
          <MotionOnDesktop
            as="p"
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            motionProps={{ variants: itemVariants }}
          >
            A focused toolkit I use to build modern, reliable products.
          </MotionOnDesktop>
        </MotionOnDesktop>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Category Bar */}
          <motion.div
            className="rounded-3xl border border-white/12 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 ring-1 ring-white/5"
            variants={itemVariants}
          >
            <div className="p-2 flex gap-2 overflow-x-auto no-scrollbar">
              {categories.map((category) => {
                const active = filter === category
                const label = category.charAt(0).toUpperCase() + category.slice(1)
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    className={
                      'flex-shrink-0 px-4 py-2 rounded-2xl text-sm font-semibold border transition-colors ' +
                      (active
                        ? 'border-white/20 text-white bg-gradient-to-r from-blue-500/25 via-purple-500/15 to-pink-500/15'
                        : 'border-white/10 text-gray-300 bg-white/5 hover:bg-white/10')
                    }
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="truncate">{label}</span>
                      <span className="text-xs text-gray-300/80">{categoryCounts[category] ?? 0}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mt-6" variants={itemVariants}>
              <div className="rounded-3xl border border-white/12 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/5">
                <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white truncate">
                      {filter === 'all' ? 'All Skills' : filter}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {filter === 'all'
                        ? `Showing ${skills.length} skills across all categories`
                        : `Showing ${categoryCounts[filter] ?? 0} skills`}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  {Object.keys(groupedSkills).length === 0 ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                      <div className="text-white font-semibold">No skills in this category</div>
                      <div className="text-sm text-gray-400 mt-2">Try another category from the top bar.</div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(groupedSkills)
                      .sort(([a], [b]) => {
                        const rankDiff = getCategoryRank(a) - getCategoryRank(b)
                        if (rankDiff !== 0) return rankDiff
                        return a.localeCompare(b)
                      })
                      .map(([category, names], idx) => {
                        const gradient = categoryGradients[idx % categoryGradients.length]
                        const accent = categoryAccents[idx % categoryAccents.length]
                        const { Icon } = getCategoryMeta(category)

                          return (
                            <motion.div
                              key={category}
                              className="rounded-3xl p-[1px] bg-gradient-to-br from-white/12 via-white/6 to-white/12"
                            >
                              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`} />
                                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

                                <div className="relative">
                                  <div className="flex items-center justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-3 min-w-0">
                                      <div
                                        className={
                                          'h-10 w-10 rounded-2xl bg-gradient-to-br ' +
                                          accent +
                                          ' ring-1 ring-white/15 shadow-lg shadow-black/30 flex items-center justify-center'
                                        }
                                      >
                                        <Icon className="h-5 w-5 text-white" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-base font-semibold text-white truncate">{category}</div>
                                        <div className="text-xs text-gray-400 mt-0.5">{names.length} skills</div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    {names
                                      .sort((a, b) => a.localeCompare(b))
                                      .map((name) => (
                                        <span
                                          key={name}
                                          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] font-semibold text-gray-100 hover:border-white/20 hover:bg-white/10 transition-colors"
                                        >
                                          {name}
                                        </span>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
