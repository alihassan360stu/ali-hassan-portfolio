'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Film, Image as ImageIcon, X } from 'lucide-react'

type MediaTab = 'screenshots' | 'video'

interface ProjectMediaViewerProps {
  screenshots?: string[]
  videoUrl?: string
}

const ProjectMediaViewer: React.FC<ProjectMediaViewerProps> = ({ screenshots = [], videoUrl }) => {
  const hasScreenshots = screenshots.length > 0
  const hasVideo = Boolean(videoUrl)

  const defaultTab: MediaTab | null = useMemo(() => {
    if (hasScreenshots) return 'screenshots'
    if (hasVideo) return 'video'
    return null
  }, [hasScreenshots, hasVideo])

  const [tab, setTab] = useState<MediaTab | null>(defaultTab)
  const [index, setIndex] = useState(0)
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const canPrev = index > 0
  const canNext = index < screenshots.length - 1

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!fullscreenOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreenOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [fullscreenOpen])

  if (!hasScreenshots && !hasVideo) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-gray-300">
        No media available.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {(hasScreenshots || hasVideo) && (
        <div className="flex items-center gap-2">
          {hasScreenshots && (
            <button
              type="button"
              onClick={() => setTab('screenshots')}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold border transition-colors ${
                tab === 'screenshots'
                  ? 'bg-white/15 border-white/25 text-white'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              <ImageIcon className="h-4 w-4" />
              Screenshots
            </button>
          )}
          {hasVideo && (
            <button
              type="button"
              onClick={() => setTab('video')}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold border transition-colors ${
                tab === 'video'
                  ? 'bg-white/15 border-white/25 text-white'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Film className="h-4 w-4" />
              Demo
            </button>
          )}
        </div>
      )}

      {tab === 'video' && hasVideo && (
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
          <video
            className="w-full h-auto"
            controls
            preload="metadata"
          >
            <source src={videoUrl} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {tab === 'screenshots' && hasScreenshots && (
        <div className="space-y-3">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <button type="button" className="block w-full" onClick={() => setFullscreenOpen(true)}>
              <img
                src={screenshots[index]}
                alt={`Screenshot ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={!canPrev}
              onClick={() => setIndex((v) => Math.max(0, v - 1))}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold border border-white/10 bg-white/5 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>

            <div className="text-sm text-gray-300">
              {index + 1} / {screenshots.length}
            </div>

            <button
              type="button"
              disabled={!canNext}
              onClick={() => setIndex((v) => Math.min(screenshots.length - 1, v + 1))}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold border border-white/10 bg-white/5 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/10"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {screenshots.map((s, i) => (
              <motion.button
                key={s}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-14 w-20 rounded-lg overflow-hidden border transition-colors ${
                  i === index ? 'border-white/40' : 'border-white/10 hover:border-white/25'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={s}
                  alt={`Thumbnail ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.button>
            ))}
          </div>

          {mounted &&
            createPortal(
              <AnimatePresence>
                {fullscreenOpen && (
                  <motion.div
                    className="fixed inset-0 z-[120]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.button
                      type="button"
                      aria-label="Close fullscreen preview"
                      className="absolute inset-0 bg-black/80"
                      onClick={() => setFullscreenOpen(false)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                      <motion.div
                        className="relative w-full max-w-6xl"
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        transition={{ duration: 0.18 }}
                      >
                        <button
                          type="button"
                          onClick={() => setFullscreenOpen(false)}
                          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/75 border border-white/20 backdrop-blur-md shadow-lg shadow-black/40 flex items-center justify-center text-white"
                          aria-label="Close"
                        >
                          <X className="h-5 w-5" />
                        </button>

                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
                          <img
                            src={screenshots[index]}
                            alt={`Screenshot ${index + 1}`}
                            className="w-full max-h-[85vh] object-contain"
                          />
                        </div>

                        <div className="mt-3 text-center text-sm text-gray-300">
                          {index + 1} / {screenshots.length}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>,
              document.body
            )}
        </div>
      )}
    </div>
  )
}

export default ProjectMediaViewer
