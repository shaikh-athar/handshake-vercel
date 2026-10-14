const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
    <path d="M3.5 12.5 12 4M6 3.5h6.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CalendarMark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight" aria-label="DevConnect home">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">D</span>
          <span>DevConnect<span className="text-primary">26</span></span>
        </a>
        <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground sm:flex">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#details" className="transition-colors hover:text-foreground">Details</a>
          <a href="#register" className="transition-colors hover:text-foreground">Register</a>
        </div>
        <a href="https://example.com/devconnect-registration" className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:flex">
          Get tickets <ArrowUpRight />
        </a>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary"><span className="h-px w-8 bg-primary" /> Ahmedabad · 2026</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.6rem]">Build what&apos;s<br /><span className="text-primary">next.</span></h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground">DevConnect 2026 — Developer Meetup</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a id="register" href="https://example.com/devconnect-registration" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
              Register now <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-0.5"><ArrowUpRight /></span>
            </a>
            <span className="text-sm text-muted-foreground">One day. Real-world ideas.</span>
          </div>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center lg:justify-end">
          <div className="absolute inset-[9%] rounded-full bg-primary/10" />
          <div className="absolute inset-[17%] rounded-full border border-primary/25" />
          <div className="relative grid h-56 w-56 place-items-center rounded-[2.5rem] bg-primary text-primary-foreground shadow-2xl shadow-primary/30 rotate-6 sm:h-72 sm:w-72">
            <div className="-rotate-6 text-center"><p className="text-[5.5rem] font-semibold leading-none tracking-[-0.1em]">26</p><p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em]">Connect / Create</p></div>
          </div>
          <span className="absolute left-[8%] top-[20%] h-3 w-3 rounded-full bg-primary sm:left-[13%]" />
          <span className="absolute bottom-[17%] right-[8%] h-5 w-5 rounded-full border-2 border-primary sm:right-[2%]" />
        </div>
      </section>

      <section id="details" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl divide-y divide-border px-6 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-10">
          <div className="flex gap-4 py-8 lg:pr-10"><CalendarMark /><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">When</p><p className="mt-2 font-medium">November 21, 2026</p><p className="mt-1 text-sm text-muted-foreground">10:00 AM–4:00 PM</p></div></div>
          <div className="flex gap-4 py-8 lg:px-10"><div className="mt-1 h-5 w-5 rounded-full border-2 border-primary" /><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Where</p><p className="mt-2 font-medium">The Mill</p><p className="mt-1 text-sm text-muted-foreground">Ahmedabad, Gujarat, India</p></div></div>
          <div className="flex gap-4 py-8 lg:pl-10"><div className="mt-1 h-5 w-5 rounded-md border-2 border-primary" /><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Who it&apos;s for</p><p className="mt-2 max-w-xs font-medium leading-6">Software developers, students, tech enthusiasts, and aspiring AI engineers.</p></div></div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">01 / The meetup</p>
        <div><h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">A day for practical ideas, useful conversations, and the people building the future of software.</h2><p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">Join a day of practical tech talks, live coding sessions, and discussions about modern software engineering and AI. Connect with fellow developers, exchange ideas, and explore new tools and technologies.</p></div>
      </section>

      <footer className="bg-foreground text-background"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-10"><div><p className="text-2xl font-semibold tracking-tight">See you at DevConnect<span className="text-primary">26</span>.</p><p className="mt-2 text-sm text-background/60">The Mill, Ahmedabad · November 21, 2026</p></div><a href="https://example.com/devconnect-registration" className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:self-auto">Register at example.com <ArrowUpRight /></a></div></footer>
    </main>
  )
}
