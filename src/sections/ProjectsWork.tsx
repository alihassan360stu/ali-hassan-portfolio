'use client'

import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  CheckCircle2,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Lock,
  PlayCircle,
  Shield,
  Sparkles,
  Workflow
} from 'lucide-react'
import HeroBackground from '@/components/HeroBackground'
import Modal from '@/components/ui/Modal'
import ProjectMediaViewer from '@/components/ProjectMediaViewer'
import { workProjects, type ProjectCategory, type WorkProject } from '@/data/projectsWork'

type TabKey = 'client' | 'automation' | 'personal'

const tabs: { key: TabKey; label: string; description: string }[] = [
  {
    key: 'client',
    label: 'Client Work',
    description: 'Real projects delivered for clients. Some details are confidential.'
  },
  {
    key: 'automation',
    label: 'Automation Systems',
    description: 'Workflow automations built with tools like n8n, Selenium, and Airflow.'
  },
  {
    key: 'personal',
    label: 'Personal Projects',
    description: 'Public projects with live demos and source code.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut'
    }
  }
}

const badgeStyles: Record<NonNullable<WorkProject['badge']>, string> = {
  Confidential: 'bg-red-500/15 text-red-300 border-red-500/25',
  Automation: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  Featured: 'bg-purple-500/15 text-purple-300 border-purple-500/25'
}

const getTabIcon = (key: TabKey) => {
  if (key === 'client') return Lock
  if (key === 'automation') return Workflow
  return Github
}

const tabPillGradients: Record<TabKey, string> = {
  client: 'from-blue-500/25 via-purple-500/15 to-transparent',
  automation: 'from-blue-500/25 via-purple-500/15 to-transparent',
  personal: 'from-emerald-500/20 via-blue-500/15 to-transparent'
}

