'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  maxWidthClassName?: string
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  maxWidthClassName = 'max-w-4xl'
}) => {
  const [mounted, setMounted] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
    }
  }, [open, onClose])

  if (!mounted) return null

  if (isMobile) {
    return createPortal(
      open ? (
        <div className="fixed inset-0 z-[100]">
          <button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-black/80"
            onClick={onClose}
          />

          <div className="absolute inset-0 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
              <div
                role="dialog"
                aria-modal="true"
                className={`relative w-full ${maxWidthClassName} rounded-2xl border border-white/15 bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/5`}
              >
                <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-white/10">
                  <div className="min-w-0">
                    {title && (
                      <h3 className="text-lg sm:text-xl font-semibold text-white truncate">{title}</h3>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-200 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-5 sm:p-6 max-h-[calc(100vh-10rem)] overflow-y-auto overscroll-contain">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null,
      document.body
    )
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-black/80"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="absolute inset-0 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
              <motion.div
                role="dialog"
                aria-modal="true"
                className={`relative w-full ${maxWidthClassName} rounded-2xl border border-white/15 bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/5`}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-white/10">
                  <div className="min-w-0">
                    {title && (
                      <h3 className="text-lg sm:text-xl font-semibold text-white truncate">
                        {title}
                      </h3>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-200 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-5 sm:p-6 max-h-[calc(100vh-10rem)] overflow-y-auto overscroll-contain">
                  {children}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default Modal
