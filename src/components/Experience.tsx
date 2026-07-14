import { experience } from '../data/cv'
import { useInView } from '../hooks/useInView'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const { ref, inView } = useInView<HTMLOListElement>(0.05)

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <SectionHeading id="experience-heading" note="03 // the story so far">
        Experience
      </SectionHeading>

      <ol
        ref={ref}
        className={`relative ml-2 space-y-10 border-none pl-8 sm:ml-4 sm:pl-12 ${
          inView ? 'in-view' : ''
        }`}
      >
        {/* red timeline spine, draws downward on reveal */}
        <span
          aria-hidden="true"
          className="timeline-spine absolute bottom-2 left-0 top-2 w-0.5 bg-red"
        />

        {experience.map((entry, i) => (
          <li key={entry.company + entry.role} className="relative">
            {/* ink dot marker */}
            <span
              aria-hidden="true"
              className="absolute -left-8 top-2 h-4 w-4 rounded-full border-2 border-ink bg-navy shadow-paper-sm sm:-left-12"
            />
            <Reveal index={i} rotate={i % 2 === 0 ? -0.6 : 0.6}>
              <article className="rounded-scrap border-2 border-ink bg-card p-6 shadow-paper transition-transform duration-300 hover:-translate-y-1 hover:rotate-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-bold">{entry.company}</h3>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-red">
                    {entry.period}
                  </p>
                </div>
                <p className="mt-1 font-bold italic text-navy">
                  {entry.role}
                  {entry.tag && (
                    <span className="ml-3 inline-block rounded-scrap-sm border-2 border-navy bg-paper-low px-2 py-0.5 text-xs font-bold uppercase not-italic tracking-widest text-navy">
                      {entry.tag}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm text-pencil">⌂ {entry.location}</p>
                <p className="mt-3 leading-relaxed">{entry.summary}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
