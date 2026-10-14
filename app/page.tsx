const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
    <path d="M3.5 12.5 12 4M6 3.5h6.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Spark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <path d="M12 2.8 14 10l7.2 2-7.2 2-2 7.2-2-7.2-7.2-2 7.2-2 2-7.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-tight" aria-label="CodeCrafters home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Spark /></span>
          <span>Code<span className="text-primary">Crafters</span></span>
        </a>
        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:flex">
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#meet" className="transition-colors hover:text-primary">Meet us</a>
        </div>
        <a href="https://example.com/join-codecrafters" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
          Join the club <ArrowUpRight />
        </a>
      </nav>

      <section id="top" className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary"><span className="h-px w-8 bg-primary" /> Ahmedabad&apos;s developer community</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-[6.3rem]">Make ideas<br /><span className="text-primary">real.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">CodeCrafters Developer Club is a community for developers, students, and tech enthusiasts who love building things with technology.</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="https://example.com/join-codecrafters" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5">Join CodeCrafters <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground/15 transition-transform group-hover:translate-x-0.5"><ArrowUpRight /></span></a>
            <span className="text-sm text-muted-foreground">Everyone interested in technology is welcome.</span>
          </div>
        </div>
        <div className="relative mx-auto flex min-h-[22rem] w-full max-w-md items-center justify-center lg:min-h-[30rem]">
          <div className="absolute inset-[8%] rounded-[3rem] bg-primary/10 rotate-6" />
          <div className="absolute inset-[18%] rounded-[2.5rem] border border-primary/25 -rotate-6" />
          <div className="relative flex aspect-square w-[72%] rotate-3 flex-col justify-between rounded-[2.5rem] bg-primary p-7 text-primary-foreground shadow-2xl shadow-primary/30 sm:p-9">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em]"><span>Build</span><Spark /></div>
            <p className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Together<br /><span className="text-primary-foreground/55">better.</span></p>
            <p className="text-sm text-primary-foreground/75">Workshops · Hackathons · Open source</p>
          </div>
          <span className="absolute left-0 top-[18%] h-3 w-3 rounded-full bg-primary" />
          <span className="absolute bottom-[15%] right-0 h-5 w-5 rounded-full border-2 border-primary" />
        </div>
      </section>

      <section id="meet" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl divide-y divide-border px-6 lg:grid-cols-2 lg:divide-x lg:divide-y-0 lg:px-10">
          <div className="flex gap-5 py-9 lg:pr-12"><div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><span className="text-lg font-bold">Sa</span></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">When we meet</p><p className="mt-2 text-lg font-semibold">Every Saturday, 4:00 PM–6:00 PM</p></div></div>
          <div className="flex gap-5 py-9 lg:pl-12"><div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><span className="h-3 w-3 rounded-full border-2 border-primary" /></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Where we meet</p><p className="mt-2 text-lg font-semibold">Innovation Hub</p><p className="mt-1 text-sm text-muted-foreground">Ahmedabad, Gujarat, India</p></div></div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:px-10 lg:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">01 / What we do</p>
        <div><h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">A welcoming space to learn, experiment, and build with technology.</h2><p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">We organize coding workshops, hackathons, open-source projects, and discussions on AI, web development, and software engineering.</p></div>
      </section>

      <footer className="bg-foreground text-background"><div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-10"><div><p className="text-2xl font-semibold tracking-tight">Come build with us.</p><p className="mt-2 text-sm text-background/60">Every Saturday · Innovation Hub, Ahmedabad</p></div><a href="https://example.com/join-codecrafters" className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:self-auto">Register to join <ArrowUpRight /></a></div></footer>
    </main>
  )
}
