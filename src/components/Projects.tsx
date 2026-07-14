import { projects } from '../data/cv'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Tape } from './Tape'

/*
  PLACEHOLDER IMAGES: these SVG mockups (src/assets/placeholders/) are
  stand-ins generated for layout purposes. Swap each one for a real
  screenshot of the project when available.
*/
import revdexShot from '../assets/placeholders/revdex.svg'
import testpilotShot from '../assets/placeholders/testpilot.svg'
import suppsenseShot from '../assets/placeholders/suppsense.svg'
import subnetShot from '../assets/placeholders/subnet.svg'

const screenshots = {
  revdex: revdexShot,
  testpilot: testpilotShot,
  suppsense: suppsenseShot,
  subnet: subnetShot,
} as const

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-y-2 border-dashed border-ink/25 bg-paper-low/60"
    >
      <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
        <SectionHeading id="projects-heading" note="04 // things I've built">
          Projects
        </SectionHeading>

        <ul className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.name}>
              <Reveal index={i} rotate={i % 2 === 0 ? -1 : 1}>
                {/* polaroid-style card pinned with tape */}
                <article className="group relative flex h-full flex-col border-2 border-ink bg-card p-4 pb-6 shadow-paper transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-paper-lg">
                  <Tape className="-top-3.5 left-1/2 -translate-x-1/2" rotate={i % 2 === 0 ? -3 : 4} />

                  <div className="overflow-hidden border-2 border-ink/80 bg-paper-mid">
                    <img
                      src={screenshots[project.image]}
                      alt={project.imageAlt}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="block aspect-[8/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      {/* red date stamp */}
                      <span className="rotate-2 border-2 border-red px-2 py-0.5 text-xs font-bold uppercase tracking-[0.18em] text-red">
                        {project.year}
                      </span>
                    </div>

                    <p className="mt-3 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <ul
                      className="mt-4 flex flex-wrap gap-2"
                      aria-label={`Technologies used in ${project.name}`}
                    >
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-scrap-sm border border-navy bg-paper-low px-2.5 py-0.5 text-xs font-bold text-navy"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal index={2}>
          <p className="mt-12 text-center italic text-pencil">
            ✎ screenshots above are placeholder sketches — real ones coming
            soon. More on{' '}
            <a
              href="https://github.com/WDFQ"
              target="_blank"
              rel="noreferrer"
              className="squiggle-link font-bold text-navy"
            >
              GitHub ↗
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
