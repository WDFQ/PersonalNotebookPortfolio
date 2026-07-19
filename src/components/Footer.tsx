import { profile } from "../data/cv";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper-mid/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-pencil sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.fullName} · Hamilton, NZ
        </p>
        <p className="italic">
          Sketched with my hand &amp; orchestrated by Claude Code...
        </p>
      </div>
    </footer>
  );
}
