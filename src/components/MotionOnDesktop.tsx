'use client'

import React from 'react'
import { motion } from 'framer-motion'

type ElementTag = keyof JSX.IntrinsicElements

type MotionOnDesktopProps<T extends ElementTag> = {
  as: T
  motionProps?: Record<string, unknown>
} & JSX.IntrinsicElements[T]

const MotionOnDesktop = <T extends ElementTag>({
  as,
  motionProps,
  ...rest
}: MotionOnDesktopProps<T>) => {
  const [isMobile, setIsMobile] = React.useState(true)

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  if (isMobile) {
    return React.createElement(as, rest as any)
  }

  const MotionTag = (motion as any)[as]
  return <MotionTag {...(rest as any)} {...(motionProps ?? {})} />
}

export default MotionOnDesktop
