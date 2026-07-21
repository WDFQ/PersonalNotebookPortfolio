import { profile } from "../data/cv";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Tape } from "./Tape";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "jeff-jia",
    href: profile.linkedin,
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5M.22 8.16h4.56V23H.22zM8.34 8.16h4.37v2.02h.06c.61-1.15 2.1-2.37 4.31-2.37 4.61 0 5.46 3.04 5.46 6.99V23h-4.55v-7.22c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.88-2.77 3.82V23H8.34z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: `@${profile.githubHandle}`,
    href: profile.github,
    external: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <SectionHeading id="contact-heading" note="05 // say hello">
        Contact
      </SectionHeading>

      <div className="grid items-start gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <Reveal>
            <p className="max-w-xl text-lg leading-relaxed">
              Wanna get in touch? My Gmail is always open to grab any type of
              caffeine and yap!
            </p>
          </Reveal>

          <Reveal index={1}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block rounded-scrap border-2 border-ink bg-red px-8 py-4 text-lg font-bold text-white shadow-paper transition-all hover:-translate-y-0.5 hover:shadow-paper-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              ✉ Write to me
            </a>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link, i) => (
              <li key={link.label}>
                <Reveal index={i + 2} variant="pop">
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="flex items-center gap-3 rounded-scrap-sm border-2 border-ink bg-card px-4 py-3 shadow-paper-sm transition-all hover:-translate-y-0.5 hover:bg-highlight hover:shadow-paper"
                  >
                    <span className="text-navy">{link.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-red">
                        {link.label}
                      </span>
                      <span className="block truncate font-bold">
                        {link.value}
                        {link.external && <span aria-hidden="true"> ↗</span>}
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* torn-out note */}
        <Reveal index={2} rotate={1.8}>
          <aside
            aria-hidden="true"
            className="relative hidden rounded-scrap-alt border-2 border-ink bg-highlight p-8 shadow-paper lg:block"
          >
            <Tape className="-top-3.5 left-10" rotate={-5} />
            <p className="text-2xl font-bold italic leading-snug text-ink">
              “工欲善其事，必先利其器 --- A craftsman who wants to do his work
              well must first sharpen his tools.”
            </p>
            <p className="mt-4 text-right text-sm text-pencil">
              - The Analects of Confucius
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
