import { about, education } from '../data/cv'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Tape } from './Tape'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <SectionHeading id="about-heading" note="01 // margin notes">
        About me
      </SectionHeading>

      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-6 text-lg leading-relaxed">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} index={i}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        {/* education index card, taped into the margin */}
        <Reveal index={2} rotate={1.5}>
          <aside
            aria-label="Education"
            className="relative rounded-scrap border-2 border-ink bg-card p-6 shadow-paper"
          >
            <Tape className="-top-3.5 left-8" rotate={-6} />
            <Tape className="-bottom-3.5 right-8" rotate={5} />
            <h3 className="text-xl font-bold">
              <span className="highlight-swipe">Education</span>
            </h3>
            <p className="mt-3 font-bold text-navy">{education.institution}</p>
            <p className="text-sm text-pencil">
              {education.degree} · {education.period}
            </p>
            <p className="mt-1 text-sm text-pencil">{education.location}</p>

            <h4 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-red">
              Coursework
            </h4>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              {education.coursework.map((course) => (
                <li key={course} className="before:mr-1 before:text-red before:content-['✓']">
                  {course}
                </li>
              ))}
            </ul>

            <h4 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-red">
              Scholarships
            </h4>
            <ul className="mt-2 space-y-1 text-sm">
              {education.scholarships.map((scholarship) => (
                <li key={scholarship} className="before:mr-1 before:text-navy before:content-['★']">
                  {scholarship}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
