import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  /** Stagger index — each step adds 90ms of delay. */
  index?: number
  /** 'settle' drops in like a sheet of paper; 'pop' springs in like a sticker. */
  variant?: 'settle' | 'pop'
  /** Final resting rotation in degrees (for the hand-placed look). */
  rotate?: number
  className?: string
}

export function Reveal({
  children,
  index = 0,
  variant = 'settle',
  rotate = 0,
  className = '',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const style: CSSProperties = {
    '--reveal-delay': `${index * 0.09}s`,
    '--final-rot': `${rotate}deg`,
    '--settle-rot': `${rotate + 1.5}deg`,
  } as CSSProperties

  return (
    <div
      ref={ref}
      style={style}
      className={`${variant === 'pop' ? 'reveal-pop' : 'reveal'} ${
        inView ? 'in-view' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
