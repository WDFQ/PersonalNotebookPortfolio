import { useInView } from '../hooks/useInView'

interface SectionHeadingProps {
  id: string
  /** Margin annotation, e.g. "01 // about" — styled like a pencil note. */
  note: string
  children: string
}

/*
  Section title with a hand-drawn red underline that draws itself
  in when scrolled into view.
*/
export function SectionHeading({ id, note, children }: SectionHeadingProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={`mb-12 ${inView ? 'in-view' : ''}`}>
      <p
        className="reveal mb-2 font-bold text-sm tracking-[0.2em] uppercase text-red"
        aria-hidden="true"
      >
        {note}
      </p>
      <h2
        id={id}
        className="reveal inline-block text-4xl sm:text-5xl font-extrabold"
        style={{ '--reveal-delay': '0.08s' } as React.CSSProperties}
      >
        {children}
        <svg
          className="mt-1 h-3 w-full"
          viewBox="0 0 300 12"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="draw-path"
            d="M4 8 Q 40 2 75 7 T 150 7 T 225 6 T 296 8"
            fill="none"
            stroke="var(--color-red)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </h2>
    </div>
  )
}
