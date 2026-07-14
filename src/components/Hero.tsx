import type { CSSProperties } from "react";
import { profile } from "../data/cv";
import { useTypewriter } from "../hooks/useTypewriter";
import { useInView } from "../hooks/useInView";
import { Tape } from "./Tape";

export function Hero() {
  const typed = useTypewriter(profile.roles);
  const { ref, inView } = useInView<HTMLDivElement>(0.05);

  const nameWords = profile.shortName.split(" ");

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24 ${
          inView ? "in-view" : ""
        }`}
      >
        {/* decorative margin doodles */}
        <svg
          aria-hidden="true"
          className="float-slow absolute right-6 top-14 hidden h-16 w-16 text-red md:block"
          style={{ "--float-rot": "12deg" } as CSSProperties}
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            className="draw-path"
            d="M30 6 L36 24 L54 24 L40 35 L46 53 L30 42 L14 53 L20 35 L6 24 L24 24 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute bottom-24 right-16 hidden h-24 w-32 text-navy lg:block"
          viewBox="0 0 120 80"
          fill="none"
        >
          <path
            className="draw-path"
            style={{ "--draw-delay": "1s" } as CSSProperties}
            d="M10 10 Q 60 5 85 35 T 105 65 M105 65 l-14 -6 M105 65 l2 -15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <p
          className="reveal mb-4 font-bold uppercase tracking-[0.25em] text-red"
          aria-hidden="true"
        >
          {"// Hello, my name is"}
        </p>

        <h1 className="reveal text-5xl font-extrabold leading-[1.05] sm:text-7xl lg:text-8xl">
          {nameWords.map((word, i) => (
            <span
              key={word}
              className="reveal inline-block"
              style={
                { "--reveal-delay": `${0.1 + i * 0.12}s` } as CSSProperties
              }
            >
              {word}
              {i < nameWords.length - 1 && " "}
            </span>
          ))}
          {/* hand-drawn red underline, draws in after the name settles */}
          <svg
            className="mt-2 h-4 w-64 sm:w-96"
            viewBox="0 0 380 16"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="draw-path"
              style={
                { "--draw-delay": "0.7s", "--path-len": "400" } as CSSProperties
              }
              d="M6 10 Q 60 3 110 9 T 210 8 T 300 7 T 374 10"
              fill="none"
              stroke="var(--color-red)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </h1>

        {/* typewriter role line — role list comes verbatim from the CV */}
        <p
          className="reveal mt-6 min-h-[2.2em] text-xl font-bold text-navy sm:text-3xl"
          style={{ "--reveal-delay": "0.35s" } as CSSProperties}
        >
          <span aria-hidden="true" className="text-pencil">
            ✎{" "}
          </span>
          <span className="sr-only">Roles: {profile.roles.join(", ")}.</span>
          <span aria-hidden="true">
            {typed}
            <span className="caret text-red">|</span>
          </span>
        </p>

        <p
          className="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink"
          style={{ "--reveal-delay": "0.45s" } as CSSProperties}
        >
          {profile.tagline}{" "}
          <span className="whitespace-nowrap text-pencil">
            ⌂ {profile.location}
          </span>
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center gap-5"
          style={{ "--reveal-delay": "0.55s" } as CSSProperties}
        >
          <a
            href="#projects"
            className="rounded-scrap border-2 border-ink bg-navy px-6 py-3 font-bold text-white shadow-paper transition-all hover:-translate-y-0.5 hover:shadow-paper-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            See my work ↓
          </a>
          <a
            href="#contact"
            className="rounded-scrap-alt border-2 border-ink bg-card px-6 py-3 font-bold text-ink shadow-paper transition-all hover:-translate-y-0.5 hover:bg-highlight hover:shadow-paper-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Get in touch
          </a>
        </div>

        {/* margin note, like a scribble in a notebook */}
        <div
          className="reveal relative mt-16 inline-block max-w-xs rotate-[-1.5deg] bg-highlight px-5 py-3 shadow-paper-sm lg:absolute lg:bottom-20 lg:right-8 lg:mt-0"
          style={
            {
              "--reveal-delay": "0.7s",
              "--final-rot": "-1.5deg",
            } as CSSProperties
          }
        >
          <Tape className="-top-3 left-1/2 -translate-x-1/2" rotate={3} />
          <p className="text-sm italic leading-snug">
            note to self: currently in third year @ Waikato, open to
            opportunities&nbsp;→
          </p>
        </div>
      </div>
    </section>
  );
}
