import type { CSSProperties } from 'react'
import { skillGroups } from '../data/cv'
import { useInView } from '../hooks/useInView'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const chipStyles = [
  'rounded-scrap-sm bg-card shadow-paper-sm',
  'rounded-scrap-alt bg-paper-low shadow-paper-sm',
  'rounded-scrap bg-card shadow-paper-sm',
]

function SkillChips({ skills }: { skills: readonly string[] }) {
  const { ref, inView } = useInView<HTMLUListElement>()
  return (
    <ul
      ref={ref}
      className={`flex flex-wrap gap-3 ${inView ? 'in-view' : ''}`}
    >
      {skills.map((skill, i) => (
        <li
          key={skill}
          className="reveal-pop"
          style={
            {
              '--reveal-delay': `${i * 0.06}s`,
              '--final-rot': `${((i % 3) - 1) * 1.2}deg`,
            } as CSSProperties
          }
        >
          {/*
            The wiggle lives on an inner span so its hover animation can't
            clobber the reveal-pop entrance animation on the <li> (both use
            the CSS `animation` property, and sharing an element made the
            chip disappear on hover).
          */}
          <span
            className={`hover-wiggle inline-block cursor-default border-2 border-ink px-4 py-1.5 font-bold ${
              chipStyles[i % chipStyles.length]
            }`}
          >
            {skill}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-y-2 border-dashed border-ink/25 bg-paper-low/60"
    >
      <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
        <SectionHeading id="skills-heading" note="02 // the toolkit">
          Skills
        </SectionHeading>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.label} className="grid gap-4 sm:grid-cols-[180px_1fr]">
              <Reveal index={groupIndex}>
                <h3 className="text-2xl font-bold">
                  <span className="highlight-swipe">{group.label}</span>
                  <span className="mt-1 block font-body text-sm font-normal italic text-pencil">
                    ({group.note})
                  </span>
                </h3>
              </Reveal>
              <SkillChips skills={group.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
