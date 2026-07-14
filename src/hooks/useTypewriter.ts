import { useEffect, useState } from 'react'

/*
  Types each phrase out, pauses, deletes it, then moves to the next.
  Respects prefers-reduced-motion by showing the first phrase statically.
*/
export function useTypewriter(
  phrases: readonly string[],
  typeMs = 55,
  deleteMs = 28,
  holdMs = 2100,
) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduced) return
    const phrase = phrases[phraseIndex]

    let delay: number
    if (!deleting && text === phrase) {
      delay = holdMs
    } else if (deleting && text === '') {
      delay = 350
    } else {
      delay = deleting ? deleteMs : typeMs
    }

    const timer = window.setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      } else {
        setText(
          deleting
            ? phrase.slice(0, text.length - 1)
            : phrase.slice(0, text.length + 1),
        )
      }
    }, delay)
    return () => window.clearTimeout(timer)
  }, [text, deleting, phraseIndex, phrases, reduced, typeMs, deleteMs, holdMs])

  return reduced ? phrases[0] : text
}
