interface TapeProps {
  className?: string
  rotate?: number
}

/** Decorative masking-tape strip pinning an element to the page. */
export function Tape({ className = '', rotate = -4 }: TapeProps) {
  return (
    <span
      aria-hidden="true"
      className={`tape ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  )
}