const ProjectsWork = () => {
  const reducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState<TabKey>('client')
  const [selected, setSelected] = useState<WorkProject | null>(null)

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const motionEnabled = !reducedMotion && !isMobile

  const projects = useMemo(
    () => workProjects.filter((p) => p.category === (activeTab as ProjectCategory)),
    [activeTab]
  )

  const tabCounts = useMemo(() => {
    return {
      client: workProjects.filter((p) => p.category === 'client').length,
      automation: workProjects.filter((p) => p.category === 'automation').length,
      personal: workProjects.filter((p) => p.category === 'personal').length
    }
  }, [])

  const activeMeta = tabs.find((t) => t.key === activeTab)!

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <HeroBackground />

      <div className="container-padding relative z-10">
        <motion.div
          className="text-center mb-10"
          variants={motionEnabled ? containerVariants : undefined}
          initial={motionEnabled ? 'hidden' : false}
          whileInView={motionEnabled ? 'visible' : undefined}
          viewport={motionEnabled ? { once: true, margin: '-100px' } : undefined}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={motionEnabled ? itemVariants : undefined}
          >
            Projects &amp; Work
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={motionEnabled ? itemVariants : undefined}
          >
            A curated selection of client deliveries, automation systems, and personal builds.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="mb-10"
          variants={motionEnabled ? containerVariants : undefined}
          initial={motionEnabled ? 'hidden' : false}
          whileInView={motionEnabled ? 'visible' : undefined}
          viewport={motionEnabled ? { once: true, margin: '-100px' } : undefined}
        >
          <div className="mx-auto max-w-5xl">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-1.5 sm:p-2 overflow-x-auto">
              <div className="flex min-w-max gap-2 relative">
                {tabs.map((t) => {
                  const Icon = getTabIcon(t.key)
                  const isActive = t.key === activeTab
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActiveTab(t.key)}
                      className="relative px-3.5 sm:px-4 py-2.5 rounded-xl text-sm md:text-base font-semibold whitespace-nowrap"
                      aria-pressed={isActive}
                    >
                      {motionEnabled && isActive && (
                        <motion.div
                          layoutId="projects-work-active-tab"
                          className="absolute inset-0 rounded-xl border border-white/20 bg-white/12"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}

                      <span className={`relative z-10 flex items-center gap-2 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                        <Icon className="h-4 w-4" />
                        <span>{t.label}</span>
                        <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs border border-white/10 bg-white/5 text-gray-200">
                          {tabCounts[t.key]}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 text-center text-gray-300">
              <p className="text-base md:text-lg">{activeMeta.description}</p>
              <div className="mt-3 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Tab Header */}
        <motion.div
          className="mb-6"
          variants={motionEnabled ? containerVariants : undefined}
          initial={motionEnabled ? 'hidden' : false}
          whileInView={motionEnabled ? 'visible' : undefined}
          viewport={motionEnabled ? { once: true, margin: '-100px' } : undefined}
        >
          <motion.div variants={motionEnabled ? itemVariants : undefined} className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {activeMeta.label}
            </h3>
            <p className="mt-2 text-gray-400 leading-relaxed">
              {activeTab === 'client'
                ? 'Confidential builds — you can view visuals, but not live links or source code.'
                : activeTab === 'automation'
                ? 'Workflows, bots, and pipelines — demos and screenshots available.'
                : 'Full access projects — live demos, GitHub repos, and screenshots.'}
            </p>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={motionEnabled ? { duration: 0.2 } : { duration: 0 }}
          >
            {projects.map((p) => (
              <motion.article
                key={p.id}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/8 transition-colors"
                variants={motionEnabled ? itemVariants : undefined}
                whileHover={motionEnabled ? { y: -3 } : undefined}
              >
                <div className={`h-8 sm:h-10 w-full bg-gradient-to-r ${tabPillGradients[p.category]} opacity-90`} />
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white leading-snug">
                        {p.title}
                      </h3>
                      {p.role && (
                        <p className="mt-1 text-sm font-semibold text-gray-300">
                          Role: <span className="text-white">{p.role}</span>
                        </p>
                      )}
                      <p className="mt-2 text-gray-400 leading-relaxed line-clamp-4">
                        {p.description}
                      </p>
                    </div>
                    {p.badge && (
                      <span
                        className={`shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${badgeStyles[p.badge]}`}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.techStack.slice(0, 6).map((t) => (
                      <span key={t} className="skill-badge">
                        {t}
                      </span>
                    ))}
                    {p.techStack.length > 6 && (
                      <span className="skill-badge">+{p.techStack.length - 6}</span>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors"
                    >
                      Details
                    </button>

                    {/* Client */}
                    {p.category === 'client' && (
                      <></>
                    )}

                    {/* Automation */}
                    {p.category === 'automation' && (
                      <>
                        {p.media?.videoUrl && (
                          <button
                            type="button"
                            onClick={() => setSelected(p)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors"
                          >
                            <PlayCircle className="h-4 w-4" />
                            View Demo
                          </button>
                        )}
                        {p.media?.screenshots?.length ? (
                          <button
                            type="button"
                            onClick={() => setSelected(p)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-white/12 bg-white/6 hover:bg-white/10 text-gray-100 transition-colors"
                          >
                            <ImageIcon className="h-4 w-4" />
                            View Screenshots
                          </button>
                        ) : null}
                      </>
                    )}

                    {/* Personal */}
                    {p.category === 'personal' && (
                      <>
                        {p.liveDemoUrl && (
                          <a
                            href={p.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        )}
                        {p.sourceCodeUrl && (
                          <a
                            href={p.sourceCodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-white/12 bg-white/6 hover:bg-white/10 text-gray-100 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            Source Code
                          </a>
                        )}
                        {p.media?.screenshots?.length ? (
                          <button
                            type="button"
                            onClick={() => setSelected(p)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-gray-100 transition-colors"
                          >
                            <ImageIcon className="h-4 w-4" />
                            Screenshots
                          </button>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>

                <div className="h-1 w-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <Modal
          open={Boolean(selected)}
          onClose={() => setSelected(null)}
          title={selected?.title}
          maxWidthClassName="max-w-6xl"
        >
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/15 bg-white/7 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden">
              <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500/16 via-purple-500/16 to-transparent">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                    <div className="min-w-0">
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-200 font-semibold">
                        <Sparkles className="h-4 w-4 text-purple-200" />
                        Case Study
                      </div>
                      <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight">
                        {selected?.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {selected?.description && (
                <div className="p-6 sm:p-8 border-t border-white/10">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white tracking-tight">Overview</h4>
                      <p className="mt-1 text-sm text-gray-300">Context, purpose, and what was delivered.</p>
                    </div>
                    <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  </div>
                  <p className="mt-4 text-gray-100/90 leading-relaxed text-base sm:text-[17px]">
                    {selected.description}
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-6">
                <div className="rounded-2xl border border-white/15 bg-white/7 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white tracking-tight">Media</h4>
                      <p className="mt-2 text-sm text-gray-300">Screenshots and demos (when shareable). Click an image to view fullscreen.</p>
                    </div>
                    {selected?.media?.screenshots?.length ? (
                      <span className="text-xs font-semibold text-gray-200 border border-white/12 bg-white/6 rounded-full px-3 py-1">
                        {selected.media.screenshots.length} screenshots
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-5">
                    {selected?.media?.screenshots?.length || selected?.media?.videoUrl ? (
                      <ProjectMediaViewer
                        screenshots={selected?.media?.screenshots}
                        videoUrl={selected?.media?.videoUrl}
                      />
                    ) : (
                      <div className="rounded-2xl border border-white/15 bg-white/6 p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-xl border border-white/12 bg-white/6 flex items-center justify-center">
                            <Shield className="h-5 w-5 text-gray-200" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-white">Media not available</div>
                            <div className="mt-1 text-sm text-gray-300 leading-relaxed">
                              {selected?.badge === 'Confidential'
                                ? 'This project includes confidential client work. Visuals and live links are restricted.'
                                : 'No screenshots or demos have been added for this project yet.'}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {selected?.contributions?.length ? (
                  <div className="rounded-2xl border border-white/15 bg-white/7 p-6 sm:p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white tracking-tight">My Responsibilities</h4>
                        <p className="mt-1 text-sm text-gray-300">What I owned end-to-end and delivered.</p>
                      </div>
                      <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    </div>
                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {selected.contributions.map((c) => (
                        <li key={c} className="text-base text-gray-100/90 flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-6 h-fit">
                {selected?.features?.length ? (
                  <div className="rounded-2xl border border-white/15 bg-white/7 p-6 sm:p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white tracking-tight">Key Features</h4>
                        <p className="mt-1 text-sm text-gray-300">Capabilities users directly interact with.</p>
                      </div>
                      <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    </div>
                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {selected.features.map((f) => (
                        <li key={f} className="text-base text-gray-100/90 flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {selected?.techStack?.length ? (
                  <div className="rounded-2xl border border-white/15 bg-white/7 p-6 sm:p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white tracking-tight">Tech Stack</h4>
                        <p className="mt-1 text-sm text-gray-300">Tools and frameworks used in production.</p>
                      </div>
                      <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {selected.techStack.map((t) => (
                        <span key={t} className="skill-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}

export default ProjectsWork
